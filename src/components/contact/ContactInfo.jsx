import SocialShare2 from "../others/SocialShare2";
import Animate from "../animation/Animate";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-style-one-info">
        <div className="mb-40">
          <h2>Informações de Contacto</h2>
          <p>
            Planeie uma forma de obter um local frio esta semana. <br /> Quase
            não há limites para os corações. Resolva as partes.
          </p>
        </div>
        <ul className="contact-address">
          <Animate className="animate__animated animate__fadeInUp">
            <li>
              <div className="content">
                <h4 className="title">Telefone</h4>
                <a href="tel:+258 84 039 6163">+258 84 039 6163</a>
              </div>
            </li>
          </Animate>

          <Animate
            className="animate__animated animate__fadeInUp"
            delay="300ms"
          >
            <li>
              <div className="info">
              <h4 className="title">Localização</h4>
                <p>Av. Industrias, n° 3787, Liberdade</p>
              </div>
            </li>
          </Animate>

          <Animate
            className="animate__animated animate__fadeInUp"
            delay="500ms"
          >
            <li>
              <div className="info">
                <h4 className="title">Email Oficial</h4>
                <a href="mailto:contact@mymobisolutions.com">contact@mymobisolutions.com</a>
              </div>
            </li>
          </Animate>

          <Animate
            className="animate__animated animate__fadeInUp"
            delay="700ms"
          >
            <li>
              <div className="info">
                <h4 className="title">Siga-nos</h4>
                <ul className="social-link">
                  <SocialShare2 />
                </ul>
              </div>
            </li>
          </Animate>
        </ul>
      </div>
    </>
  );
};

export default ContactInfo;
