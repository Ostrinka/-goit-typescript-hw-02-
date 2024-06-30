import {LoadMoreProps} from "./LoadMoreBtn.type"

import css from './LoadMoreBtn.module.css';

const LoadMore: React.FC<LoadMoreProps> = ({ loadMoreImages }) => {
  return (
    <div className={css.wrapper}>
      <button className={css.btn} onClick={loadMoreImages}>Load More</button>
    </div>
  );
};

export default LoadMore;
