import { Container, Flex } from '@chakra-ui/layout';
import Head from 'next/head';
import Navbar from '../components/part/Navbar';
import Body from '../components/part/Body';
import Sidebar from '../components/part/Sidebar';

export default function Home() {
  return (
    <>
      <Head>
        <title>SCRYBER IOT</title>
      </Head>

      <Flex direction="row">
        <Sidebar />
        <Container maxW="6xl" m="1rem" centerContent>
          <Navbar />
          <Body />
        </Container>
      </Flex>
    </>
  );
}
