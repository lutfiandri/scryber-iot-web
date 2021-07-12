import { Divider, Flex, Spacer } from '@chakra-ui/layout';
import { HiHome } from 'react-icons/hi';
import NavItem from './NavItem';
import Brand from './Brand';
import Logout from './Logout';
import Forum from './Forum';

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
      <Divider mb="0.5rem" />
      <NavItem text="Beranda" icon={HiHome} isActive />
      <Forum />
      <Spacer />
      <Logout />
    </Flex>
  );
}
