import { useState } from 'react';
import { View, Text, ScrollView, Image, Pressable, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import icons from '@/constants/icons';
import CustomInput from '@/components/CustomInput';
import CustomButton from '@/components/CustomButton';
import { Link, router } from 'expo-router';
import { createUser } from '@/lib/firebase';

const SignUp = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const submitForm = async () => {
    if (form.name.length >= 6 && form.email !== "" && form.password.length >= 6) {
      setSubmitting(true);
      try {
        const result = await createUser(form.email, form.password, form.name);
        // set it to global state
        // console.log(result);
        if (result?.displayName === form.name && result.email === form.email) {
          router.replace("/home");
        } else {
          Alert.alert("Registration Failed", "Something went wrong, please try again");
        }

      } catch (error) {
        console.log(error);
      } finally {
        setSubmitting(false);
      }
    } else {
      Alert.alert("Input Field", "Name: >= 6 characters \nPassword: >= 6 characters")
    }
  };

  return (
    <SafeAreaView>
      <ScrollView className='relative bg-dark h-full'>
        <Pressable
          className='absolute p-6 items-center justify-center bg-primary left-5 top-10 z-10 rounded-full'
          onPress={() => router.replace("/sign-in")}
        >
          <Image
            source={icons.back}
            width={5}
            height={5}
            className='absolute w-[20px] h-[20px] z-10' resizeMode='contain'
          />
        </Pressable>

        <Image source={icons.darkEllipse} width={200} height={200} className='absolute' />
        <Image source={icons.dottedLine} className='absolute right-0' />

        <View className='h-[27vh] items-center justify-end py-10'>
          <Text className='text-primary font-SenBold text-[30px]'>Sign Up</Text>
          <Text className='text-primary font-SenRegular text-[16px]'>Please sign up to create new account</Text>
        </View>

        <View className='h-[73vh] bg-primary rounded-t-2xl py-10 px-6'>
          <View>
            <CustomInput
              title='NAME'
              value={form.name}
              handleTextChange={text => setForm({ ...form, name: text })}
            />
            <CustomInput
              title='EMAIL'
              value={form.email}
              handleTextChange={text => setForm({ ...form, email: text })}
            />
            <CustomInput
              title='PASSWORD'
              value={form.password}
              handleTextChange={text => setForm({ ...form, password: text })}
            />
          </View>

          <CustomButton title='SIGN UP' otherStyle='mt-4' handlePress={submitForm} isSubmitting={isSubmitting} />

          <Text className='text-center mt-2 text-base font-SenMedium'>
            Have an account already? {" "}
            <Link href="/sign-in" className='text-secondary font-SenSemibold'>
              Sign In
            </Link>
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}
export default SignUp