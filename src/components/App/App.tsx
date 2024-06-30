import { useState, useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageModal from '../ImageModal/ImageModal';
import { getImages } from '../../images-api';
import { Image } from "./App.types";

export default function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [query, setQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [modalUrl, setModalUrl] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const fetchImages = async () => {
      if (!query) return;

      try {
        setLoading(true);
        const response = await getImages(query, currentPage);
        if (currentPage === 1) {
          setImages(response);
        } else {
          setImages((prevImages) => [...prevImages, ...response]);
        }
      } catch (error) {
        setError(true);
        toast.error('Failed to fetch images');
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [query, currentPage]);

  const onSubmit = (searchQuery: string) => {
    setCurrentPage(1);
    setImages([]);
    setQuery(searchQuery);
  };

  const onLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const openModal = (imageUrl: string) => {
    setModalUrl(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalUrl(null);
  };

  return (
    <div>
      <SearchBar onSubmit={onSubmit} />
      {!error ? (
        <>
          <ImageGallery images={images} openModal={openModal}/>
          {loading && <Loader />}
          
          {images.length > 0 && currentPage < images.length && (
            <LoadMoreBtn loadMoreImages={onLoadMore} />
          )}
          <ImageModal isOpen={isModalOpen} imageUrl={modalUrl} onClose={closeModal} />
        </>
      ) : (
        <ErrorMessage message ="Failed to fetch images"/>
      )}
      <Toaster position="top-right" />
    </div>
    
  );
}