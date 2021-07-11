import { Flex, Spacer } from '@chakra-ui/layout';
import Brand from './Brand';
import Id from './Id';
import Logout from './Logout';

export default function Navbar() {
  return (
    <Flex w="full" mb="1rem" align="center" justify="center">
      <Brand />
      <Spacer />
      <Id />
      <Logout />
    </Flex>
  );
}
