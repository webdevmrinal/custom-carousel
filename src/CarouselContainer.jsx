import { useEffect, useState } from "react";
import ImageList from "./ImageList";
import ImagePreview from "./ImagePreview";
import { imageUrlArray } from "./utilities/constants";
import ArticleContainer from "./ArticleContainer";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";

import classes from "./styles/CarouselContainer.module.css";

function CarouselContainer() {
  const [selctedImage, setSelctedImage] = useState(2);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isPlaying) {
      intervalId = setInterval(() => {
        setSelctedImage((prev) => (prev + 1) % imageUrlArray.length);
      }, 2000);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isPlaying]);

  return (
    <div className={classes.carousel__container}>
      <div>
        <ImagePreview selctedImage={imageUrlArray[selctedImage]} />
        <ImageList
          selectedImage={selctedImage}
          onSetSelctedImage={setSelctedImage}
          imageArray={imageUrlArray}
        />
      </div>
      <div>
        <ArticleContainer selectedImageData={imageUrlArray[selctedImage]} />
        <span
          onClick={() => {
            setIsPlaying((prev) => !prev);
          }}
        >
          {isPlaying ? (
            <PauseCircleFilledIcon
              sx={{ fontSize: "99px", cursor: "pointer" }}
              htmlColor="#25BEDA"
            />
          ) : (
            <PlayCircleFilledWhiteIcon
              sx={{ fontSize: "99px", cursor: "pointer" }}
              htmlColor="#25BEDA"
            />
          )}
        </span>
      </div>
    </div>
  );
}

export default CarouselContainer;
