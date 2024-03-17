import { View, Text } from "react-native";

const Note = ({ note }) => {

  return (
    <View style={style.view}>
      <Text style={style.text}>{note}</Text>
    </View>
  ) 
}

const style = {
  view: {
    height: 75,
    width: 75,
    // borderRadius: 75,
    backgroundColor: "rgba(255,255,255,.3)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,.5)",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "#eee"
  }
}
export default Note;