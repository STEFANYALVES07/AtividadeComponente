import { TouchableOpacity, ImageBackground } from "react-native";
import { styles } from "../style/StyleSheet";
import { Text, View, Image } from "react-native";

export default function Button3({ children }) {
  return (
    <View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => console.log("Voce apertou a img")}
      >
        <Image
          source={require("../assets/images/estelar2.png")}
          resizeMode="cover"
          style={styles.image}
        ></Image>
        {children}
      </TouchableOpacity>
    </View>
  );
}
