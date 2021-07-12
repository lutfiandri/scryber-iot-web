import { HiUserGroup } from 'react-icons/hi';
import { Link } from '@chakra-ui/layout';
import NavItem from './NavItem';

export default function Forum() {
  return (
    <Link
      href="https://www.google.com"
      passHref={true}
      target="_blank"
      _hover={{ textDecoration: 'none' }}
    >
      <NavItem text="Forum" icon={HiUserGroup} />
    </Link>
  );
}
