import { LoadingContainer, LoadingWrapper } from './Loading.styles';
import { GiSpinningSword } from 'react-icons/gi';
import { Title } from '../Typography/Title';

export function Loading() {
  return (
    <LoadingWrapper>
      <LoadingContainer>
        <GiSpinningSword className="spinner" color="#90BAAD" size={100} />
        <Title level={2} style={{ color: '#90BAAD' }}>
          Loading...
        </Title>
      </LoadingContainer>
    </LoadingWrapper>
  );
}
