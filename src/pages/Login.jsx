import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export function Login() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.viewUp}>
        <Text>Local da logo</Text>
        <Text>Bem-Vindo</Text>
      </View>

      <View style={styles.viewDown}>
        <TextInput placeholder="E-mail acadêmico" style={styles.input} />
        <TextInput secureTextEntry placeholder="Senha" style={styles.input} />
        <TouchableOpacity style={styles.btn}>
          <Text>Entrar</Text>
        </TouchableOpacity>
        <View style={styles.textView}>
          <Text style={styles.text}>Esqueceu sua senha?</Text>
          <Text
            style={{ color: "blue", fontSize: 16 }}
            onPress={() => navigation.navigate("Cadastre-se")}
          >
            Criar Conta
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: "3%",
  },

  viewUp: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },

  viewDown: {
    flex: 0.5,
    alignItems: "center",
  },

  input: {
    backgroundColor: "#ccc",
    height: "15%",
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
    marginBottom: "10%",
    height: "12%",
  },

  textView: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },

  text: {
    fontSize: 16,
  },
});
