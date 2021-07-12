import { Flex } from '@chakra-ui/layout';
import Title from './Title';

export default function Navbar() {
  return (
    <Flex w="full" mb="1rem" align="center" justify="start">
      <Title text="Beranda" />
    </Flex>
  );
}
