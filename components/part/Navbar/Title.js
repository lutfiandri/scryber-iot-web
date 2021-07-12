import { Flex } from '@chakra-ui/layout';

export default function Title({ text }) {
  return (
    <Flex fontSize="1.2rem" fontWeight="semibold">
      {text}
    </Flex>
  );
}
