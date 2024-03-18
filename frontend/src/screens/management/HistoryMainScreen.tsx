import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { ClothesHistoryList } from "../../components/";
import { FONTSIZE } from "../../shared";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const HistoryMainScreen = () => {
	const navigation = useNavigation<Navigation>();

	function handleRecentPress() {
		navigation.navigate("recentCoordy");
	}

	return (
		<>
			<View style={styles.titleContainer}>
				<Text style={styles.text}>최근 코디</Text>
				<Pressable onPress={handleRecentPress}>
					<Ionicons name="albums-sharp" size={FONTSIZE.Medium} color="black" />
				</Pressable>
			</View>
			<ClothesHistoryList />
		</>
	);
};

export default HistoryMainScreen;

const styles = StyleSheet.create({
	titleContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginHorizontal: 15,
	},
	text: {
		fontSize: FONTSIZE.ExtarLarge,
		fontWeight: "bold",
	},
});
