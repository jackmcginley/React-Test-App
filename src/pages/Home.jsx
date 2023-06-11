import HomeSection1 from '../components/HomeSection1';
import HomeSection2 from '../components/HomeSection2';
import HomeSection3 from '../components/HomeSection3';
import Carousel from '../components/Carousel';

const Home = (props) => {
  const { slides } = props;
  return (
    <>
      <Carousel slides={slides} />
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
    </>
  );
};
export default Home;
