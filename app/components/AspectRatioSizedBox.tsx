export type AspectRatioSizedBoxProps = {
  height: string;
  width: string;
  heightRatio: number;
  widthRatio: number;
  children: React.ReactNode;
};

export default function AspectRatioSizedBox(props: AspectRatioSizedBoxProps) {
  const { height, width, heightRatio, widthRatio } = props;

  return (
    <div className="relative" style={{ height, width, paddingTop: `calc(${widthRatio} / ${heightRatio} * 100%)` }}>
      <div className="absolute top-0 bottom-0 left-0 right-0">
        {props.children}
      </div>
    </div>
  );
};
