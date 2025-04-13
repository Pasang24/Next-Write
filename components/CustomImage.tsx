import React, { useState } from "react";
import { Skeleton } from "./ui/skeleton";
import Image, { ImageProps } from "next/image";

function CustomImage({ src, alt, width, height, ...props }: ImageProps) {
  const [loading, setLoading] = useState(true);
  return (
    <div className={`relative aspect-[${width}/${height}]`}>
      <Skeleton
        className={` w-full h-full rounded-none transition-all ${
          !loading ? "invisible" : ""
        }`}
      />
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={() => setLoading(false)}
        onError={() => setLoading(false)}
        {...props}
      />
    </div>
  );
}

export default CustomImage;
