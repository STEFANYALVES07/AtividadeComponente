import { View } from "react-native";
import Texto from "./src/components/TextoComponent";
import { styles } from "./src/style/StyleSheet";
import Texto2 from "./src/components/TextoComponent2";
import Texto3 from "./src/components/TextoComponent3";
import Button1 from "./src/components/ButtonComponent";
import Button2 from "./src/components/ButtonComponent2";
import Button3 from "./src/components/ButtonComponent3";

export default function App() {
  return (
    <View style={styles.container}>
      <Texto>
        <Texto2 />
        <Texto3 />
        <Button1 />
        <Button2 />
        <Button3 />
      </Texto>
    </View>
  );
}
