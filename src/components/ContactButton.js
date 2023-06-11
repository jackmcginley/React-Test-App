import { Link } from 'react-router-dom';

const ContactButton = () => {
  return (
    <Link to="contact-us">
      <button className="contact-button">Contact us</button>
    </Link>
  );
};
export default ContactButton;
