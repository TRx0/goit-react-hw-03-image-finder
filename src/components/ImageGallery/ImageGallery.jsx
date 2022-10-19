import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.css';

export const ImageGallery = ({ objectHits, handleModal }) => {
  return (
    <ul className={css.ImageGallery}>
      <ImageGalleryItem objectHits={objectHits} handleModal={handleModal} />
    </ul>
  );
};