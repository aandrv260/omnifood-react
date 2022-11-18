type SectionHeadingProps = {
  subheading?: string;
  heading: string;
  textAlign?: 'left' | 'center';
};

const SectionHeading: React.FC<SectionHeadingProps> = ({ subheading, heading, textAlign }) => {
  return (
    <div className={`container${textAlign === 'center' ? ` ${textAlign}-text` : ''}`}>
      {subheading && <span className="subheading">{subheading}</span>}
      <h2 className="heading-secondary">{heading}</h2>
    </div>
  );
};

export default SectionHeading;
