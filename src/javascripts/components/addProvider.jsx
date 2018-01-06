import React from 'react';
const uuidv4 = require('uuid/v4');

import SelectProvider from './selectProvider'

export default class AddProvider extends React.Component {
  render() {
    return (
      <section uk-height-viewport="true" className="uk-section uk-padding-remove-top uk-margin-remove-top">
        <h1 className="uk-heading-primary uk-text-center uk-light background-primary padding-bottom">Añadir Banco</h1>

        <div className="uk-text-center uk-padding">
          <div uk-icon="icon: lock; ratio: 3"></div>
          <p className="uk-text-lead">Cleo securely connects to your account in read-only mode, using bank-level 256-bit encryption.</p>
        </div>

        <SelectProvider />
      </section>
    );
  }
}
