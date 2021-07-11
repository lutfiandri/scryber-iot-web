import { Box, Center } from '@chakra-ui/react';

export default function Card(props) {
  return (
    <Box borderRadius="lg" shadow="lg" bg="white" p="1rem" {...props}>
      <Center>{props.children}</Center>
    </Box>
  );
}
