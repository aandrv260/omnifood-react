import { useCallback } from 'react';
import scrollToSection from '../../assets/ts/scrollToSection';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
}

const ScrollLink: React.FC<LinkProps> = props => {
  const { to, ...restOfProps } = props;

  const linkClickHandler = useCallback(() => {
    scrollToSection(props.to, 'smooth');
  }, [props.to]);

  return (
    <a {...restOfProps} onClick={linkClickHandler}>
      {props.children}
    </a>
  );
};

export default ScrollLink;
