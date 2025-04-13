import React, { useState } from "react";
import { Skeleton } from "./ui/skeleton";
import Image, { ImageProps } from "next/image";

function CustomImage({ src, alt, width, height, ...props }: ImageProps) {
  const [showImage, setShowImage] = useState(false);
  return (
    <div className={`relative aspect-[${width}/${height}]`}>
      <Skeleton
        className={`absolute w-full h-full rounded-none  ${
          showImage ? "invisible" : ""
        }`}
      />
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={() => setShowImage(true)}
        {...props}
        className={`w-full opacity-0 transition-opacity ${
          showImage ? "opacity-100" : ""
        }`}
      />
    </div>
  );
}

export default CustomImage;
