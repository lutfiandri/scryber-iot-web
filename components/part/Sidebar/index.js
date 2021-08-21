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
      pos="fixed"
      left="0"
      bottom="0"
      h={{ base: '60px', md: '100vh' }}
      w={{ base: '100vw', md: '200px', lg: '280px' }}
      bg="blue.800"
      p="0.5rem"
      color="whiteAlpha.800"
      zIndex={9999}
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
