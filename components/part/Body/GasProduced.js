import { Line } from 'react-chartjs-2';
import { createRef } from 'react';
import Card from '../../ui/Card';
import { options, getChartData } from '../../../utils/chart';
import useContainerSize from '../../../hooks/useContainerSize';

export default function GasProduced({ labels, data }) {
  const containerRef = createRef(null);
  const containerSize = useContainerSize(containerRef);

  return (
    <Card title="RATA-RATA PRODUKSI GAS" w="full" ref={containerRef}>
      <Line
        data={() => getChartData(labels, data)}
        options={options}
        width={680}
        height={200}
      />
    </Card>
  );
}
