import React, { Component, lazy } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import classes from './postscontent.module.scss';

import Spinner from '../../UI/spinner/spinner';

const PostsContenItem = lazy(() => import('./postscontentItem'));

class PostsContent extends Component {
  render() {
    const { error, loading, formaciones } = this.props;
    return (
      <div className={classes.PostsContent}>
        {loading ? (
          <div className="d-flex justify-content-center">
            <Spinner />
          </div>
        ) : (
          <>
            {formaciones.map(item => (
              <PostsContenItem key={item.id} {...item} />
            ))}
          </>
        )}
      </div>
    );
  }
}

export default compose(
  connect(
    state => ({
      formaciones: state.Formacion.formaciones,
      loading: state.Formacion.loading,
      error: state.Formacion.error,
    }),
    null
  )
)(PostsContent);
