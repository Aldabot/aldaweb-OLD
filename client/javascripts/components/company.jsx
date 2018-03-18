import React from 'react';

export default class Company extends React.Component {
  render() {
    return (
        <div>
            <section uk-height-viewport="true" className="uk-section uk-padding-remove-top uk-margin-remove-top">
                <h1 className="uk-heading-primary uk-text-center uk-light background-primary padding-bottom">
                    Empresa
                </h1>

                <div className="uk-container uk-container-expand">
                    <h3>Nuestra historia</h3>
                    <p>
                        Nacida a principios de 2017 en un evento con el patrocinio de Banco Santander Innoventures primero y con el de Imagine Bank despues,
                        Alda actualmente ayuda a más de 5,000 usuarios a tener una mejor relación con su dinero, todos los días.
                    </p>
                    <p>
                        En Alda, siempre damos la bienvenida a solicitudes de empleo de personas excepcionales que desean expandir las fronteras de la inteligencia artificial y de las finanzas.
                    </p>
                </div>
            </section>
        </div>
    );
  }
}
