import { Box, ScrollView } from "@gluestack-ui/themed";
import { ScreenWrapper } from "../components/layouts";
import { CustomButton, Divider, SearchInput } from "../components/shared";
import { useDispatch } from "react-redux";
import { guestLogout } from "../redux/actions/auth";
import VideoSlider from "../components/video/VideoSlider";
import { VideoTopic } from "../enums";
import { useSafePadding } from "../hooks";

const HomeScreen = () => {
  const { paddingTop } = useSafePadding({
    desiredPaddingTop: 40,
  });
  const dispatch = useDispatch();

  return (
    <ScreenWrapper>
      <Box pt={paddingTop + 10} flex={1}>
        <SearchInput settings />
        <ScrollView pt="$6">
          <VideoSlider title="React" apiData={VideoTopic.React} />
          <Divider />
          <VideoSlider title="React Native" apiData={VideoTopic.ReactNative} />
          <Divider />
          <VideoSlider title="JavaScript" apiData={VideoTopic.JavaScript} />
          <Divider />
          <VideoSlider title="TypeScript" apiData={VideoTopic.TypeScript} />
        </ScrollView>
        <CustomButton
          title={"Log out as guest"}
          onPress={() => dispatch(guestLogout())}
          variant="primary"
        />
      </Box>
    </ScreenWrapper>
  );
};

export default HomeScreen;
