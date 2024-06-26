import { FlatList, Text } from "react-native";
import { useQuery } from "@tanstack/react-query";

import { fetchRecentCoordyListList } from "./API";
import CoordiCard from "../coordyCard/CoordyCard";
import LoadingOrError from "../fetchHelper/LoadingOrError";

const RecentCoordyList = () => {
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ["recentCoordyList"],
		queryFn: fetchRecentCoordyListList,
	});

	return (
		<>
			{(isLoading || isError) && (
				<LoadingOrError isLoading={isLoading} isError={isError} error={error} />
			)}
			{!isLoading && !isError && data?.length === 0 && (
				<Text>저장된 옷 기록이 없습니다.</Text>
			)}
			{data && (
				<FlatList
					data={data}
					renderItem={({ item }) => (
						<CoordiCard {...item} widthMathToScreen={true} />
					)}
					keyExtractor={(item) => item.ootdImgUrl.toString()}
					numColumns={3}
				/>
			)}
		</>
	);
};

export default RecentCoordyList;
