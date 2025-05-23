import React, { useState } from "react";
import {
  VStack,
  Text,
  Input,
  Box,
  HStack,
  ScrollView,
  InputField,
} from "@gluestack-ui/themed";
import { letterSpacingPercent } from "../utils";
import { CustomButton } from "./shared";

interface Note {
  text: string;
  time: string;
}

interface INotesProps {
  currentTime: number;
}

const Notes = ({ currentTime }: INotesProps) => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [noteText, setNoteText] = useState("");

  const handleAddNote = () => {
    if (!noteText.trim()) return;

    const minutes = Math.floor(currentTime / 60);
    const seconds = Math.floor(currentTime % 60);
    const formatted = `${minutes}:${seconds.toString().padStart(2, "0")}`;

    const newNote = { text: noteText.trim(), time: formatted };
    setNotes((prev) => [newNote, ...prev]);
    setNoteText("");
  };

  return (
    <VStack space="md" pt="$4">
      <ScrollView height={200}>
        {notes.map((note, idx) => (
          <Box
            key={idx}
            borderWidth={1}
            borderColor="#C8C8C8"
            borderRadius="$xl"
            p="$3"
            mb="$4"
          >
            <VStack>
              <Text
                color="$primary"
                fontSize="$xs"
                letterSpacing={letterSpacingPercent(12, 1)}
              >
                {note.text}
              </Text>

              <HStack justifyContent="flex-end">
                <Text fontSize="$2xs" color="$primary" fontWeight="$semibold">
                  {note.time}
                </Text>
              </HStack>
            </VStack>
          </Box>
        ))}
      </ScrollView>

      <Input p="$4" minHeight={75} borderColor="#C8C8C8" borderRadius="$lg">
        <InputField
          multiline
          value={noteText}
          onChangeText={setNoteText}
          placeholder="Enter notes..."
          style={{
            padding: 12,
            height: "100%",
            textAlignVertical: "top",
          }}
        />
      </Input>
      <CustomButton
        title={"Add Note"}
        onPress={handleAddNote}
        variant="primary"
      />
    </VStack>
  );
};

export default Notes;
