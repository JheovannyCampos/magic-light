import Header from '../../components/header';
import Dashboard from './dashboard';
import { ContainerAll } from './styles';

const DashboardCard = () => {
  return (
    <>
      <ContainerAll>
        <Header />
        <Dashboard />
      </ContainerAll>
    </>
  );
};
export default DashboardCard;
