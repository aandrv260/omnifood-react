import { IonIcon, IonIcons } from 'react-ion-icon';

type IconProps = {
  name: IonIcons;
  className?: string;
};

const Icon: React.FC<IconProps> = ({ name, className }) => {
  return (
    <div className={className}>
      <IonIcon name={name} />
    </div>
  );
};

export default Icon;
