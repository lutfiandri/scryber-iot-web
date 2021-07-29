import { Doughnut } from 'react-chartjs-2';
import Card from '../../ui/Card';
import { options, getChartData } from '../../../utils/chart';

export default function Ph({ labels, data }) {
  return (
    <Card title="RATA-RATA PH" w="full">
      <Doughnut
        data={() => getChartData(labels, data)}
        options={options}
        width={180}
        height={200}
      />
    </Card>
  );
}
