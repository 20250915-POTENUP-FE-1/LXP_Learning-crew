import React from "react";
import { ThumbnailProps } from "./Thumbnail.type";
import Image from "next/image";
import { thumbnailStyle } from "./Thumbnail.style";
import ThumbnailPlaceholder from "./assets/thumbnail.png";

const Thumbnail = ({
  title,
  imageUrl,
  size,
  variant = "placeholder",
}: ThumbnailProps) => {
  return (
    <>
      {imageUrl === undefined ? (
        <div className={thumbnailStyle({ size, variant })}>
          {variant === "placeholder" ? <p>{title}</p> : null}
        </div>
      ) : (
        <Image
          className={thumbnailStyle({ size })}
          alt={title}
          src={imageUrl ? imageUrl : ThumbnailPlaceholder}
        />
      )}
    </>
  );
};

export default Thumbnail;
