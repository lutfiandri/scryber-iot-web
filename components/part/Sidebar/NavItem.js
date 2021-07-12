import { Box, Flex } from '@chakra-ui/layout';
import { Icon } from '@chakra-ui/react';

export default function NavItem({ icon, text, isActive, onClick }) {
  return (
    <Flex
      onClick={onClick}
      as="button"
      w="full"
      rounded="md"
      py="0.5rem"
      px="1rem"
      my="0.5rem"
      transition="all"
      transitionDuration="150ms"
      bg={isActive ? 'blue.700' : ''}
      // justify="center"
      align="center"
      _hover={{ bg: 'blue.700' }}
    >
      <Icon as={icon} h="1.2rem" w="1.2rem" />
      <Box ml="0.5rem">{text}</Box>
    </Flex>
  );
}
