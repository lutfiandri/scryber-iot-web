import { Bar } from 'react-chartjs-2';
import Card from '../../ui/Card';
import { options, dummyData } from '../../../utils/chart';

export default function Viscosity() {
  return (
    <Card title="RATA-RATA KEKENTALAN" w="full">
      <Bar data={dummyData} options={options} width={240} height={200} />
    </Card>
  );
}
