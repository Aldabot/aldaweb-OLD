import React from 'react';
import { connect } from 'react-redux';
import { selectProvider } from '../actions/index';
import SelectProvider from '../components/selectProvider.jsx';

class AddProvider extends React.Component {
  render() {
    const { selectProvider } = this.props

    return (
      <section uk-height-viewport="true" className="uk-section uk-padding-remove-top uk-margin-remove-top">
        <h1 className="uk-heading-primary uk-text-center uk-light background-primary padding-bottom">Añadir Banco</h1>

        <div className="uk-container">
          <div className="uk-text-center uk-padding">
            <div uk-icon="icon: lock; ratio: 3"></div>
            <p className="uk-text-lead">Alda securely connects to your account in read-only mode, using bank-level 256-bit encryption.</p>
          </div>

          <SelectProvider selectProvider={selectProvider} />
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.isLoggedIn,
    selectedProvider: {}
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    selectProvider: (provider) => {
      dispatch(selectProvider(provider))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProvider)
