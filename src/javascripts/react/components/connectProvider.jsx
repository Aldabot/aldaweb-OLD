import React from 'react';
import { Link } from 'react-router-dom'
const uuidv4 = require('uuid/v4');

export default class ConnectProvider extends React.Component {
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
        <Link to="/connect_provider" key={bank.id} className="uk-width-1-2 uk-width-1-3@s uk-padding uk-animation-toggle">
          <div className="uk-animation-slide-top-small">
            <img src={bank.img} />
          </div>
      </Link>
    );
    return (
      <section uk-height-viewport="true" className="uk-section uk-padding-remove-top uk-margin-remove-top">
        <h1 className="uk-heading-primary uk-text-center uk-light background-primary padding-bottom">Conectar</h1>

        <div className="uk-text-center uk-padding">
          <div uk-icon="icon: lock; ratio: 3"></div>
          <p className="uk-text-lead">Cleo securely connects to your account in read-only mode, using bank-level 256-bit encryption.</p>
        </div>

        <form onSubmit={this.handleSubmit} className="uk-text-center">
          <fieldset className="uk-fieldset">
            <legend class="uk-legend">Legend</legend>

            <div class="uk-margin">
              <input className="uk-input uk-form-large uk-form-width-large" type="text" placeholder="Customer Identifier" value={this.state.value} onChange={this.handleChange} />
            </div>
            <div className="uk-margin">
              <div className="uk-margin uk-inline">
                <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
                <input className="uk-input uk-form-large uk-form-width-large" type="password" placeholder="Password" value={this.state.value} onChange={this.handleChange} />
              </div>
            </div>

            <input className="uk-input uk-form-large uk-form-width-large"  type="submit" value="Submit" />
          </fieldset>
        </form>
      </section>
    );
  }
}
