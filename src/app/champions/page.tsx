"use client";

import { MainDisplay } from "@/components/champion/MainDisplay.component";
import Sidebar from "@/components/champion/Sidebar.component";
import Navbar from "@/components/common/ChildNavbar.component";
import { useEffect, useState } from "react";
import ChampionService from "@/data/champion.service";
import Champion from "@/data/champion.model";

const Champions = () => {
  const [championData, setChampionData] = useState<Champion[]>([]);

  useEffect(() => {
    const fetchChampionData = async () => {
      try {
        const data = await ChampionService().getChampions();
        setChampionData(data);
      } catch (error) {
        console.error("Error fetching champion data:", error);
      }
    };

    fetchChampionData();
  }, []);

  return (
    <div>
      <Navbar title={"Champion"} />
      <div className="flex">
        <Sidebar champion={championData} />
        <MainDisplay content={""} />
      </div>
    </div>
  );
};

export default Champions;
