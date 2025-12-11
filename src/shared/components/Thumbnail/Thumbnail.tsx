// src/shared/components/Thumbnail/Thumbnail.tsx
import React from "react";
import { ThumbnailProps } from "./Thumbnail.type";
import Image from "next/image";
import { thumbnailStyle } from "./Thumbnail.style";

const Thumbnail = ({
  title,
  imageUrl,
  size,
  variant = "placeholder",
}: ThumbnailProps) => {
  return (
    // 🟢 중요 1: 가장 바깥에 div를 만들고, 여기에 사이즈 스타일과 'relative'를 줍니다.
    // overflow-hidden: 이미지가 둥근 모서리 등을 튀어나가지 않게 자름
    // relative: 내부 이미지가 이 박스를 기준으로 크기를 잡게 함
    <div
      className={`relative overflow-hidden ${thumbnailStyle({ size, variant })}`}
    >
      {imageUrl ? (
        // 🟢 중요 2: 이미지가 있을 때
        <Image
          src={imageUrl}
          alt={title}
          fill // 부모(div) 크기에 맞춰 꽉 채움
          className="object-cover" // 비율 유지하면서 꽉 채우기
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      ) : (
        // 🟢 중요 3: 이미지가 없을 때 (Placeholder)
        // 이미 위쪽 부모 div에서 스타일을 잡았으므로, 여기선 내용만 보여주면 됩니다.
        // (필요하다면 내부 정렬 스타일 추가 가능)
        <div className="flex h-full w-full items-center justify-center bg-gray-200 text-gray-500">
          {variant === "placeholder" ? (
            <p className="p-2 text-center text-xs">{title}</p>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Thumbnail;
