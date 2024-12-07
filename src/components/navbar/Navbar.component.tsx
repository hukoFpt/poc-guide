"use client";

import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import Button from "./Button.component";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <div className="flex justify-between w-full bg-neutral-900 border-b border-neutral-600 px-8 pt-2">
      <div>
        <Image
          className="pb-2"
          src="/LoR_Logo.webp"
          alt="Logo"
          width={180}
          height={24}
          layout="intrinsic"
          onClick={() => navigateTo("/")}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="flex space-x-6 items-end">
        <Button
          text="Champions"
          onClick={() => navigateTo("/champions")}
          isActive={pathname === "/champions"}
        />
        <Button
          text="Relics"
          onClick={() => navigateTo("/relics")}
          isActive={pathname === "/relics"}
        />
        <Button
          text="Powers"
          onClick={() => navigateTo("/powers")}
          isActive={pathname === "/powers"}
        />
        <Button
          text="Locations"
          onClick={() => navigateTo("/locations")}
          isActive={pathname === "/locations"}
        />
      </div>
    </div>
  );
};

export default Navbar;
