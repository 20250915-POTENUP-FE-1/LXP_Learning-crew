import { StaticImageData } from "next/image";

type ThumbnailSize = "large" | "medium";
type ThumbnailVariant = "image" | "placeholder" | "loading";

interface ThumbnailProps {
  title: string;
  imageUrl?: string | StaticImageData;
  variant?: ThumbnailVariant;

  size: ThumbnailSize;
}

export type { ThumbnailProps };
