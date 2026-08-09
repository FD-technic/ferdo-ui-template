import type { Image } from "./ProjectType";

type ImageProps = {
  image: Image;
};

export function ProjectImage({ image }: ImageProps) {
  return (
     <img
      src={image.src}
      alt={image.alt}
      width={image.width}
      className="shadow" />
  );
}
