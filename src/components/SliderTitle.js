import ContactButton from './ContactButton';

const SliderTitle = (props) => {
  const { title, subTitle } = props;
  return (
    <div className="slider-title">
      <h2>{title}</h2>
      <h5 className="slider-subtitle">{subTitle}</h5>
      <ContactButton />
    </div>
  );
};
export default SliderTitle;
