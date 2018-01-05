import React from 'react';
import { Link } from 'react-router-dom'
const uuidv4 = require('uuid/v4');

export default class SelectProvider extends React.Component {
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
        <Link to="#" key={bank.id} className="uk-width-1-2 uk-width-1-3@s uk-padding uk-animation-toggle">
          <div className="uk-animation-slide-top-small">
            <img src={bank.img} />
          </div>
      </Link>
    );
    return (
      <div className="uk-grid-medium uk-text-center uk-padding" uk-grid="true">
        {banks}
      </div>
    );
  }
}
