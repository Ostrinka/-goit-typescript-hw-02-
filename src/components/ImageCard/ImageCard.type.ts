import { Image } from '../App/App.types';

export interface ImageCardProps {
  image: Image;
  openModal: (imageUrl: string) => void; 
}