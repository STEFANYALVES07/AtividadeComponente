import { View, Text } from "react-native";
import { styles } from "../style/StyleSheet";

export default function Texto({ children }) {
  return (
    <View>
      <Text style={styles.texto}>Primeiro texto</Text>
      {children}
    </View>
  );
}
