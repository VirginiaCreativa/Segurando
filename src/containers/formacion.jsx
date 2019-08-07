import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import classes from './formacion.module.scss';

import Heading from '../layouts/heading/heading';
import PostsContents from '../components/formacion/postscontent/postscontent';
import Sidebar from '../components/formacion/sidebar/sidebar';

import { getSelectLogo } from '../redux/actions/GlobalAction';
import { fetchFormacion } from '../redux/actions/FormacionAction';

class Formacion extends Component {
  state = {
    pathPage: '',
  };

  componentDidMount() {
    this.props.getSelectLogo(1);
    this.props.fetchFormacion();
    this.setState({ pathPage: this.props.match.path });
  }

  render() {
    const { pathPage } = this.state;
    const pathName = pathPage.replace('/', '');

    return (
      <div className={classes.Formacion}>
        <Heading title="Formación" pagePath={pathName} />

        <div className="container">
          <div className="row">
            <div className="col-md-9 col-sm-12">
              <PostsContents />
            </div>
            <div className="col-md-3 d-none d-sm-block">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getSelectLogo, fetchFormacion }, dispatch);

export default compose(
  connect(
    null,
    mapDispatchToProps
  )
)(Formacion);
