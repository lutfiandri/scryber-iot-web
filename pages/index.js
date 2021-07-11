import { Container } from '@chakra-ui/layout';
import Head from 'next/head';
import Navbar from '../components/part/Navbar';
import Body from '../components/part/Body';

export default function Home() {
  return (
    <>
      <Head>
        <title>SCRYBER IOT</title>
      </Head>

      <Container maxW="6xl" my="1rem" centerContent>
        <Navbar />
        <Body />
      </Container>
    </>
  );
}
