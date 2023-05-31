import React from 'react';
import { ImageData } from './utilities/constants';
import classes from './styles/ArticleContainer.module.css';

interface ArticleContainerProps {
  selectedImageData: ImageData;
}

const ArticleContainer: React.FC<ArticleContainerProps> = (props) => {
  return (
    <div>
      <div className={classes.article__title}>{props.selectedImageData.title}</div>
      <div className={classes.article__content}>{props.selectedImageData.about}</div>
    </div>
  );
}

export default ArticleContainer;
