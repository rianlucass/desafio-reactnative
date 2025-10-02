import React, { useState } from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";
const logo = require("../assets/logo.png");
import { themes } from "../global/themes";

type PostProps = {
  id: number;
  title: string;
  image: string;
  summary: string;
};

export default function Post({ id, title, summary }: PostProps) {
  const [comments, setComments] = useState<string[]>([]);

  const addComment = () => {
    setComments([...comments, `Comentário no post ${id}`]);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Image source={ logo } style={styles.image} />
      <Text>{summary}</Text>

      <Button title="Adicionar Comentário" onPress={addComment} />

      {comments.map((c, index) => (
        <Text key={index} style={styles.comment}>
          {c}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: themes.colors.card,
    padding: 12,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 3,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  image: {
    width: 200,
    height: 150,
    marginVertical: 8,
  },
  comment: {
    fontSize: 14,
    marginTop: 4,
    color: themes.colors.text,
  },
});
