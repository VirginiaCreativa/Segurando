import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import classes from './formacion.module.scss';

import Heading from '../layouts/heading/heading';
import PostsContents from '../components/formacion/postscontent/postscontent';
import Sidebar from '../components/formacion/sidebar/sidebar';

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
      <div className={classes.Formacion}>
        <Heading title="Formación" pagePath={pathName} />

        <div className="container">
          <div className="row">
            <div className="col-md-10 col-sm-12">
              <PostsContents />
            </div>
            <div className="col-md-2 d-none d-sm-block">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
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
