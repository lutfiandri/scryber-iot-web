import { Box, Flex, Heading } from '@chakra-ui/layout';
// import Image from 'next/image';
import { Image } from '@chakra-ui/react';

export default function Brand() {
  return (
    <Flex direction="row" w="full" justify="center" align="center" p="1rem">
      <Box as="Flex" w="4rem" h="5rem" pos="relative">
        <Image
          boxSize="80px"
          objectFit="contain"
          src="/scryberiot.png"
          alt="scryberiot logo"
        />
      </Box>
      <Heading
        fontSize="1.2rem"
        fontWeight="semibold"
        ml="1rem"
        color="whiteAlpha.800"
      >
        SCRYBER IOT
      </Heading>
    </Flex>
  );
}
