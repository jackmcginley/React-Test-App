import img from '../assets/about-office.jpg';
import AboutButton from './AboutButton';
import BulletList from './BulletList';
const HomeSection1 = () => {
  return (
    <section className="grid">
      <div>
        <p style={{ fontSize: '1.5rem' }}>
          Vel quia voluptas aut possimus voluptas.
        </p>
        <p className="para">
          Ut facilis ducimus et architecto voluptatem id autem quasi ut dolorum
          veniam. Rem ducimus fugiat sit internos numquam rem blanditiis dicta
          eum odio quis et laudantium cumque ea neque omnis quo quaerat
          delectus.
        </p>
        <BulletList />
        <AboutButton />
      </div>
      <div>
        <img src={img} alt="Office" className="grid-image" />
      </div>
    </section>
  );
};
export default HomeSection1;
