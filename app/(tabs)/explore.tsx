import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function TabTwoScreen() {
  const [name, setName] = useState<string>("");

  return (
    <View style={styles.container}>
      <Text style={styles.label}>What is your name?</Text>
      <TextInput style={styles.input} onChangeText={setName} value={name} placeholder='Imię' />
      <Button title="Wyślij" onPress={() => alert(`Cześć, ${name}!`)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97e0ff",
  },
  label: {
    fontSize: 18,
    color: "blue",
    fontWeight: "500",
    marginBottom: 10
  },
  input: {
    height: 40,
    width: 200,
    fontSize: 20,
    padding: 5,
    margin: 10,
    borderColor: "blue",
    borderWidth: 1,
    borderRadius: 10
  }
});
