import React from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  url?: string;
  children?: React.ReactNode;
  isFull?: boolean;
  btnStyle?: 'full' | 'outline';
};

const Button: React.FC<ButtonProps> = props => {
  const { url, children, isFull, btnStyle } = props;
  const btnStyleClassName = `${styles[`btn--${btnStyle}`]}`;
  const btnClassName = `${styles.btn} ${btnStyleClassName}`;

  return <a className={btnClassName}>{children}</a>;
};

export default Button;
