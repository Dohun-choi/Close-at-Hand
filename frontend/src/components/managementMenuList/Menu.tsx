import { Image, Pressable, View, StyleSheet, Text } from "react-native";
import { SHADOW, COLORS, FONTSIZE, ROW } from "../../shared";

interface Props {
	image: ReturnType<typeof require>;
	title: string;
	backgroundColor: keyof typeof COLORS;
	onPress(): void;
}

export const Menu: React.FC<Props> = ({
	image,
	title,
	backgroundColor,
	onPress,
}) => {
	return (
		<Pressable onPress={onPress}>
			<View
				style={[
					SHADOW,
					ROW,
					styles.container,
					{ backgroundColor: COLORS[backgroundColor] },
				]}
			>
				<Image style={styles.image} source={image} />
				<View style={styles.textContainer}>
					<Text style={styles.text}>{title}</Text>
				</View>
			</View>
		</Pressable>
	);
};

export default Menu;

const styles = StyleSheet.create({
	container: {
		borderRadius: 10,
		marginVertical: 10,
		marginHorizontal: 5,
	},
	textContainer: {
		justifyContent: "center",
		alignItems: "center",
		flex: 1,
	},
	text: {
		fontSize: FONTSIZE.ExtarLarge,
		textAlign: "center",
	},
	image: {
		marginVertical: 15,
		width: 160,
		height: 160,
		resizeMode: "contain",
		flex: 1,
	},
});
