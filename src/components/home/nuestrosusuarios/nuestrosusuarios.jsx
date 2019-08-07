import React, { Component, lazy } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import classes from './nuestrosusuarios.module.scss';

import { fetchNuestrosUsuarios } from '../../../redux/actions/NuestrosUsuariosAction';
import Wrapper from '../../UI/wrapper/wrapper';
import Spinner from '../../UI/spinner/spinner';
import Arrows from '../../UI/arrows/arrows';

const ItemUsuario = lazy(() => import('./nuestrosusuariosItem'));

class NuestrosUsuarios extends Component {
  componentDidMount = () => {
    this.props.fetchNuestrosUsuarios();
  };

  render() {
    const { error, loading, usuarios } = this.props;
    return (
      <div className={classes.NuestrosUsuarios}>
        <Wrapper title="Nuestros Usuarios" bgColor="1">
          <div className={classes.Subtitle}>
            <p>
              Anim Lorem quis commodo fugiat anim ullamco eiusmod cupidatat
              excepteur sunt. Veniam veniam sunt ut elit anim aute sunt magna
              duis laborum.
            </p>
          </div>
          <div className={classes.BoxSlice}>
            <Arrows select="l" />
            <div className={classes.ItemsScrolling}>
              {loading ? (
                <div className="d-flex justify-content-center">
                  <Spinner />
                </div>
              ) : (
                <div className={classes.BoxGrid}>
                  {usuarios.map(item => (
                    <ItemUsuario key={item.id} {...item} />
                  ))}
                </div>
              )}
            </div>
            <Arrows select="r" />
          </div>
        </Wrapper>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchNuestrosUsuarios }, dispatch);

export default compose(
  connect(
    state => ({
      usuarios: state.NuestrosUsuarios.usuarios,
      loading: state.NuestrosUsuarios.loading,
      error: state.NuestrosUsuarios.error,
    }),
    mapDispatchToProps
  )
)(NuestrosUsuarios);
