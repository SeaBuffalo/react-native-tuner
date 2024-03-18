import { Text, View } from "react-native";

const Note = ({ note, selectedNote }) => {
  return (
    <View
      style={{
        ...style.view,
        backgroundColor:
          selectedNote && selectedNote.stringPosition === note.stringPosition
            ? "rgba(255,255,255,.4)"
            : "rgba(255,255,255,.1)",
      }}
    >
      <Text style={style.text}>{note.noteLetter}</Text>
    </View>
  );
};

const style = {
  view: {
    height: 75,
    width: 75,
    borderRadius: 75,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,.5)",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#eee",
    fontSize: 24,
  },
};
export default Note;
