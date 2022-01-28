import { LoadingWrapper } from './Loading.styles';
import { GiSpinningSword } from 'react-icons/gi';
import { Title } from '../Typography/Title';

export function Loading() {
  return (
    <LoadingWrapper>
      <GiSpinningSword className="spinner" color="#f2f2f2" size={100} />
      <Title level={2} style={{ color: '#f2f2f2' }}>
        Loading...
      </Title>
    </LoadingWrapper>
  );
}
