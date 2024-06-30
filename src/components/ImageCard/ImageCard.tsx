import React from 'react';
import {ImageCardProps} from "./ImageCard.type"
import css from "./ImageCard.module.css";

const ImageCard: React.FC<ImageCardProps> = ({ image, openModal }) => {
  const { urls, alt_description } = image;

  return (
    <div className={css.wrapper}>
      <img onClick={() => openModal(urls.regular)} src={urls.small} alt={alt_description} />
    </div>
  );
};

export default ImageCard;
