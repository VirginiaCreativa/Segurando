import React, { Component, Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { cloneDeep } from 'lodash';
import classes from './reactid.module.scss';
import Spinner from '../../UI/spinner/spinner';

import Arrows from '../../UI/arrows/arrows';

import { fetchReactid } from '../../../redux/actions/ReactidAction';

// import BoxReactid from './boxreactid';

const BoxReactid = lazy(() => import('./boxreactid'));

class Reactid extends Component {
  componentDidMount() {
    this.props.fetchReactid();
  }

  render() {
    const { error, loading, reactid } = this.props;

    return (
      <div className={classes.Reactid}>
        <div className="container">
          <div className="d-none d-md-block">
            {loading ? (
              <div className="d-flex justify-content-center">
                <Spinner />
              </div>
            ) : (
              <div className={classes.Box_sm}>
                {reactid.map(item => (
                  <BoxReactid key={item.id} {...item} />
                ))}
              </div>
            )}
          </div>
          <div className="d-sm-block d-md-none">
            <Arrows select="r" />
            <Arrows select="l" />
            <div className={classes.Box_md}>
              <BoxReactid title="Cursos" number="200" />
              <BoxReactid title="Diplomados" number="120" />
              <BoxReactid title="Seminarios y conferencias" number="60" />
              <BoxReactid title="Vendedores" number="520" />
              <BoxReactid title="Ganadores" number="340" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchReactid }, dispatch);

export default compose(
  connect(
    state => ({
      reactid: state.Reactid.items,
      loading: state.Reactid.loading,
      error: state.Reactid.error,
    }),
    mapDispatchToProps
  )
)(Reactid);
