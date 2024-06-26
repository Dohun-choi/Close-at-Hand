import { render, fireEvent } from "@testing-library/react-native";
import LandryMainScreen from "./LandryMainScreen";
import "@realm/react";
import { useMutation } from "@tanstack/react-query";

jest.mock("@realm/react");
jest.mock("@tanstack/react-query");

const mockMutation = useMutation as jest.Mock;
describe("LandryMainScreen", () => {
	// navigation 모의 객체 생성
	const navigationMock = {
		navigate: jest.fn(),
	};
	const route = { params: { fromNoti: false } };

	it("navigation.navigate가 올바른 인자와 함께 호출", () => {
		mockMutation.mockReturnValue({
			mutate: jest.fn(),
		});
    
		const { getByText } = render(
			<LandryMainScreen
				navigation={navigationMock as never}
				route={route as never}
			/>,
		);

		// 일반 세탁 버튼 찾기
		const normalWashButton = getByText("일반 세탁");

		// 일반 세탁 버튼 클릭 이벤트 발생
		fireEvent.press(normalWashButton);

		// navigate 함수가 호출되었는지 확인
		expect(navigationMock.navigate).toHaveBeenCalledWith("2", {
			screen: "laundryBasket",
			params: {
				basket: "일반 세탁",
			},
		});
	});
});
