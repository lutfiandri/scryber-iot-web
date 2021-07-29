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
    <Grid templateColumns="repeat(4, 1fr)" gap="1rem" w="100%">
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
