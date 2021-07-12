import { Bar } from 'react-chartjs-2';
import Card from '../../ui/Card';
import { options, dummyData } from '../../../utils/chart';

export default function SlurryHeight() {
  return (
    <Card title="KETINGGIAN SLURRY" w="full">
      <Bar data={dummyData} options={options} width={180} height={200} />
    </Card>
  );
}
