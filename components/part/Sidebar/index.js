import { Divider, Flex, Spacer } from '@chakra-ui/layout';
import { HiHome } from 'react-icons/hi';
import NavItem from './NavItem';
import Brand from './Brand';
import Logout from './Logout';

export default function Sidebar() {
  return (
    <Flex
      direction="column"
      pos="sticky"
      left="0"
      h="100vh"
      w="280px"
      bg="blue.800"
      p="0.5rem"
      color="whiteAlpha.800"
    >
      <Brand />
      <Divider />
      <NavItem text="Beranda" icon={HiHome} isActive />
      <Spacer />
      <Logout />
    </Flex>
  );
}
