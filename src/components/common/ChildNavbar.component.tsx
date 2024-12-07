import Button from "./Button.component";

interface NavbarProps {
  title: string;
}

const Navbar = ({ title }: NavbarProps) => {
  return (
    <div className="flex font-miSans justify-between px-8 w-full bg-[#03030380] border-b border-neutral-600">
      <div className="text-7xl font-bold text-[#1f1f1f] py-1">
        {title}
      </div>
      <div className="flex space-x-2 items-end">
        <Button
          text="Overview"
          isActive={true}
        />
        <Button
          text="Constellation"
          isActive={false}
        />
        <Button
          text="Champion Level"
          isActive={false}
        />
        <Button
          text="Starting Deck"
          isActive={false}
        />
        <Button
          text="Relics"
          isActive={false}
        />
      </div>
    </div>
  );
};

export default Navbar;
