import { Pressable, StyleSheet, Text, View } from "react-native";
import TunerDisplay from "./components/TunerDisplay.jsx";
import { useState } from "react";
import Note from "./components/Note.jsx";
import { NoteObj } from "./common/NoteObj.js";

export default function App() {
  const [tuning, setTuning] = useState(["E", "A", "D", "G", "B", "E"]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [notes, setNotes] = useState([
    new NoteObj("E", 0),
    new NoteObj("A", 1),
    new NoteObj("D", 2),
    new NoteObj("G", 3),
    new NoteObj("B", 4),
    new NoteObj("E", 5),
  ]);

  const selectNote = (note) => {
    if (selectedNote) {
      if (selectedNote.stringPosition === note.stringPosition) {
        setSelectedNote(null);
      } else {
        setSelectedNote(note);
      }
    } else {
      setSelectedNote(note);
    }
  };

  return (
    <View style={styles.app}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Tuner</Text>
      </View>
      <TunerDisplay note={selectedNote} />
      <View style={styles.noteContainer}>
        <View style={styles.noteColumn}>
          <Pressable onPress={() => selectNote(notes[2])}>
            <Note note={notes[2]} selectedNote={selectedNote} />
          </Pressable>
          <Pressable onPress={() => selectNote(notes[1])}>
            <Note note={notes[1]} selectedNote={selectedNote} />
          </Pressable>
          <Pressable onPress={() => selectNote(notes[0])}>
            <Note note={notes[0]} selectedNote={selectedNote} />
          </Pressable>
        </View>
        <View style={styles.noteColumn}>
          <Pressable onPress={() => selectNote(notes[3])}>
            <Note note={notes[3]} selectedNote={selectedNote} />
          </Pressable>
          <Pressable onPress={() => selectNote(notes[4])}>
            <Note note={notes[4]} selectedNote={selectedNote} />
          </Pressable>
          <Pressable onPress={() => selectNote(notes[5])}>
            <Note note={notes[5]} selectedNote={selectedNote} />
          </Pressable>
        </View>
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
  },
  noteColumn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 75,
  },
  title: {
    color: "white",
    fontSize: 36,
    marginTop: 50,
  },
  titleContainer: {
    alignItems: "flex-start",
    alignSelf: "stretch",
    marginLeft: 15,
  },
});
