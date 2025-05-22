import { Text } from "@gluestack-ui/themed";
import { ScreenWrapper } from "../components/layouts";
import { CustomButton } from "../components/shared";
import { useDispatch } from "react-redux";
import { guestLogout } from "../redux/actions/auth";

const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <ScreenWrapper>
      <Text>HOME SCREEN</Text>
      <CustomButton
        title={"Log out as guest"}
        onPress={() => dispatch(guestLogout())}
        variant="primary"
      />
    </ScreenWrapper>
  );
};

export default HomeScreen;
