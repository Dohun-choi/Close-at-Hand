import { StyledButton } from "../../components";

const Blutooth = () => {
	function hanldeCancel() {}

	return (
		<StyledButton
			title="취소"
			onPress={hanldeCancel}
			backgroundColor="CarrotRed"
		/>
	);
};

export default Blutooth;
