import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Witaj u Anity</Text>
        {/* <Image style={styles.image} source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }} /> */}
        <Button
          title={"Start!"}
          color='#e34400'
          onPress={() => alert("Hurra!!!")}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffd097",
  },
  title: {
    color: "#e34400",
    fontSize: 40,
    marginBottom: 50
  },
  image: {
    width: 50,
    height: 50,
    marginTop: 30,
    marginBottom: 20,
  },
  button: {
    color: "#fff",
    backgroundColor: "#e34400",
  },
});