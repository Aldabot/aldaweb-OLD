import React from 'react'
import { Link } from 'react-router-dom'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <img src="images/diamond.svg" className="home-diamond-shape uk-animation-slide-left"/>
        <section uk-height-viewport="offset-top: true" className="uk-section uk-section-xsmall">
          <img src="images/diamond.svg" className="home-diamond2-shape uk-animation-slide-right-medium"/>
          <div className="uk-container uk-container-small">
            <div className="uk-grid-collapse" uk-grid-parallax="true">
              <div className="z-index2 uk-width-1-2@m uk-animation-slide-top-small uk-position-relative">
                <video muted autoPlay playsInline loop className="preview-video"><source src="static/intro_web.mp4"/></video>
                <img src="images/phone.png" />
              </div>
              <div className="uk-flex uk-width-1-2@m uk-flex-middle z-index2">
                <div className="uk-animation-slide-bottom-small uk-margin-left">
                  <h1 className="uk-heading-primary">Alda</h1>
                  <p className="uk-text-left">
                    Controla qué pasa con tus cuentas, cómo te valoran los bancos y recibe alertas por comisiones, descubiertos….
                    <br /><br />
                    Regístrate gratis en menos de 2 minutos.
                  </p>
                  <div>
                    <Link to="/registrate"><button className="uk-button uk-button-default">Sign Up</button></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slider mobile */}
        <section className="uk-section uk-section-xsmall uk-visible@m">
          <div className="uk-container uk-container-small">
            <div uk-slideshow="true">
               <div className="uk-padding uk-position-relative">
                <ul className="uk-slideshow-items">
                    <li>
                      <div className="uk-padding-small uk-height-1-1">
                          <img className="uk-width-1-5 uk-align-center" src="images/security.png" />
                          <h2 className="uk-text-center uk-heading-primary padding-bottom">Máxima seguridad</h2>
                          <p className="uk-text-lead uk-text-center">
                            La seguridad de Alda es la misma que la de tu banco y está validada por los mayores especialistas
                            en seguridad digital. Además, la información está protegida con nivel de seguridad bancaria de 256
                            bits, que es el mismo nivel de protección que tienen los bancos más avanzados.
                          </p>
                      </div>
                    </li>
                    <li>
                      <div className="uk-padding-small uk-height-1-1">
                          <img className="uk-width-1-2 uk-align-center" src="images/saltedge-logo.png" />
                          <h2 className="uk-text-center uk-heading-primary padding-bottom">
                            Solo claves de consulta
                          </h2>
                          <p className="uk-text-lead uk-text-center">
                            Para registrarte Alda solo te pide tu correo electrónico y tus claves de consulta (no las que
                            utilizas para transacciones). Con las claves de lectura no se pueden realizar compras,
                            transferencias ni demás operaciones bancarias.
                          </p>
                      </div>
                    </li>
                    <li>
                      <div className="uk-padding-small uk-height-1-1">
                          <img className="uk-width-1-5 uk-align-center" src="images/users.png" />
                          <h2 className="uk-text-center uk-heading-primary">Estamos aquí para ayudar</h2>
                          <p className="uk-text-lead uk-text-center">
                            Detrás de Alda existe un equipo que siempre está a tu disposición para ayudarte con cualquier duda
                            o consulta que puedas tener. Tenemos un sistema de soporte al cliente que te permite contactarnos
                            en cualquier momento a <a href="mailto:grosinol@aldabot.es">grosinol@aldabot.es</a> o llamando
                            al 665 933 852.
                          </p>
                      </div>
                    </li>
                </ul>

                <a className="uk-slidenav-large uk-position-center-left" href="#" uk-slidenav-previous="true" uk-slideshow-item="previous"></a>
                <a className="uk-slidenav-large uk-position-center-right" href="#" uk-slidenav-next="true" uk-slideshow-item="next"></a>
              </div>

              <ul className="uk-dotnav uk-flex-center uk-margin">
                <li uk-slideshow-item="0"><a href="#">Item 1</a></li>
                <li uk-slideshow-item="1"><a href="#">Item 2</a></li>
                <li uk-slideshow-item="2"><a href="#">Item 3</a></li>
             </ul>
            </div>
          </div>
        </section>

        {/* Slider mobile */}
        <section className="uk-section uk-hidden@m">
          <div className="uk-container uk-padding-remove">
            <div uk-slideshow="ratio: 4:5">
               <div className="uk-padding-small">
                <ul className="uk-slideshow-items  uk-border-rounded">
                    <li>
                      <div className="uk-card uk-card-default uk-card-body uk-height-1-1">
                        <img className="uk-width-1-3 uk-align-center uk-margin-top" src="images/security.png" />
                        <h3 className="uk-card-title">Máxima seguridad</h3>
                        <p>
                          La seguridad de Alda es la misma que la de tu banco y está validada por los mayores especialistas
                          en seguridad digital. Además, la información está protegida con nivel de seguridad bancaria de 256
                          bits, que es el mismo nivel de protección que tienen los bancos más avanzados.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="uk-card uk-card-default uk-card-body uk-padding-remove-top uk-height-1-1">
                        <img className="uk-align-center uk-margin-top" src="images/saltedge-logo.png" />
                        <h3 className="uk-card-title">Solo claves de consulta</h3>
                        <p>
                          Para registrarte Alda solo te pide tu correo electrónico y tus claves de consulta (no las que
                          utilizas para transacciones). Con las claves de lectura no se pueden realizar compras,
                          transferencias ni demás operaciones bancarias.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="uk-card uk-card-default uk-card-body uk-height-1-1">
                        <img className="uk-width-1-3 uk-align-center uk-margin-top" src="images/users.png" />
                        <h3 className="uk-card-title">Estamos aquí para ayudar</h3>
                        <p>
                          Detrás de Alda existe un equipo que siempre está a tu disposición para ayudarte con cualquier duda
                          o consulta que puedas tener. Tenemos un sistema de soporte al cliente que te permite contactarnos en
                          cualquier momento a <a href="mailto:grosinol@aldabot.es">grosinol@aldabot.es</a> o llamando al
                          665 933 852.
                        </p>
                      </div>
                    </li>
                </ul>
              </div>

              <ul className="uk-dotnav uk-flex-center uk-margin">
                <li uk-slideshow-item="0"><a href="#">Item 1</a></li>
                <li uk-slideshow-item="1"><a href="#">Item 2</a></li>
                <li uk-slideshow-item="2"><a href="#">Item 3</a></li>
             </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
