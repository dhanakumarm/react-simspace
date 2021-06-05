import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import ImageGallery from "./ImagesGallery";

const BreedImageList = (props) => {
  const dispatch = useDispatch();

  const images = useSelector((state) => state.breedImg.images);
  const imgloading = useSelector((state) => state.breedImg.imgloading);
  const errors = useSelector((state) => state.breedImg);

  const [imageList, setImageList] = useState([]);
  const [loading, setLoading] = useState(true);
  const counter = useRef(0);

  useEffect(() => {
    setImageList(images);
    setLoading(true);
  }, [images, dispatch, imgloading]);

  const imageLoadHandler = () => {
    counter.current += 1;
    if (counter.current >= imageList.length) {
      setLoading(false);
    }
  };

  const LoadingWrapper = styled.div`
    display: ${imgloading && loading ? "block" : "none"};
  `;

  const ImageGalleryWrapper = styled.div`
    display: ${imgloading && !loading ? "block" : "none"};
  `;

  let content = "";

  if (!errors.isError) {
    content = (
      <React.Fragment>
        <LoadingWrapper>
          <p>Loading...</p>
        </LoadingWrapper>

        <ImageGalleryWrapper>
          {imageList.length !== 0 &&
            imageList.map((data, index) => (
              <ImageGallery
                imgUrl={data}
                key={data}
                imgOnload={imageLoadHandler}
              />
            ))}
        </ImageGalleryWrapper>
      </React.Fragment>
    );
  }

  if (errors.isError) {
    content = <p>{errors.errors}</p>;
  }

  return <React.Fragment>{content}</React.Fragment>;
};

export default BreedImageList;
