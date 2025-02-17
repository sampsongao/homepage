import Image from "next/image";
import AspectRatioSizedBox from "./AspectRatioSizedBox";

export type PostPreviewTileProps = {
  title: string;
  description: string;
  previewImageUrl: string;
};

export default function PostPreviewTile(props: PostPreviewTileProps) {
  return (
    <div className="bg-white dark:bg-zinc-900 shadow-lg">
      <AspectRatioSizedBox
        height="auto"
        width="100%"
        heightRatio={3}
        widthRatio={2}
      >
        <div className="w-full h-full flex content-center overflow-hidden">
          <Image
            className="object-cover"
            src={props.previewImageUrl}
            alt="preview"
            width={1000}
            height={1000}
          />
        </div>
      </AspectRatioSizedBox>

      <div className="p-4 space-y-2">
        <h3 className="text-l font-bold text-gray-700 dark:text-gray-300">
          {props.title}
        </h3>

        <div className="max-h-[160px] overflow-hidden">
          <p className="text-sm text-gray-700 dark:text-gray-300">{props.description}</p>
        </div>
      </div>
    </div>
  )
};
