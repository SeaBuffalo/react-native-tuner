import { StyleSheet, Text, View } from "react-native";
import Needle from "./components/Needle.jsx";
import { useState } from "react";
import Note from "./components/Note.jsx";

export default function App() {
  const [tuning, setTuning] = useState(["E", "A", "D", "G", "B", "E"]);

  const renderNotes = () => {
    const left = tuning.slice(0, 3);
    const right = tuning.slice(3);
    
    
  };

  renderNotes();

  return (
    <View style={styles.app}>
      <Needle />
      <View style={styles.noteContainer}>
        {tuning.map((n, i) => {
          return <Note note={n}></Note>;
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "start",
  },
  noteContainer: {
    color: "white",
  },
});
