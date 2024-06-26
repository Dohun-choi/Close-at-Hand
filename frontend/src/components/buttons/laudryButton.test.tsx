import { fireEvent, render } from "@testing-library/react-native";
import LandryButton from "./LaundryButton"; // Assuming LandryButton is in the same directory

describe("LandryButton component", () => {
	it("렌더링 테스트", () => {
		const title = "My Button";
		const { getByText, getByTestId } = render(
			<LandryButton title={title} onPress={jest.fn()} bubble1={true} />,
		);

		// title이 올바르게 렌더링
		expect(getByText(title)).toBeDefined();

		// Check for image existence (more robust than checking source directly)
		expect(getByTestId("image")).toBeDefined();
	});

	it("onPress 함수가 moveTo를 인자로 받아 실행", () => {
		const title = "Hi";
		const mockFn = jest.fn();

		const { getByText } = render(
			<LandryButton title={title} onPress={mockFn} bubble1={true} />,
		);

		const button = getByText(title);

		// 버튼 누름
		fireEvent.press(button);

		// moveTo를 인자로 받아 호출
		expect(mockFn).toHaveBeenCalledWith("Hi");
	});
});
