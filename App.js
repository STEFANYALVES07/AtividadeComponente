import { View } from "react-native";
import { styles } from "./src/style/StyleSheet";
import TouchComponent from "./src/components/TouchComponent";

export default function App() {
  return (
    <View style={styles.container}>
      <TouchComponent texto={"log in"} />
      <TouchComponent texto={"enter"} />
      <TouchComponent texto={"xxxx"} />
    </View>
  );
}
