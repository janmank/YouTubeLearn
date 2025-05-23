import React, { useEffect, useState } from "react";
import { Box, ScrollView, Text } from "@gluestack-ui/themed";
import { ScreenWrapper } from "../components/layouts";
import { Divider, SearchInput } from "../components/shared";
import VideoSlider from "../components/video/VideoSlider";
import { VideoTopic } from "../enums";
import { useSafePadding } from "../hooks";

const HomeScreen = () => {
  const { paddingTop } = useSafePadding({ desiredPaddingTop: 40 });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <ScreenWrapper>
        <SearchInput settings />
        <Box
          flex={1}
          justifyContent="center"
          alignItems="center"
          paddingTop={paddingTop + 10}
        >
          <Text color="$primary" fontSize="$lg" fontWeight="$semibold">
            Loading videos...
          </Text>
        </Box>
      </ScreenWrapper>
    );
  }

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
      </Box>
    </ScreenWrapper>
  );
};

export default HomeScreen;
