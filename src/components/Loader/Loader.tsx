import { Bars } from 'react-loader-spinner';
import css from './Loader.module.css'


const Loader: React.FC = () => {
  return (
    <div className={css.loader}>
      <Bars
        height="80"
        width="80"
        color="#00BFFF" 
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;