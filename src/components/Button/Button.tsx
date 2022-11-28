import React from 'react';
import './Button.scss';

type ButtonProps = {
  url?: string;
  children?: React.ReactNode;
  btnStyle?: 'full' | 'outline';
  id?: string;
};

const Button: React.FC<ButtonProps> = props => {
  const { url, children, btnStyle, id } = props;
  const btnClassName = `btn btn--${btnStyle}`;

  return (
    <a className={btnClassName} href={url} id={id}>
      {children}
    </a>
  );
};

export default Button;
