import { Doughnut } from 'react-chartjs-2';
import Card from '../../ui/Card';
import { options, dummyData } from '../../../utils/chart';

export default function Humidity() {
  return (
    <Card title="RATA-RATA KELEMBABAN" w="full">
      <Doughnut data={dummyData} options={options} width={240} height={200} />
    </Card>
  );
}
