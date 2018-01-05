import React from 'react';
const uuidv4 = require('uuid/v4');

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uuid: uuidv4(),
      banks: [{
          id: "2301",
          name: "Banco Sabadell",
          img: "images/bsabadell.jpg",
        },
        {
          id: "2300",
          name: "Catalunya Caixa",
          img: "images/bsabadell.jpg"
        },
        {
          id: "2292",
          name: "Caixabank",
          img: "images/bsabadell.jpg"
        }
      ]
    }
  }

  render() {
    const banks = this.state.banks.map((bank, index) =>
      <div key={bank.id} className="uk-width-1-2 uk-width-1-3@s uk-padding-small">
        <img src={bank.img} />
      </div>
    );
    return (
      <section uk-height-viewport="true" className="uk-section uk-padding-remove-top uk-margin-remove-top">
        <h1 className="uk-heading-primary uk-text-center uk-light background-primary padding-bottom">Añadir Banco</h1>

        <div className="uk-grid-small uk-text-center uk-padding" uk-grid="true">
          {banks}
        </div>
      </section>
    );
  }
}
