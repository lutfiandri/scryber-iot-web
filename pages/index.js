import { Container, Flex, Box } from '@chakra-ui/layout';
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
        <Box w={500} h={100}>
          arst
        </Box>
        <Container
          maxW="6xl"
          m="1rem"
          centerContent
          ml={{ base: '0px', md: '200px', lg: '280px' }}
          // pb={{ base: '60px', md: '0px' }}
        >
          <Navbar />
          <Body />
        </Container>
      </Flex>
    </>
  );
}
