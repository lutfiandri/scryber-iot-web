/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable camelcase */
import { Grid, GridItem } from '@chakra-ui/layout';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import GasProduced from './GasProduced';
import Viscosity from './Viscosity';
import Ph from './Ph';
import SlurryHeight from './SlurryHeight';
import GasUsed from './GasUsed';
import Humidity from './Humidity';
import { db } from '../../../utils/firebase';
import { week, getSundayThisWeek } from '../../../utils/time';
import { parseFirebaseResponseToLabelsAndData } from '../../../utils/dataHelper';

export default function Body() {
  const [data, setData] = useState({
    e_current: [],
    gas_produced: [],
    gas_used: [],
    humidity: [],
    ph: [],
    slurry_height: [],
    temperature: [],
    viscosity: [],
  });

  const [labels, setLabels] = useState([]);

  useEffect(() => {
    const originData = [];
    const dots = 6;
    const dateLimit = new Date(getSundayThisWeek() - dots * week);

    db.collection('sensors')
      .where('created_at', '>=', dateLimit)
      .orderBy('created_at')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          originData.push(doc.data());
        });

        const { data: d, labels: l } = parseFirebaseResponseToLabelsAndData(
          originData,
          dots
        );

        setData(d);
        setLabels(l);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log('Error getting documents: ', error);
        Swal.fire({
          icon: 'error',
          title: 'Gagal mendapatkan data',
          text: 'Perhatikan koneksi internet Anda dan refresh halaman ini',
          footer: '<a href="">Hubungi kami &rarr;</a>',
        });
      });
  }, []);

  return (
    // <Grid
    //   templateColumns={{ base: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr 1fr' }}
    //   gap="1rem"
    //   w="100%"
    // >
    //   <GridItem
    //     rowStart={{ base: 1, md: 1, lg: 1 }}
    //     rowEnd={{ base: 2, md: 2, lg: 2 }}
    //     colStart={{ base: 1, md: 1, lg: 1 }}
    //     colEnd={{ base: 2, md: 3, lg: 4 }}
    //   >
    //     <GasProduced labels={labels} data={data.gas_produced} />
    //   </GridItem>
    //   <GridItem
    //     rowStart={{ base: 3, md: 3, lg: 1 }}
    //     rowEnd={{ base: 4, md: 4, lg: 2 }}
    //     colStart={{ base: 1, md: 1, lg: 4 }}
    //     colEnd={{ base: 2, md: 2, lg: 5 }}
    //   >
    //     <Viscosity labels={labels} data={data.viscosity} />
    //   </GridItem>
    //   <GridItem
    //     rowStart={{ base: 5, md: 4, lg: 2 }}
    //     rowEnd={{ base: 6, md: 5, lg: 3 }}
    //     colStart={{ base: 1, md: 1, lg: 1 }}
    //     colEnd={{ base: 2, md: 2, lg: 2 }}
    //   >
    //     <Ph labels={labels} data={data.ph} />
    //   </GridItem>
    //   <GridItem
    //     rowStart={{ base: 2, md: 2, lg: 2 }}
    //     rowEnd={{ base: 3, md: 3, lg: 3 }}
    //     colStart={{ base: 1, md: 1, lg: 2 }}
    //     colEnd={{ base: 2, md: 3, lg: 3 }}
    //   >
    //     <GasUsed labels={labels} data={data.gas_used} />
    //   </GridItem>
    //   <GridItem
    //     rowStart={{ base: 4, md: 3, lg: 2 }}
    //     rowEnd={{ base: 5, md: 4, lg: 3 }}
    //     colStart={{ base: 1, md: 2, lg: 3 }}
    //     colEnd={{ base: 2, md: 3, lg: 4 }}
    //   >
    //     <SlurryHeight labels={labels} data={data.slurry_height} />
    //   </GridItem>
    //   <GridItem
    //     rowStart={{ base: 6, md: 4, lg: 2 }}
    //     rowEnd={{ base: 7, md: 5, lg: 3 }}
    //     colStart={{ base: 1, md: 2, lg: 4 }}
    //     colEnd={{ base: 2, md: 3, lg: 5 }}
    //   >
    //     <Humidity labels={labels} data={data.humidity} />
    //   </GridItem>
    // </Grid>

    <Grid templateColumns="repeat(4 1fr)" gap="1rem" w="100%">
      <GridItem rowStart={1} rowEnd={2} colStart={1} colEnd={4}>
        <GasProduced labels={labels} data={data.gas_produced} />
      </GridItem>
      <GridItem rowStart={1} rowEnd={2} colStart={4} colEnd={5}>
        <Viscosity labels={labels} data={data.viscosity} />
      </GridItem>
      <GridItem rowStart={2} rowEnd={3} colStart={1} colEnd={2}>
        <Ph labels={labels} data={data.ph} />
      </GridItem>
      <GridItem rowStart={2} rowEnd={3} colStart={2} colEnd={3}>
        <GasUsed labels={labels} data={data.gas_used} />
      </GridItem>
      <GridItem rowStart={2} rowEnd={3} colStart={3} colEnd={4}>
        <SlurryHeight labels={labels} data={data.slurry_height} />
      </GridItem>
      <GridItem rowStart={2} rowEnd={3} colStart={4} colEnd={5}>
        <Humidity labels={labels} data={data.humidity} />
      </GridItem>
    </Grid>
  );
}
