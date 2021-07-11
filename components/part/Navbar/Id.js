import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Button,
} from '@chakra-ui/react';

export default function Id() {
  return (
    <Popover placement="bottom-end">
      <PopoverTrigger>
        <Button colorScheme="blackAlpha" variant="ghost" ml="0.5rem">
          ID
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverBody>9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d</PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
