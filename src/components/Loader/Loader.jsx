import { MagnifyingGlass } from 'react-loader-spinner';
import css from './Loader.css';

export const Loader = () => {
  return (
    <div className={css.load}>
      <MagnifyingGlass />
    </div>
  );
};