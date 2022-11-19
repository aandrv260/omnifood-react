type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ className, children }) => {
  return <div className={`container ${className ? className : ''}`}>{children}</div>;
};

export default Container;
