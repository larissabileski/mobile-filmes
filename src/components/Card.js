import { Image, Text, View, StyleSheet } from "react-native";

export default function Card(props) {
  return (
    <View style={styles.card}>
      <Image style={styles.filme} source={{ uri: props.filme.capa }} />
      <Text style={{ color: "dark" }}> {props.filme.titulo} </Text>
      <Text style={{ fontSize: 12 }}> {props.filme.preco} </Text>
      <Text> {props.filme.genero} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "gray",
    width: "40%",
    height: 220,
    borderRadius: 10,
    margin: 20,
  },
  filme: {
    resizeMode: "stretch",
    width: "100%",
    height: 140,
    borderRadius: 10,
  },
});
