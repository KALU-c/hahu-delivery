import { Account, Avatars, Client, Databases, ID } from "react-native-appwrite"

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.realkal.delivery",
  projectId: "66e530700030f6e44245",
  databaseId: "66e5320c0031ab47e13d",
  userCollectionId: "66e5322700330bdbcdf5",
  photoCollectionId: "66e53296003b8793ce69",
  restaurantCollectionId: "66e532fd00368a508235",
  storageId: "66e5344e0039f02b6045"
};

const client = new Client();

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email: string, password: string, name: string) => {
  try {
    const newAccount = await account.create(ID.unique(), email, password, name);

    if (!newAccount) throw Error;

    const avatarUrl = avatars.getInitials(name);

    await signIn(email, password);

    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        name,
        avatarUrl: avatarUrl
      }
    );

    return newUser;
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong while creating new user!");
  }
}

export const createRestaurant = async (email: string, password: string, name: string) => {
  try {
    const newRestaurantAccount = await account.create(ID.unique(), email, password, name);

    if (!newRestaurantAccount) throw Error;

    const restaurantAvatarUrl = avatars.getInitials(name);

    await signIn(email, password);

    const newRestaurant = await databases.createDocument(
      config.databaseId,
      config.restaurantCollectionId,
      ID.unique(),
      {
        name,
        email,
        avatar: restaurantAvatarUrl,
        accountId: newRestaurantAccount.$id
      }
    );

    return newRestaurant;
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong while creating restaurant account");
  }
}

export const signIn = async (email: string, password: string) => {
  try {
    const session = await account.createEmailPasswordSession(email, password);

    // deletes created sessions
    // if not you get this error:
    //  [AppwriteException: Creation of a session is prohibited when a session is active
    await account.deleteSession(session.$id);

    return session;
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong while signing the user!");
  }
}