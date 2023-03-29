import {Component} from 'react'
import { Text, View, StyleSheet } from "react-native";
import Card from "./src/components/Card";

export default class App extends Component {
  state = {
    filmes : [
      {
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSum0nKRdm6cKd5c2kPJd6Ik-M00eYFYqttzT__a1NWOWueZtbj",
        titulo: "Por Lugares Incríveis",
        genero: "Romance/Drama",
      },
      {
        capa: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS1nI_Z3FYp-mE3L83VBWb60wJpbzFcK2we7_ZeV0W0yLgjE-x3",
        titulo: "Velozes e Furiosos 9",
        genero: "Ação/Aventura",
      },
      {
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1LstVtKYXUJMTZdi8SNZND7Gs6yBkly9mvDabHh9Og_nLBFSC",
        titulo: "Não! Não Olhe!",
        genero: "Terror/Ficção científica",
      },
      {
        capa: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSlATjWsAAnvAG09Bw0DxDYT1nUHu7efRPkMmP23BghW97PW3Mb",
        titulo: "A Vida Depois",
        genero: "Drama/Adolescente",
      },
      {
        capa: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSPIwh-wreoOZDC1Mcd_I4XYPh2Z-Nz_NiK-QdgtGEbCJPDlFYC",
        titulo: "Encanto",
        genero: "Infantil/Comédia",
      }
    ]
  } 

  deletar(pos) {
    const filmes = [...this.state.filmes]
    filmes.splice(pos, 1)
    this.setState({ filmes } )    
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}> Filmes </Text>
        <View style={styles.conteudo}>
          {this.state.filmes.map((filme, index) => (
            <Card key={index} filme={filme} onDelete={() => this.deletar(index)}/>          
            ))}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#555",
    alignItems: "center",
    paddingTop: 40,
    justifyContent: "center",
  },
  conteudo: {
    flex: 1,
    backgroundColor: "#ccc",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
  },
  texto: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 100,
    fontWeigth: "bold",
    paddingTop: "20%",
  },
});
