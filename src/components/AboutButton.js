import { Link } from 'react-router-dom';

const AboutButton = () => {
  return (
    <Link to="about-us">
      <button className="contact-button">Learn more</button>
    </Link>
  );
};
export default AboutButton;
