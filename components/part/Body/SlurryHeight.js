import { Bar } from 'react-chartjs-2';
import { createRef } from 'react';
import Card from '../../ui/Card';
import { options, getChartData } from '../../../utils/chart';
// import useContainerSize from '../../../hooks/useContainerSize';

export default function SlurryHeight({ labels, data }) {
  const containerRef = createRef(null);
  // const containerSize = useContainerSize(containerRef);
  return (
    <Card title="KETINGGIAN SLURRY" w="full" ref={containerRef}>
      <Bar
        data={() => getChartData(labels, data)}
        options={options}
        // width={containerSize.width - 60}
        width={200}
        height={200}
      />
    </Card>
  );
}
