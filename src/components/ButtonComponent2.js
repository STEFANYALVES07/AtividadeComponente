import { TouchableOpacity } from "react-native";
import { styles } from "../style/StyleSheet";
import { Text, View } from "react-native";

export default function Button2({ children }) {
  return (
    <View>
      <TouchableOpacity
        style={styles.tn2}
        onPress={() => console.log("Voce apertou o botão")}
      >
        <Text>Sign In</Text>
        {children}
      </TouchableOpacity>
    </View>
  );
}
