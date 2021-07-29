import { Line } from 'react-chartjs-2';
import Card from '../../ui/Card';
import { options, getChartData } from '../../../utils/chart';

export default function GasUsed({ labels, data }) {
  return (
    <Card title="PENGGUNAAN GAS" w="full">
      <Line
        data={() => getChartData(labels, data)}
        options={options}
        width={180}
        height={200}
      />
    </Card>
  );
}
