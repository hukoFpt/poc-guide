import Champion from "@/data/champion.model";
import Image from "next/image";

interface SidebarButtonProps {
  onClick: () => void;
  champion: Champion;
}

const Button = ({ champion }: SidebarButtonProps) => {
  return (
    <div className="relative champion-select-button font-aldrich bg-neutral-900">
      <div className="champion-select-button-content items-center z-10">
        <div className="mx-2 flex region-border w-10 h-10 items-center justify-center">
          <div>
            <Image
              className="opacity-70"
              src="/Region/All.png"
              width={30}
              height={30}
              alt=""
            />
          </div>
        </div>
        <div>
          <div className="px-1 text-lg font-bold">{champion.name}</div>
          <div className="px-1 text-sm text-neutral-400">{champion.title}</div>
        </div>
      </div>
      <Image
        className="absolute inset-0 p-1 z-0"
        src={champion.banner}
        layout="fill"
        objectFit="cover"
        alt={champion.name}
      />
    </div>
  );
};

export default Button;
