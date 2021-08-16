import { Doughnut } from 'react-chartjs-2';
import { createRef } from 'react';
import { Box, Center } from '@chakra-ui/layout';
import Card from '../../ui/Card';
import { options, getChartData } from '../../../utils/chart';
import useContainerSize from '../../../hooks/useContainerSize';

export default function Humidity({ labels, data }) {
  const containerRef = createRef(null);
  const containerSize = useContainerSize(containerRef);
  return (
    <Card title="RATA-RATA KELEMBABAN" w="full" ref={containerRef}>
      <Box pos="relative">
        <Doughnut
          data={() =>
            getChartData(labels, data, [
              'rgb(255, 99, 132)',
              'rgb(255, 220, 240)',
            ])
          }
          options={{ ...options, events: [] }}
          width={containerSize.width - 60}
          height={200}
        />
        <Center
          pos="absolute"
          left="0"
          top="0"
          w="full"
          h="full"
          fontSize="1.5em"
          fontWeight="medium"
        >
          {data[0]?.toFixed(2) || 0}
        </Center>
      </Box>
    </Card>
  );
}
