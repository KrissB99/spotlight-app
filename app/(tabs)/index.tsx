import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/auth.styles";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Link href="/notifications">
        <Text>Go to Notifications</Text>
      </Link>
    </View>
  );
}
