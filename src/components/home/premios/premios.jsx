import React, { Component, lazy } from 'react';
import { history } from '../../../redux/store/store';
import classes from './premios.module.scss';

import imagePremios from '../../../assets/images/premios.jpg';
import Wrapper from '../../UI/wrapper/wrapper';

class Premios extends Component {
  render() {
    return (
      <div className={classes.Premios}>
        <Wrapper title="Premios simbólicos" bgColor="2">
          <div className="row">
            <div className="col-lg-4 col-sm-12 align-items-center">
              <p>
                In dolor consequat est anim consectetur aliqua voluptate aliquip
                do commodo reprehenderit elit. Occaecat Lorem commodo qui
                reprehenderit tempor id veniam aliquip officia nostrud esse.
                Laborum sit id nisi do eu do consequat.
              </p>
            </div>
            <div className="col-lg-8 col-sm-12">
              <img src={imagePremios} alt="Premios" className="img-fluid" />
            </div>
            <div className="col-12">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => history.push('/')}>
                Comienza ahora
              </button>
            </div>
          </div>
        </Wrapper>
      </div>
    );
  }
}

export default Premios;
