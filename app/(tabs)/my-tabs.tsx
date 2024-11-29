import { StyleSheet, Text, View } from "react-native";

export default function MyTabScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Tab</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#a3ff97",
  },
  title: {
    color: "green",
    fontSize: 40,
  },
});