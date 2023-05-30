import { imageUrlArray } from './utilities/constants'
import classes from './styles/ImagePreview.module.css'

const ImagePreview = (props) => {
  return (
    <div className={''}>
        <img className={classes.preview__container} src={props.selctedImage.url} alt="" loading='lazy'/>
    </div>
  )
}

export default ImagePreview