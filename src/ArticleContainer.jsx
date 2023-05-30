import classes from './styles/ArticleContainer.module.css'

const ArticleContainer = (props) => {
  return (
    <div>
        <div className={classes.article__title}>{props.selectedImageData.title}</div>
        <div className={classes.article__content}>{props.selectedImageData.about}</div>
    </div>
  )
}

export default ArticleContainer