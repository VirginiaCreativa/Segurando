import React from 'react';
import classes from './postscontent.module.scss';

const pathToAssets = require.context('../../../assets', true);

const PostsContentItem = ({ formacion, title, image, date, description }) => (
  <div className={classes.PostsContenItem}>
    <div className="row">
      <div className={[classes.BoxImage, 'col-md-6 col-sm-12'].join(' ')}>
        <img
          src={pathToAssets(`./images/formaciones/${image}`)}
          alt={title}
          className="img-fluid"
        />
      </div>
      <div className={[classes.BoxContent, 'col-md-6 col-sm-12'].join(' ')}>
        <div className={classes.Top}>
          <h6>{formacion}</h6>
          <span />
          <p>{date}</p>
        </div>
        <div className={classes.Content}>
          <h5>{title}</h5>
          <p>{description}</p>
          <button type="button" className="btn btn-primary">
            más información
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default PostsContentItem;
