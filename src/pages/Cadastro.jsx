import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import AnimatedLottieView from "lottie-react-native";

export function Cadastro() {
  return (
    <View style={styles.container}>
      <View style={styles.gifView}>
        <AnimatedLottieView
          source={require("../assets/signUp.json")}
          autoPlay
          loop
        />
      </View>
      <View style={styles.inputView}>
        <TextInput placeholder="E-mail acadêmico" style={styles.input} />
        <TextInput secureTextEntry placeholder="Senha" style={styles.input} />
        <TouchableOpacity style={styles.btn}>
          <Text>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  gifView: {
    flex: 0.4,
    justifyContent: "center",
    alignContent: "center",
  },

  inputView: {
    flex: 0.6,
    alignItems: "center",
    marginTop: "5%",
  },

  input: {
    backgroundColor: "#ccc",
    height: "14%",
    borderRadius: 8,
    width: "80%",
    marginBottom: "5%",
    paddingHorizontal: 20,
    fontSize: 16,
  },

  btn: {
    backgroundColor: "gray",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    marginTop: "5%",
    height: "12%",
  },
});
