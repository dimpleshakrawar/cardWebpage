import Image from "next/image";

export default function IconImages({
  image,
  padding,
  topPosition,
  LeftPosition,
  rightPosition,
  bottomPosition,
}) {
  return (
    <div
      className={`absolute bg-white rounded-full animate-bounce`}
      style={{
        top: topPosition,
        left: LeftPosition || "",
        padding: padding || "",
        right: rightPosition || "",
        bottom: bottomPosition || "",
      }}
    >
      <Image
        src={image}
        alt="Card"
        width={38}
        height={40}
        className="object-cover"
      />
    </div>
  );
}
