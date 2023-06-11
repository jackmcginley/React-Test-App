import img from '../assets/Img_Contact.png';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-grid">
        <div>
          <p style={{ fontSize: '1.5rem' }}>Contact us</p>
          <p className="para">
            Nulla ultrices lorem ut mauris pellentesque posuere. Ut sodales
            mattis gravida. Maecenas eget tincidunt nisl, auctor finibus libero.
          </p>
          <ContactForm />
        </div>
        <div>
          <img src={img} alt="logo" className="large-logo" />
        </div>
      </div>
    </section>
  );
};
export default Contact;
