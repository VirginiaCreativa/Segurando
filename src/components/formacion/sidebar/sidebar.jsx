import React from 'react';
import classes from './sidebar.module.scss';

import FormacionesItems from './sidebarFormacionItem';
import CategoriasItems from './sidebarCategoriaItem';
import Buscador from './buscador';

const Sidebar = () => (
  <div className={classes.Sidebar}>
    <Buscador />
    <FormacionesItems />
    <CategoriasItems />
  </div>
);

export default Sidebar;
