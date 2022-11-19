type ContainerProps = {
  className?: string;
  children: React.ReactNode;
  gridCols?: number;
};

const Container: React.FC<ContainerProps> = ({ className, children, gridCols }) => {
  const gridColsClassName = gridCols ? `grid grid--${gridCols}-cols` : '';

  return (
    <div className={`container ${gridColsClassName} ${className ? className : ''}`}>{children}</div>
  );
};

export default Container;
