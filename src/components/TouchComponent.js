import { styles } from "../style/StyleSheet";
import { TouchableOpacity } from "react-native";

export default function TouchComponent({ texto }) {
  return (
    <TouchableOpacity
      style={styles.tn1}
      onPress={() => console.log("Voce apertou o botão")}
    >
      {texto}
    </TouchableOpacity>
  );
}
