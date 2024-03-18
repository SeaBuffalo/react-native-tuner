import { View } from "react-native";

const Needle = ({ note }) => {
  
  return (
    <View style={style.needleContainer}>
      <View style={style.needle}></View>
    </View>
  );
};

const style = {
  needleContainer: {
    alignSelf: "stretch",
    alignItems: "center",
    borderRadius: 5,
    height: 118,
  },
  needle: {
    width: 10,
    height: "100%",
    borderRadius: 5,
    backgroundColor: "rgba(255,255,255,.4)",
  },
};

export default Needle;
