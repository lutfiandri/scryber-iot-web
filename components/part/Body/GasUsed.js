import { Line } from 'react-chartjs-2';
import Card from '../../ui/Card';
import { options, dummyData } from '../../../utils/chart';

export default function GasUsed() {
  return (
    <Card title="RATA-RATA PENGGUNAAN GAS" w="full">
      <Line data={dummyData} options={options} width={180} height={200} />
    </Card>
  );
}
