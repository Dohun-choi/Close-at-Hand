import "@testing-library/jest-native/";
import { render, fireEvent } from "@testing-library/react-native";
import "@react-navigation/native";

import Menu from "./Menu";
import ManagementMenuList from "./ManagementMenuList";
import img from "../../../assets/image/diary.png";

jest.mock("@react-navigation/native");

describe("Management-ManagementList", () => {
	it("빨래바구니와 옷 관리 진입 버튼이 렌더링됩니다.", () => {
		const { getByText } = render(<ManagementMenuList />);

		expect(getByText("빨래 바구니")).toBeDefined();
		expect(getByText("옷 관리")).toBeDefined();
	});

	it("버튼을 누르면 onPress 함수가 실행됩니다.", () => {
		const MockFn = jest.fn();
		const { getByText } = render(
			<Menu image={img} title="제목" onPress={MockFn} backgroundColor="Blue" />,
		);

		const menu = getByText("제목");
		fireEvent.press(menu);

		expect(MockFn).toHaveBeenCalled();
	});
});
