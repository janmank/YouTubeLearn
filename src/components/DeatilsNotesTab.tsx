import { useState } from "react";
import { HStack, Pressable, Text, VStack } from "@gluestack-ui/themed";
import Notes from "./Notes";
import Details from "./Details";
import { IYouTubeVideoItem } from "../interfaces";

interface IDetailsNotesTabsProps {
  currentTime: number;
  video: IYouTubeVideoItem;
}

const DetailsNotesTabs = ({ currentTime, video }: IDetailsNotesTabsProps) => {
  const [active, setActive] = useState<"details" | "notes">("details");

  return (
    <VStack>
      <HStack mb="$4">
        {["details", "notes"].map((tab) => (
          <Pressable
            key={tab}
            onPress={() => setActive(tab as any)}
            flex={1}
            alignItems="center"
            borderBottomWidth={2}
            borderColor={active === tab ? "$primary" : "$secondary"}
          >
            <Text pb="$1" fontWeight="$bold" color="$primary">
              {tab === "details" ? "Details" : "Notes"}
            </Text>
          </Pressable>
        ))}
      </HStack>

      {active === "details" ? (
        <Details video={video} />
      ) : (
        <Notes currentTime={currentTime} />
      )}
    </VStack>
  );
};

export default DetailsNotesTabs;
