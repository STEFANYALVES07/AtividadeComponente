import { View, Text } from "react-native";
import { styles } from "../style/StyleSheet";

export default function Texto3({ children }) {
  return (
    <View>
      <Text style={styles.texto}>Terceiro texto</Text>

      {children}
    </View>
  );
}
