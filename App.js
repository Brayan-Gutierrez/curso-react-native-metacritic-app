import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
  Pressable,
} from "react-native";
import { getLatestGames } from "./lib/metacritic";

// import icon from './assets/icon.png'
const icon = require("./assets/icon.png");

export default function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    console.log("si hola");
    getLatestGames().then((games) => {
      console.log(games);
      setGames(games);
    });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {games.map((game) => (
        <View key={game.slug} style={styles.card}>
          <Image
            source={{ uri: game.image }}
            style={{ width: 107, height: 147, borderRadius: 10 }}
          />
        </View>
      ))}
      <Image
        source={icon}
        style={{
          width: 100,
          height: 100,
          resizeMode: "center",
        }}
      />
      {/* <Image
        source={{
          uri: "https://www.metacritic.com/a/img/resize/bd372e705abd157470dccf12068ff226390b9dba/catalog/provider/6/3/6-1-844837-13.jpg?auto=webp&fit=cover&height=300&width=200",
        }}
        style={{ width: 200, height: 324 }}
      /> */}
      {/* <Text style={{ color: "white" }}>
        Open up App.js to start working on your app!
      </Text> */}
      {/* <Button color="blue" title="Pulsa aquí" onPress={() => alert("Hola")} /> */}
      {/* <TouchableHighlight
        underlayColor={"#09f"}
        onPress={() => alert("Hola 2")}
        style={{
          width: 200,
          height: 200,
          backgroundColor: "red",
          borderRadius: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white" }}>Pulsa aquí</Text>
      </TouchableHighlight> */}
      {/* <Pressable
        onPress={() => {}}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "red" : "white",
            fontSize: pressed ? 32 : 16,
          },
          styles.wrapperCustom,
        ]}
      >
        {({ pressed }) => (
          <Text style={{ fontSize: pressed ? 32 : 16 }}>
            {pressed ? "Pressed!" : "Press Me"}
          </Text>
        )}
      </Pressable> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
