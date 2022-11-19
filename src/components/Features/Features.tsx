import FeaturesData from '../../models/features';
import Container from '../Container/Container';
import Feature from '../Feature/Feature';
import styles from './Features.module.scss';

type FeaturesProps = {
  data: FeaturesData[];
};

const Features: React.FC<FeaturesProps> = ({ data }) => {
  return (
    <Container gridCols={4}>
      {data.map(feature => (
        <Feature
          heading={feature.heading}
          description={feature.description}
          iconName={feature.iconName}
          key={Math.random()}
        />
      ))}
    </Container>
  );
};

export default Features;
