import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
	HistoryMainScreen,
	LandryMainScreen,
	ManagementMainScreen,
	RecentCoordyDetailScreen,
	RecentCoordyListScreen,
	LaundryBasketScreen,
} from "../../screens";

export type ManagementParamList = {
	managementMain: undefined;
	laundryMain: { fromNoti: boolean };
	history: undefined;
	recentCoordyList: undefined;
	recentCoordyDetail: { ootdId: number };
	laundryBasket: { basket: "일반 세탁" | "울 / 캐시미어" | "기능성 소재" };
};
const Stack = createNativeStackNavigator<ManagementParamList>();

const ManagementNav = () => {
	return (
		<Stack.Navigator
			screenOptions={{ headerTitleStyle: { fontWeight: "bold" } }}
			initialRouteName="managementMain"
		>
			<Stack.Screen
				name="managementMain"
				component={ManagementMainScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="laundryMain"
				component={LandryMainScreen}
				options={{ title: "빨래 바구니" }}
			/>
			<Stack.Screen
				name="history"
				component={HistoryMainScreen}
				options={{ title: "옷 관리" }}
			/>
			<Stack.Screen
				name="recentCoordyList"
				component={RecentCoordyListScreen}
				options={{ title: "최근 코디" }}
			/>
			<Stack.Screen
				name="recentCoordyDetail"
				component={RecentCoordyDetailScreen}
				options={{ title: "최근 코디 상세" }}
			/>
			<Stack.Screen
				name="laundryBasket"
				component={LaundryBasketScreen}
				options={{ title: "세탁하기" }}
			/>
		</Stack.Navigator>
	);
};

export default ManagementNav;
