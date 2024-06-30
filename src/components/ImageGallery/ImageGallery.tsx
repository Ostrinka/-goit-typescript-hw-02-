import ImageCard from '../ImageCard/ImageCard';
import {ImageGalleryProps} from "./ImageGallery.type"
import css from "./ImageGallery.module.css";

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, openModal }) => {
  return (
    <ul className={css.menu}>
      {images.map((image) => (
        <li className={css.list} key={image.id}>
          <ImageCard image={image} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;
