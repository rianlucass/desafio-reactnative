import React from "react";
import { SafeAreaView, FlatList } from "react-native";
import Post from "./src/components/post";

const posts = Array.from({ length: 500 }, (_, i) => ({
  id: i + 1,
  title: `Post ${i + 1}`,
  image: "logo",
  summary: "Esse é um resumo do post.",
}));


export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f0f0f0" }}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Post id={item.id} title={item.title} image={item.image} summary={item.summary} />
        )}
      />
    </SafeAreaView>
  );
}
