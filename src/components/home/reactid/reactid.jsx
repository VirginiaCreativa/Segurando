import React, { Component, Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import classes from './reactid.module.scss';

import { fetchReactid } from '../../../redux/actions/ReactidAction';

import Arrows from '../../UI/arrows/arrows';
import Spinner from '../../UI/spinner/spinner';

const ItemReactid = lazy(() => import('./reactidItem'));

class Reactid extends Component {
  componentDidMount() {
    this.props.fetchReactid();
  }

  render() {
    const { error, loading, reactid } = this.props;

    return (
      <div className={classes.Reactid}>
        <div className="container">
          {/* LAPTOP */}
          <div className="d-none d-sm-none d-md-none d-lg-block ">
            {loading ? (
              <div className="d-flex justify-content-center">
                <Spinner />
              </div>
            ) : (
              <div className={classes.Box_md}>
                {reactid.map(item => (
                  <ItemReactid key={item.id} {...item} />
                ))}
              </div>
            )}
          </div>
          {/* MOBIL */}
          <div className="d-sm-block d-md-block d-lg-none">
            <div className={classes.BoxSlide}>
              <Arrows select="l" />
              <div className={classes.Scrolling}>
                {loading ? (
                  <div className="d-flex justify-content-center">
                    <Spinner />
                  </div>
                ) : (
                  <div className={classes.Box_sm}>
                    {reactid.map(item => (
                      <ItemReactid key={item.id} {...item} />
                    ))}
                  </div>
                )}
              </div>
              <Arrows select="r" />
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
