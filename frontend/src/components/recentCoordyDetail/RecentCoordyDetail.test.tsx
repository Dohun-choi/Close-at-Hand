import React from "react";
import { render, waitFor } from "@testing-library/react-native";
import { useQuery } from "@tanstack/react-query";
import RecentCoordyDetail from "./RecentCoordyDetail";

// Mock Tanstack Query 모듈
jest.mock("@tanstack/react-query");

describe("RecentCoordyDetail 컴포넌트", () => {
	it("데이터를 성공적으로 불러온 경우 적절한 UI를 렌더링합니다.", async () => {
		const mockData = {
			contains: [
				{ clothesId: 1, clothesImgUrl: "https://example.com/clothes1.jpg" },
				{ clothesId: 2, clothesImgUrl: "https://example.com/clothes2.jpg" },
			],
			outfitUrl: "https://example.com/outfit.jpg",
			weather: "맑음",
			date: "2024-03-19T12:00:00Z",
		};

		// useQuery 함수를 Mocking하여 성공적으로 데이터를 반환하도록 설정
		(useQuery as jest.Mock).mockReturnValue({
			data: mockData,
			isLoading: false,
			isError: false,
			error: null,
		});

		const { getByText, getByTestId } = render(
			<RecentCoordyDetail outfitId={1} />,
		);

		// 데이터가 성공적으로 로드되고 해당 데이터가 화면에 렌더링되었는지 확인
		await waitFor(() => expect(getByTestId("detail-image")).toBeDefined());
		expect(getByText(/맑음/)).toBeDefined();
		expect(getByText("2024년 3월 19일"));
	});
});
