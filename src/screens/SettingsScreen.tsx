import React, { useState } from "react";
import {
  Box,
  VStack,
  Text,
  Switch,
  HStack,
  Image,
  Pressable,
} from "@gluestack-ui/themed";
import { ScreenWrapper } from "../components/layouts";
import PersonIcon from "./../assets/icons/person-icon.png";
import NotificationIcon from "./../assets/icons/notification-icon.png";
import ClockIcon from "./../assets/icons/clock-icon.png";
import { BackButton, CustomButton, Divider } from "../components/shared";
import * as Notifications from "expo-notifications";
import LeftArrow from "./../assets/icons/leftarrow-icon.png";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { guestLogout } from "../redux/actions/auth";

const SettingsScreen = () => {
  const [remindersEnabled, setRemindersEnabled] = useState<boolean>(false);
  const [hour, setHour] = useState<string>("12");
  const [minute, setMinute] = useState<string>("00");
  const navigation = useNavigation();
  const dispatch = useDispatch();

  // const validateTime = () => {
  //   const h = parseInt(hour, 10);
  //   const m = parseInt(minute, 10);
  //   return !isNaN(h) && !isNaN(m) && h >= 0 && h < 24 && m >= 0 && m < 60;
  // };

  //   const saveSettings = async () => {
  //     if (!validateTime()) {
  //       alert("Please enter a valid time (00–23 and 00–59).");
  //       return;
  //     }

  //     await Notifications.cancelAllScheduledNotificationsAsync();

  //     if (remindersEnabled) {
  //       const trigger = new Date();
  //       trigger.setHours(parseInt(hour, 10));
  //       trigger.setMinutes(parseInt(minute, 10));
  //       trigger.setSeconds(0);

  //       if (trigger <= new Date()) {
  //         trigger.setDate(trigger.getDate() + 1);
  //       }

  //       await Notifications.scheduleNotificationAsync({
  //         content: {
  //           title: "Learning Reminder 📚",
  //           body: "Don't forget to study today!",
  //         },
  //         trigger: {
  //           hour: trigger.getHours(),
  //           minute: trigger.getMinutes(),
  //           repeats: true,
  //         },
  //       });

  //       alert("Reminder set successfully!");
  //     } else {
  //       alert("Reminders disabled.");
  //     }
  //   };

  return (
    <ScreenWrapper>
      <HStack px="$6" alignItems="center">
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={LeftArrow} alt="App Logo" width={32} height={32} />
        </Pressable>
        <Text pl="$6" fontSize="$lg" fontWeight="$bold" color="$primary">
          Settings
        </Text>
      </HStack>
      <HStack px="$6" alignItems="center" justifyContent="center" py="$10">
        <Image source={PersonIcon} alt="Person icon" width={48} height={48} />
        <Text pl="$3" fontWeight="$bold" color="$primary">
          John Doe
        </Text>
      </HStack>
      <Divider />
      <Box flex={1} px="$6">
        <VStack space="lg" pb="$6">
          <HStack alignItems="center">
            <Image
              source={NotificationIcon}
              alt="Notification icon"
              width={36}
              height={36}
            />
            <Text pl="$3">Learning reminders</Text>
          </HStack>

          <HStack justifyContent="space-between" alignItems="center">
            <Text fontSize="$sm">Repeat everyday at:</Text>
            <HStack alignItems="center">
              <Image
                source={ClockIcon}
                alt="Clock icon"
                width={24}
                height={24}
              />
              <Text pl="$3" fontSize="$sm">
                {hour} : {minute}
              </Text>
            </HStack>
            <Switch
              value={remindersEnabled}
              onValueChange={setRemindersEnabled}
            />
          </HStack>
          <Text fontWeight="$semibold" fontSize="$2xs" color="$primary">
            You will receive friendly reminder to remember to study
          </Text>

          {/* {remindersEnabled && (
            <VStack space="sm">
              <Text fontSize="$md">Reminder Time (24h format)</Text>
              <HStack space="md" alignItems="center">
                <Input
                  w={80}
                  keyboardType="numeric"
                  borderWidth={1}
                  borderColor="$primary"
                >
                  <InputField
                    value={hour}
                    maxLength={2}
                    onChangeText={setHour}
                    placeholder="HH"
                  />
                </Input>
                <Text fontSize="$xl" fontWeight="$semibold">
                  :
                </Text>
                <Input
                  w={80}
                  keyboardType="numeric"
                  borderWidth={1}
                  borderColor="$primary"
                >
                  <InputField
                    value={minute}
                    maxLength={2}
                    onChangeText={setMinute}
                    placeholder="MM"
                  />
                </Input>
              </HStack>
            </VStack>
          )} */}

          {/* <Button mt="$4" onPress={() => {}}>
            <Text color="$white" fontWeight="$bold">
              Save Settings
            </Text>
          </Button> */}
        </VStack>
        <CustomButton
          title={"Log out as guest"}
          onPress={() => dispatch(guestLogout())}
          variant="primary"
        />
      </Box>
    </ScreenWrapper>
  );
};

export default SettingsScreen;
