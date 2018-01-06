import React from 'react';
import { Link } from 'react-router-dom'
const uuidv4 = require('uuid/v4');

export default class ConnectProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { provider } = this.props

    return (
      <section uk-height-viewport="true" className="uk-section uk-padding-remove-top uk-margin-remove-top">
        <h1 className="uk-heading-primary uk-text-center uk-light background-primary padding-bottom">Conectar</h1>

        <div className="uk-text-center uk-padding">
          <div uk-icon="icon: lock; ratio: 3"></div>
          <p className="uk-text-lead">Cleo securely connects to your account in read-only mode, using bank-level 256-bit encryption.</p>
        </div>

        <form onSubmit={this.handleSubmit} className="uk-text-center">
          <fieldset className="uk-fieldset">
            <legend className="uk-legend">{provider.name}</legend>

            <div className="uk-margin">
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
