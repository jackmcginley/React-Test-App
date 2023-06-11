import img from '../assets/about-office.jpg';
import BulletList from '../components/BulletList';
const About = () => {
  return (
    <section className="section">
      <p className="about-header">About us</p>
      <p className="para">
        <b>
          Labore enim et possimus reiciendis sint excepturi similique optio,
          voluptatem explicabo facilis?
        </b>
      </p>
      <p className="para">
        Error veritatis in illum explicabo hic ad alias officia, veniam facere
        voluptatem nulla necessitatibus minus recusandae sed libero modi saepe
        soluta dignissimos maiores dolorem cum nostrum ex! Perferendis sapiente
        eligendi impedit odit quam error itaque in, architecto distinctio
        nostrum ad, nobis aliquid, explicabo molestias exercitationem non
        excepturi dolore quidem dicta rerum officia?
      </p>
      <p className="para">
        Quisque id arcu nec ex placerat iaculis. Duis aliquet, est vehicula
        consequat suscipit, orci velit commodo ante, eget suscipit magna elit
        vel ante. Pellentesque eget quam rhoncus,
        <a href="#">faucibus diam et porttitor quam.</a>
        Nulla ultrices lorem ut mauris pellentesque posuere. Ut sodales mattis
        gravida. Maecenas eget tincidunt nisl, auctor finibus libero.
      </p>
      <img src={img} alt="Office" className="about-img" />
      <p className="para">
        Donec nec magna condimentum, luctus odio sed, interdum erat. Maecenas
        condimentum faucibus congue. Praesent velit velit, vehicula sed faucibus
        at, rhoncus et nibh. Vivamus hendrerit, ex a tincidunt auctor, metus
        tortor pharetra felis, quis tempor lorem lectus sit amet augue. Nullam
        elit dolor, molestie non auctor ac, pharetra a ante. Phasellus iaculis
        egestas scelerisque. Morbi eget ante nisl. Mauris blandit tellus ac
        turpis tristique maximus in in ante. Etiam et ipsum quis dui mattis
        ornare.
      </p>
      <h4>Taria duo ut vis semper abhorreant:</h4>
      <BulletList />
      <p className="para">
        Ad pariatur sequi qui natus rerum ea tenetur velit ut tenetur rerum est
        omnis dolores. Et nobis accusamus quo laborum esse et consequatur
        asperiores eum architecto earum. At voluptates Quis et dignissimos
        eligendi ab voluptas reprehenderit vel possimus deserunt et nostrum
        impedit.
      </p>
      <p className="para">
        Et sapiente delectus est galisum quidem qui sint dolores et quas sint.
        Qui beatae enim 33 dolores esse vel iusto reprehenderit aut odit
        voluptatem ab autem internos At earum similique ut facere voluptates.
      </p>
    </section>
  );
};
export default About;
