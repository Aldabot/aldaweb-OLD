import React from 'react';
import { Link } from 'react-router-dom';
const uuidv4 = require('uuid/v4');

export default class SelectProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            uuid: uuidv4(),
            banks: [
                /* {
                 *     id: "2300",
                 *     name: "Santander",
                 *     img: "images/santander.png",
                 *     color: "#fe0000"
                 * },
                 * {
                 *     id: "2292",
                 *     name: "BBVA",
                 *     img: "images/bbva.jpg",
                 *     color: "#1c5ba2"
                 * },*/
                {
                    id: "2293",
                    code: "la_caixa_es",
                    name: "CaixaBank",
                    img: "images/caixabank.png",
                    color: "white"
                },
                {
                    id: "2302",
                    code: "sabadell_es",
                    name: "Banco Sabadell",
                    img: "images/bsabadell.jpg",
                    color: "white"
                }
                /* {
                 *     id: "2301",
                 *     name: "Bankia",
                 *     img: "images/bankia.jpg",
                 *     color: "#46382b"
                 * }*/
            ]
        }
    }



  render() {
    const { selectProvider } = this.props

    const banks = this.state.banks.map((bank, index) =>
      <div key={bank.id}>
          <Link to="/connect_provider" onClick={() => {selectProvider(bank)}} className="uk-card uk-card-default uk-card-hover uk-card-body uk-border-rounded bank-card" style={{backgroundColor: bank.color}}>
            <img className="uk-position-center" src={bank.img} />
          </Link>
      </div>
    );
    return (
      <div className="uk-grid-middle uk-grid-match uk-child-width-expand@s uk-text-center" uk-grid="true">
        {banks}
      </div>
    );
  }
}
