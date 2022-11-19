import Image from '../../models/image';
import styles from './GalleryImageBox.module.scss';

type GalleryImageBoxProps = {
  image: Image;
};

const GalleryImageBox: React.FC<GalleryImageBoxProps> = ({ image }) => {
  return (
    <div className={styles['gallery-img-box']}>
      <img src={image.src} alt={image.alt} className={styles['gallery-img']} />
    </div>
  );
};

export default GalleryImageBox;
