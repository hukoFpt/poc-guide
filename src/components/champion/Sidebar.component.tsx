import Champion from "@/data/champion.model";
import Button from "./SidebarButton.component";

interface SidebarProps {
  champion: Champion[];
}

const Sidebar = ({ champion }: SidebarProps) => {
  return (
    <div className="relative w-1/4 p-4 flex flex-col gap-2">
      {champion
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((champ) => (
          <Button
            key={champ.id}
            champion={champ}
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        ))}
    </div>
  );
};

export default Sidebar;
