import { Line } from 'react-chartjs-2';
import Card from '../../ui/Card';
import { options, getChartData } from '../../../utils/chart';

export default function GasProduced({ labels, data }) {
  return (
    <Card title="RATA-RATA PRODUKSI GAS" w="full">
      <Line
        data={() => getChartData(labels, data)}
        options={options}
        width={680}
        height={200}
      />
    </Card>
  );
}
