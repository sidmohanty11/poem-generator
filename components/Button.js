import { TouchableOpacity, Text } from "react-native";

const className =
  "bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4 flex justify-center items-center";

export default function CustomButton(props) {
  return (
    <TouchableOpacity
      style={props.style}
      className={className}
      onPress={props.onPress}
    >
      {props.children}
      <Text className="text-center text-white">{props.title}</Text>
    </TouchableOpacity>
  );
}
