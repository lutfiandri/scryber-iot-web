import { Doughnut } from 'react-chartjs-2';
import Card from '../../ui/Card';
import { options, getChartData } from '../../../utils/chart';

export default function Humidity({ labels, data }) {
  return (
    <Card title="RATA-RATA KELEMBABAN" w="full">
      <Doughnut
        data={() => getChartData(labels, data)}
        options={options}
        width={180}
        height={200}
      />
    </Card>
  );
}
