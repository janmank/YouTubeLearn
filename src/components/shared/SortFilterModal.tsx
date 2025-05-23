import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Text,
  Button,
  VStack,
  Pressable,
  HStack,
  Box,
} from "@gluestack-ui/themed";

interface SortFilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (option: string) => void;
  selectedOption: string;
}

const sortOptions = [
  { label: "Upload date: latest", value: "date" },
  { label: "Most popular", value: "relevance" },
];

const SortFilterModal = ({
  isOpen,
  onClose,
  onSelect,
  selectedOption,
}: SortFilterModalProps) => {
  const [tempSelection, setTempSelection] = useState(selectedOption);

  useEffect(() => {
    setTempSelection(selectedOption);
  }, [isOpen, selectedOption]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalBackdrop bg="rgba(0, 0, 0, 1)" />
      <ModalContent
        width={320}
        height={400}
        borderRadius={24}
        padding="$4"
        justifyContent="space-between"
        bg="$secondary"
      >
        <ModalHeader>
          <Text fontWeight="$semibold" fontSize="$lg" color="$white" pb="$4">
            Sort records by:
          </Text>
        </ModalHeader>

        <ModalBody>
          <VStack space="xl" pt="$2">
            {sortOptions.map((option) => {
              const isSelected = tempSelection === option.value;
              return (
                <Pressable
                  key={option.value}
                  onPress={() => setTempSelection(option.value)}
                >
                  <HStack alignItems="center" space="md">
                    <Box
                      width={24}
                      height={24}
                      borderRadius={999}
                      borderWidth={2}
                      borderColor="$white"
                      alignItems="center"
                      justifyContent="center"
                      bg="transparent"
                    >
                      {isSelected && (
                        <Box
                          width={14}
                          height={14}
                          borderRadius={999}
                          bg="$primary"
                        />
                      )}
                    </Box>
                    <Text fontSize="$sm" color="$white">
                      {option.label}
                    </Text>
                  </HStack>
                </Pressable>
              );
            })}
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button
            w="100%"
            borderRadius="$lg"
            bg="$primary"
            onPress={() => {
              onSelect(tempSelection);
              onClose();
            }}
          >
            <Text color="$white" fontWeight="$bold">
              Confirm
            </Text>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SortFilterModal;
