import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import Banner from '../components/home/banner/banner';

import { getSelectLogo } from '../redux/actions/GlobalAction';

class Formacion extends Component {
  componentDidMount() {
    this.props.getSelectLogo(1);
  }

  render() {
    return (
      <>
        <h2>Formacion</h2>
      </>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getSelectLogo }, dispatch);

export default compose(
  connect(
    null,
    mapDispatchToProps
  )
)(Formacion);
