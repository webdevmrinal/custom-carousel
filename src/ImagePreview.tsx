import React from 'react';
import { ImageUrl } from './utilities/constants';
import classes from './styles/ImagePreview.module.css';

interface ImagePreviewProps {
  selctedImage: ImageUrl;
}

const ImagePreview: React.FC<ImagePreviewProps> = (props) => {
  return (
    <div>
      <img className={classes.preview__container} src={props.selctedImage.url} alt="" loading='lazy' />
    </div>
  );
}

export default ImagePreview;
