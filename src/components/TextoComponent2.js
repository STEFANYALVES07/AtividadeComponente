import { View, Text } from "react-native";
import { styles } from "../style/StyleSheet";

export default function Texto2({ children }) {
  return (
    <View>
      <Text style={styles.texto}>Segundo texto</Text>

      {children}
    </View>
  );
}
