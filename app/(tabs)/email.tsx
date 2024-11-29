import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function MyTabScreen() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<null|string>(null);

  const checkEmail = (): void => {
    // alert(email);
    if (!email.includes('@')) {
      setError('Email needs at sign (@)!');
      return;
    }
    if (email.length < 3) {
      setError('Email must be minimum 3 characters!');
      return;
    }
    if (!error) alert(`Your email is ok: ${email}`)
    else {
      alert(`${error}`);
      setError(null)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>What is your email?</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder='Email'
      />
      <Button color='green' title='Wyślij' onPress={() => checkEmail()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#a3ff97",
  },
  label: {
    fontSize: 18,
    color: "green",
    fontWeight: "500",
    marginBottom: 10,
  },
  input: {
    height: 40,
    width: 200,
    fontSize: 20,
    padding: 5,
    margin: 10,
    borderColor: "green",
    borderWidth: 1,
    borderRadius: 10,
  }
});