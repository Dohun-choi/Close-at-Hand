import { API } from "../../shared";
import { ClothesFetchListResponse } from "../types";

interface FetchListInterface {
	signal: AbortSignal;
}

export async function fetchList({ signal }: FetchListInterface) {
	return API.get("ootd", { signal })
		.then((response) => {
			console.log(response.data.data);
			return response.data.data as ClothesFetchListResponse[];
		})
		.catch((error) => {
			if (error.response) {
				throw new Error(error.response.data?.message ?? "네트워크 에러");
			}
			throw new Error("인터넷 연결을 확인해주세요.");
		});
}
