import { TouchableOpacity } from "react-native";
import { styles } from "../style/StyleSheet";
import { Text, View } from "react-native";

export default function Button1({ children }) {
  return (
    <View>
      <TouchableOpacity
        style={styles.tn1}
        onPress={() => console.log("Voce apertou o botão")}
      >
        <Text>Log In</Text>
        {children}
      </TouchableOpacity>
    </View>
  );
}
