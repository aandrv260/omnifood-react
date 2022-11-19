import Image from '../../models/image';
import GalleryImageBox from '../GalleryImageBox/GalleryImageBox';
import styles from './Gallery.module.scss';

type GalleryProps = {
  images: Image[];
};

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <div className={styles['gallery']}>
      {images.map(image => (
        <GalleryImageBox image={image} key={Math.random()} />
      ))}
    </div>
  );
};

export default Gallery;
