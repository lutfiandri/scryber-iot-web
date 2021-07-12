import { Grid, GridItem } from '@chakra-ui/layout';
import GasProduced from './GasProduced';
import Viscosity from './Viscosity';
import Ph from './Ph';
import SlurryHeight from './SlurryHeight';
import GasUsed from './GasUsed';
import Humidity from './Humidity';

export default function Body() {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap="1rem" w="100%">
      <GridItem rowStart={1} rowEnd={2} colStart={1} colEnd={4}>
        <GasProduced />
      </GridItem>
      <GridItem rowStart={1} rowEnd={2} colStart={4} colEnd={5}>
        <Viscosity />
      </GridItem>
      <GridItem rowStart={2} rowEnd={3} colStart={1} colEnd={2}>
        <Ph />
      </GridItem>
      <GridItem rowStart={2} rowEnd={3} colStart={2} colEnd={3}>
        <GasUsed />
      </GridItem>
      <GridItem rowStart={2} rowEnd={3} colStart={3} colEnd={4}>
        <SlurryHeight />
      </GridItem>
      <GridItem rowStart={2} rowEnd={3} colStart={4} colEnd={5}>
        <Humidity />
      </GridItem>
    </Grid>
  );
}
