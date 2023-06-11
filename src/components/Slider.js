import SliderTitle from './SliderTitle';

const Slider = (props) => {
  const { title, subTitle, url } = props;

  return (
    <div className="slider-gradient">
      <div
        className="slider-image"
        style={{
          background: `url(${url} )`,
          backgroundSize: 'cover',
          backgroundPosition: '20% 20%',
        }}
      ></div>
      <SliderTitle title={title} subTitle={subTitle} />
    </div>
  );
};
export default Slider;
