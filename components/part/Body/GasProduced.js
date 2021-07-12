import { Line } from 'react-chartjs-2';
import Card from '../../ui/Card';
import { options, dummyData } from '../../../utils/chart';

export default function GasProduced() {
  return (
    <Card title="RATA-RATA PRODUKSI GAS" w="full">
      <Line data={dummyData} options={options} width={680} height={200} />
    </Card>
  );
}
