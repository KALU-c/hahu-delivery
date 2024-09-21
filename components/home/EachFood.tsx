import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import images from "@/constants/images";

type EachFoodProps = {
  name: string;
  restaurant: string;
  price: number;
  handlePress?: () => void;
};

const EachFood = ({ name, restaurant, price, handlePress }: EachFoodProps) => {
  return (
    <Pressable
      className='w-[160px] items-center justify-start rounded-xl shadow bg-white pb-4 mr-2 ml-2 mb-3'
      style={styles.boxShadow}
      onPress={handlePress}
    >
      <Image
        source={images.burger}
        className='h-[110px] w-[110px] self-center my-2'
        resizeMode='contain'
      />
      <Text className='font-SenBold text-[21px] items-start w-full px-2 mb-2'>
        {name.length > 8 ? `${name.slice(0, 8)}..` : name}
      </Text>
      <View className='flex-row justify-between w-full px-2 rounded-lg'>
        <Text className='font-SenRegular text-[18px]'>
          {restaurant.length > 6 ? `${restaurant.slice(0, 6)}..` : restaurant}
        </Text>
        <Text className='font-SenRegular text-[19px]'>${price}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  boxShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  }
});

export default EachFood;










// {
//   "workbench.colorTheme": "Dark Magic Night",
//   "editor.fontSize": 17,
//   "workbench.iconTheme": "symbols",
//   "terminal.integrated.defaultProfile.windows": "PowerShell",
//   "[javascript]": {
//     "editor.defaultFormatter": "esbenp.prettier-vscode"
//   },
//   "editor.formatOnSave": true,
//   "editor.minimap.enabled": false,
//   "git.enableSmartCommit": true,
//   "workbench.startupEditor": "none",
//   "editor.tabSize": 2,
//   "explorer.confirmDelete": false,
//   "[html]": {
//     "editor.defaultFormatter": "esbenp.prettier-vscode"
//   },
//   "[typescriptreact]": {
//     "editor.defaultFormatter": "vscode.typescript-language-features"
//   },
//   "explorer.confirmDragAndDrop": false,
//   "editor.fontFamily": "'CaskaydiaCove Nerd Font', Consolas, 'Courier New', monospace",
//   "[typescript]": {
//     "editor.defaultFormatter": "vscode.typescript-language-features"
//   },
//   "explorer.compactFolders": false,
//   "diffEditor.hideUnchangedRegions.enabled": true,
//   "reactSnippets.settings.importReactOnTop": false,
//   "[dart]": {
//     "editor.formatOnSave": true,
//     "editor.formatOnType": true,
//     "editor.rulers": [80],
//     "editor.selectionHighlight": false,
//     "editor.suggestSelection": "first",
//     "editor.tabCompletion": "onlySnippets",
//     "editor.wordBasedSuggestions": "off"
//   },
//   "workbench.productIconTheme": "fluent-icons",
//   // From Youtube
//   // "editor.fontFamily": "Dank Mono",
//   // "editor.fontFamily": "Fragment Mono",
//   // "editor.fontFamily": "Roboto",
//   // "editor.fontWeight": "bold",
//   "editor.fontLigatures": true,
//   "editor.defaultFormatter": "esbenp.prettier-vscode",
//   "breadcrumbs.enabled": false,
//   "editor.wordWrap": "on",
//   "editor.cursorBlinking": "expand",
//   "editor.find.cursorMoveOnType": false,
//   "editor.cursorSmoothCaretAnimation": "on",
//   "emmet.includeLanguages": {
//     "javascript": "javascriptreact"
//   },
//   "terminal.integrated.enableMultiLinePasteWarning": "never",
//   "git.openRepositoryInParentFolders": "never",
//   // "workbench.iconTheme": "material-icon-theme",
//   "javascript.updateImportsOnFileMove.enabled": "always",
//   "editor.accessibilitySupport": "off",
//   "terminal.integrated.env.windows": {},
//   "git.autofetch": true,
//   "workbench.statusBar.visible": false,
//   // "workbench.colorTheme": "Dark Magic Themes",
//   "window.menuBarVisibility": "compact",
//   "workbench.layoutControl.enabled": false,
//   "window.commandCenter": false,
//   "workbench.sideBar.location": "right",
//   "editor.lineHeight": 25,
//   "terminal.integrated.cursorStyle": "line",
//   "terminal.integrated.cursorBlinking": true,
//   "workbench.settings.applyToAllProfiles": [],
//   "editor.guides.indentation": false,
//   "cSpell.dictionaryDefinitions": [],
//   "cSpell.words": [
//     "Zemenu",
//     "Endekalu",
//     "RealKal",
//     "Bersufekad",
//     "Chombe",
//     "Dawit",
//     "Chapi",
//     "Pressable",
//     "kal",
//     "kalu",
//     "papi",
//     "aora",
//     "pregular",
//     "psemibold",
//     "hahu",
//     "firebaseapp",
//     "appspot"
//   ],
//   "git.confirmSync": false,
//   "emulator.emulatorPathWindows": "C:\\Users\\admin\\AppData\\Local\\Android\\Sdk\\emulator\\",
//   "security.allowedUNCHosts": ["wsl.localhost"],
//   "editor.codeActionsOnSave": {
    
//   }
//   // "workbench.activityBar.location": "hidden",
// }
