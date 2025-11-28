import Image from "next/image";

export default function DockItem({
  src,
  alt,
  link,
  windowChange
}: {
  src: string;
  alt: string;
  link?: string;
  windowChange: (window: string) => void;
}) {
  return (
    <div
      className={`relative flex items-end transition-all duration-200 hover:scale-[1.35]`}
    >
      <button onClick={() => windowChange(alt)}>
        <Image
          src={src}
          alt={alt}
          width={80}
          height={80}
          className="rounded-xl select-none cursor-pointer"
        />
      </button>
    </div>
  );
}
