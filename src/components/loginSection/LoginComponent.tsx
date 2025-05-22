import { Box, Text } from "@gluestack-ui/themed";
import { CustomButton } from "../shared";
import { letterSpacingPercent } from "../../utils";
import LoginNotice from "./LoginNotice";
import { useDispatch } from "react-redux";
import { guestLogin } from "../../redux/actions/auth";

const LoginComponent = () => {
  const dispatch = useDispatch();
  return (
    <Box>
      <Text
        fontSize="$2xl"
        fontWeight="$semibold"
        color="$white"
        letterSpacing={letterSpacingPercent(24, 1)}
        pb="$8"
      >
        Welcome to the best YouTube-based learning application.
      </Text>
      <CustomButton
        title={"Log in as guest"}
        onPress={() => dispatch(guestLogin())}
        variant="primary"
      />
      <LoginNotice />
    </Box>
  );
};

export default LoginComponent;
