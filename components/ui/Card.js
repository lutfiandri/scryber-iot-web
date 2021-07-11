import { Box, Center } from '@chakra-ui/react';

export default function Card(props) {
  return (
    <Box borderRadius="lg" shadow="lg" bg="white" p="1rem" {...props}>
      <Center flexDirection="column">
        {props.title && (
          <Box
            textAlign="center"
            fontSize="0.8rem"
            fontWeight="semibold"
            mb="1rem"
          >
            {props.title}
          </Box>
        )}
        <Box>{props.children}</Box>
      </Center>
    </Box>
  );
}
