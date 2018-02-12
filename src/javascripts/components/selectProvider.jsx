import React from 'react';
import { Link } from 'react-router-dom';
const uuidv4 = require('uuid/v4');

export default class SelectProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            uuid: uuidv4(),
            banks: [
                {
                    id: "2300",
                    code: "santander_es",
                    name: "Santander",
                    img: "images/santander.png",
                    color: "#fe0000"
                },
                {
                    id: "2369",
                    code: "bbva_es",
                    name: "BBVA",
                    img: "images/bbva.jpg",
                    color: "#1c5ba2"
                },
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
                },
                {
                    id: "2552",
                    code: "bankia_es",
                    name: "Bankia",
                    img: "images/bankia.jpg",
                    color: "#46382b"
                },
                {
                    id: "2550",
                    code: "popular_es",
                    name: "Banco Popular",
                    img: "images/bancoPopular.jpg",
                    color: "#a4222c"
                },
                {
                    id: "2230",
                    code: "bankinter_es",
                    name: "Bankinter",
                    img: "images/bankinter.jpg",
                    color: "#f68426"
                },
                {
                    id: "2465",
                    code: "evobanco_es",
                    name: "Evo Banco",
                    img: "images/evoBanco.jpg",
                    color: "white"
                },
                {
                    id: "2617",
                    code: "unicaja_es",
                    name: "Unicaja",
                    img: "images/unicaja.jpg",
                    color: "white"
                }
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
      <div className="uk-grid-middle uk-grid-match uk-child-width-1-4@m uk-text-center" uk-grid="true">
        {banks}
      </div>
    );
  }
}
