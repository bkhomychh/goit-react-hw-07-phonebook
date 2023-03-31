import { Rings } from 'react-loader-spinner';
import { Backdrop } from './ContentLoader.styled';

const ContentLoader = () => {
  return (
    <Backdrop>
      <Rings
        height="80"
        width="80"
        radius="6"
        visible={true}
        ariaLabel="rings-loading"
      />
    </Backdrop>
  );
};

export default ContentLoader;
