/* eslint-disable react/display-name */
import { Box, Center } from '@chakra-ui/react';
import { forwardRef } from 'react';

const Card = forwardRef((props, ref) => {
  return (
    <Box
      borderRadius="lg"
      shadow="lg"
      bg="white"
      p="1rem"
      minH="300px"
      {...props}
      ref={ref}
    >
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
});

export default Card;
