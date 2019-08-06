import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import Banner from '../components/home/banner/banner';
import Reactid from '../components/home/reactid/reactid';

import { getSelectLogo } from '../redux/actions/GlobalAction';

class Home extends Component {
  componentDidMount() {
    this.props.getSelectLogo(2);
  }

  render() {
    return (
      <>
        <Banner />
        <Reactid />
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
)(Home);
