import React from 'react';
import { IonIcon } from 'react-ion-icon';
import { IonIcons } from 'react-ion-icon';

type SocialMediaIcon = {
  name: IonIcons;
  className?: string;
};

const SocialIcon: React.FC<SocialMediaIcon> = ({ name, className }) => {
  return (
    <div className={className}>
      <IonIcon name={name} />
    </div>
  );
};

export default SocialIcon;
