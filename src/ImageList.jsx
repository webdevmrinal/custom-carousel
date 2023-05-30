import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import classes from "./styles/ImageList.module.css";

const ImageList = (props) => {
  function handleRight() {
    if (props.selectedImage === 4) props.onSetSelctedImage(0);
    else props.onSetSelctedImage((prev) => prev + 1);
  }
  function handleLeft() {
    if (props.selectedImage === 0) props.onSetSelctedImage(4);
    else props.onSetSelctedImage((prev) => prev - 1);
  }

  return (
    <div className={classes.list__container}>
      <span onClick={handleLeft}>
        <ArrowLeftIcon sx={{ fontSize: "5em", cursor: "pointer" }} />
      </span>
      <div className={classes.image__list}>
        {props.imageArray.map((item, index) => (
          <img
            className={`${classes.image__item} ${
              props.selectedImage === index ? classes.active : ""
            }`}
            key={item.id}
            src={item.url}
            alt=""
            loading="lazy"
            onClick={()=>{props.onSetSelctedImage(index)}}
          />
        ))}
      </div>
      <span onClick={handleRight}>
        <ArrowRightIcon
          sx={{ fontSize: "5em", cursor: "pointer" }}
        />
      </span>
    </div>
  );
};

export default ImageList;
