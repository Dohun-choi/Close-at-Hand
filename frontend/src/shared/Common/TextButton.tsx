import { Pressable, StyleSheet, Text } from "react-native";
import COLORS from "../../app/constant/COLORS";

interface Props {
	text: string;
	onPress: () => void;
}

const TextButton: React.FC<Props> = ({ text, onPress }) => {
	return (
		<Pressable
			style={({ pressed }) => [styles.container, pressed && styles.pressed]}
			onPress={onPress}
			testID="button"
		>
			<Text style={styles.text}>{text}</Text>
		</Pressable>
	);
};

export default TextButton;

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
	},
	pressed: {
		opacity: 0.75,
	},
	text: {
		color: COLORS.PupleBlue,
		backgroundColor: COLORS.White,
	},
});
