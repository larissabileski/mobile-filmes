import { Image, Text, View, Button, StyleSheet } from "react-native";

export default function Card(props) {
  return (
    <View style={styles.card}>
      <Image style={styles.filme} source={{ uri: props.filme.capa }} />
      <Text> {props.filme.titulo} </Text>
      <Text> {props.filme.genero} </Text>
      <Button
        onPress={props.onDelete}
        title="apagar"
        color="black"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "gray",
    width: "40%",
    height: 250,
    borderRadius: 10,
    margin: 20,
  },
  filme: {
    resizeMode: "stretch",
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
});
