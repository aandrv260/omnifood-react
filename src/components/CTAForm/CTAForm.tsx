import styles from './CTAForm.module.scss';
type CTAFormProps = {
  imageUrl?: string;
  heading: string;
  description?: string;
};

const CTAForm: React.FC<CTAFormProps> = ({ imageUrl, heading, description }) => {
  const BackgroundImage = () => {
    return <div className={styles['img-box']} style={{ backgroundImage: imageUrl }}></div>;
  };

  const FormHeader = () => {
    return (
      <>
        <h2 className={`heading-secondary ${styles['heading-secondary']}`}>{heading}</h2>
        <p className={styles['form-desc']}>{description}</p>
      </>
    );
  };

  return (
    <div className={styles['cta']}>
      <div className={styles['form-box']}>
        <FormHeader />

        <form className={styles['cta-form']} action="#">
          <div>
            <label className={styles['input-label']} htmlFor="full-name">
              Full Name
            </label>

            <input
              className={styles['form-input']}
              id="full-name"
              type="name"
              placeholder="Sarah Smith"
              required
            />
          </div>

          <div>
            <label className={styles['input-label']} htmlFor="email">
              Email Address
            </label>

            <input
              className={styles['form-input']}
              id="email"
              type="email"
              placeholder="example@example.com"
              required
            />
          </div>
          <div>
            <div>
              <label className={styles['input-label']} htmlFor="audience-info">
                Where did you hear about us?
              </label>
              <select className={styles['form-dropdown']} id="audience-info">
                <option value="">Please select one option:</option>
                <option value="Facebook">Facebook</option>
                <option value="Instagram">Instagram</option>
                <option value="Google">Google</option>
                <option value="Bing">Bing</option>
                <option value="Yahoo">Yahoo</option>
              </select>
            </div>
          </div>

          <button className={styles['btn--form']}>Sign up now</button>
        </form>
      </div>

      <BackgroundImage />
    </div>
  );
};

export default CTAForm;
