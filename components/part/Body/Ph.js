import { Doughnut } from 'react-chartjs-2';
import Card from '../../ui/Card';
import { options, dummyData } from '../../../utils/chart';

export default function Ph() {
  return (
    <Card title="RATA-RATA PH" w="full">
      <Doughnut data={dummyData} options={options} width={240} height={200} />
    </Card>
  );
}
