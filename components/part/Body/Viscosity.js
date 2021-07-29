import { Bar } from 'react-chartjs-2';
import Card from '../../ui/Card';
import { options, getChartData } from '../../../utils/chart';

export default function Viscosity({ labels, data }) {
  return (
    <Card title="RATA-RATA KEKENTALAN" w="full">
      <Bar
        data={() => getChartData(labels, data)}
        options={options}
        width={180}
        height={200}
      />
    </Card>
  );
}
