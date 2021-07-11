import { Box, Heading, Center } from '@chakra-ui/layout';
import Image from 'next/image';
import Card from '../../ui/Card';

export default function Brand() {
  return (
    <Card>
      <Center px="2rem">
        <Box w="2rem" h="2rem" pos="relative">
          <Image
            src="/scryberiot.png"
            alt="scryberiot logo"
            height="102"
            width="97"
            layout="responsive"
            objectFit="contain"
          />
        </Box>
        <Heading size="1rem" ml="0.5rem" color="brand.dark">
          SCRYBER IOT
        </Heading>
      </Center>
    </Card>
  );
}
