import React from 'react';

export default class Security extends React.Component {
  render() {
    return (
        <div>
            <section uk-height-viewport="true" className="uk-section uk-padding-remove-top uk-margin-remove-top">
                <h1 className="uk-heading-primary uk-text-center uk-light background-primary padding-bottom">
                    Seguridad
                </h1>

                <div className="uk-container uk-container-expand">
                    <h3>Cómo protege Alda tu información financiera</h3>
                    <p>
                        Alda utiliza el cifrado de datos para proteger el acceso a su información personal y financiera y protegerlo contra transacciones no autorizadas.
                        Si sospecha que ha habido actividad no autorizada en su cuenta, contáctenos inmediatamente a support@aldabot.es. Estamos aquí para ayudarlo.
                    </p>

                    <h3>Cifrado y almacenamiento</h3>
                    <p>
                        Su información financiera está encriptada, almacenada y protegida en servidores seguros.
                        En la web, [https] y una barra verde es su señal de que el cifrado está activo.
                    </p>

                    <h3>
                        Protección de cuenta
                    </h3>
                    <p>
                        Si has perdido su teléfono o sospechas que se está utilizando de forma no autorizada, puedes evitar que acceda a tu cuenta de Alda visitando la sección "Contraseñas y autorizaciones" en la configuración de su cuenta en línea. Una vez que se haya revocado el acceso desde un dispositivo, se cerrará la sesión de cualquier sesión de Alda activa que tenga.
                    </p>

                    <h3>
                        Mantente seguro
                    </h3>
                    <p>
                        Alda está diseñada para pagos entre amigos y personas que confían el uno en el otro. Evita pagos a personas que no conoces, especialmente si se trata de una venta de bienes y servicios (como entradas para eventos y artículos de Wallapop). Estos pagos son potencialmente de alto riesgo, y podría perder su dinero sin obtener lo que pagó. Alda no ofrece protección al comprador o vendedor. El uso comercial de Alda requiere una solicitud y autorización explícita. Para obtener más información, consulte la sección correspondiente de nuestro Acuerdo de usuario.
                    </p>

                    <h3>
                        Soporte de seguridad
                    </h3>
                    <p>
                        Estamos aquí para ayudar. Si tiene preguntas o inquietudes sobre la seguridad, contáctanos en <a href="mailto:info@aldabot.es">info@aldabot.es</a>.

                        El dedicado equipo de ingenieros de soporte de Alda se compromete a brindarle la mejor experiencia posible. Hacemos nuestro mejor esfuerzo para responder a cualquier servicio al cliente o problemas de soporte técnico de manera rápida, eficiente y con cuidado.
                    </p>

                    <h3>
                        Divulgación responsable
                    </h3>
                    <p>
                        Si usted es un investigador de seguridad y desea informar una vulnerabilidad que ha encontrado, consulte el Programa de Bug Bounty de PayPal.
                    </p>
                </div>
            </section>
        </div>
    );
  }
}
