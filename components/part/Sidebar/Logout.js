import {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
} from '@chakra-ui/react';
import { HiLogout } from 'react-icons/hi';
import NavItem from './NavItem';

export default function Logout() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <NavItem text="Keluar" icon={HiLogout} onClick={onOpen} />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>Keluar dari akun ini?</ModalHeader>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose} w="full">
              Keluar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
