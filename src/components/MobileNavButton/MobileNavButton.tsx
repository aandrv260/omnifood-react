import Icon from '../Icon/Icon';

type MobileNavButtonProps = {
  isVisible?: boolean;
  onClick?: () => void;
};

const MobileNavButton: React.FC<MobileNavButtonProps> = ({ isVisible, onClick }) => {
  return (
    <button className={`btn-mob-nav ${''}`} title="Mobile navigation button" onClick={onClick}>
      {!isVisible && <Icon className="nav-icon open" name="menu-outline" />}
      {isVisible && <Icon className="nav-icon closer" name="close-outline" />}
    </button>
  );
};

export default MobileNavButton;
