import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';

import Heading from '../layouts/heading/heading';

import { getSelectLogo } from '../redux/actions/GlobalAction';

class Formacion extends Component {
  state = {
    pathPage: '',
  };

  componentDidMount() {
    this.props.getSelectLogo(1);
    this.setState({ pathPage: this.props.match.path });
  }

  render() {
    const { pathPage } = this.state;
    const pathName = pathPage.replace('/', '');
    return (
      <>
        <Heading title="Formación" pagePath={pathName} />
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
