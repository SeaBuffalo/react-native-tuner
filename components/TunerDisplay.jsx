import { Text, View } from "react-native";
import Needle from "./Needle";

const TunerDisplay = ({ note }) => {
  return (
    <View style={style.ctr}>
      {note && (
        <View style={{ alignSelf: "stretch" }}>
          <Text style={style.note}>{note && note.noteLetter}</Text>
          <Needle note={note} />
        </View>
      )}
    </View>
  );
};

const style = {
  note: {
    color: "#eee",
    fontSize: 24,
    textAlign: "center",
    height: 30,
  },
  ctr: {
    backgroundColor: "rgba(255,255,255,.1)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,.5)",
    borderRight: 0,
    height: 150,
    marginTop: 25,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
    alignSelf: "stretch",
  },
};

export default TunerDisplay;
