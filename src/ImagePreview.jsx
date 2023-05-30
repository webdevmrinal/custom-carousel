import classes from './styles/ImagePreview.module.css'

const ImagePreview = (props) => {
  return (
    <div className={classes.preview__container}>
        <img className={classes.preview__image} src={props.selctedImage.url} alt="" loading='lazy'/>
    </div>
  )
}

export default ImagePreview