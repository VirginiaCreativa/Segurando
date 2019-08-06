import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { cloneDeep } from 'lodash';
import classes from './reactid.module.scss';

import BoxReactid from './boxreactid';
import Arrows from '../../UI/arrows/arrows';

import { fetchReactid } from '../../../redux/actions/ReactidAction';

class Reactid extends Component {
  componentDidMount() {
    this.props.fetchReactid();
  }

  render() {
    const { error, loading, reactid } = this.props;
    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className={classes.Reactid}>
        <div className="container">
          <div className="d-none d-md-block">
            <div className={classes.Box_sm}>
              {loading ? (
                <div>Loading...</div>
              ) : (
                reactid.map(item => <BoxReactid key={item.id} {...item} />)
              )}
            </div>
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
