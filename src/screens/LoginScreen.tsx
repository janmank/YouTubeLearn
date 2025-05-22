import { View, Image } from "@gluestack-ui/themed";
import AppIcon from "./../assets/icons/app-icon.png";
import AppLogo from "./../assets/icons/logo-3x.png";
import { useSafePadding } from "../hooks";
import { ScreenWrapper } from "../components/layouts";
import { LoginComponent } from "../components/loginSection";

const LoginScreen = () => {
  const { paddingTop, paddingBottom } = useSafePadding({
    desiredPaddingTop: 80,
    desiredPaddingBottom: 48,
  });

  return (
    <ScreenWrapper backgroundColor="#8D99AE">
      <View
        flex={1}
        justifyContent="space-between"
        alignItems="center"
        bg="$secondary"
        px="$8"
        pb={paddingBottom}
        pt={paddingTop}
      >
        <Image source={AppLogo} alt="App Logo" width={292} height={116} />
        <Image source={AppIcon} alt="App Logo" width={128} height={128} />
        <LoginComponent />
      </View>
    </ScreenWrapper>
  );
};

export default LoginScreen;
