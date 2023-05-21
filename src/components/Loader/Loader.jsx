import css from './Loader.module.css';
import { Grid } from 'react-loader-spinner';

const Loader = function () {
  return (
    <div className={css['loader-thumb']}>
      <Grid
        height="100"
        width="100"
        color="#3f51b5"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
