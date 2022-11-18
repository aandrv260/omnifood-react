import React from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  url?: string;
  children?: React.ReactNode;
  btnStyle?: 'full' | 'outline';
  id?: string;
};

const Button: React.FC<ButtonProps> = props => {
  const { url, children, btnStyle, id } = props;
  const btnStyleClassName = `${styles[`btn--${btnStyle}`]}`;
  const btnClassName = `${styles.btn} ${btnStyleClassName}`;

  return (
    <a className={btnClassName} href={url} id={id}>
      {children}
    </a>
  );
};

export default Button;
