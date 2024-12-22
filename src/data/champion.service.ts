import champions from "./champion.data";

const ChampionService = () => {
  const getChampions = () => {
    return champions;
  };

  const getChampionById = (id: string) => {
    return champions.find((champion) => champion.id === id);
  };

  return {
    getChampions,
    getChampionById,
  };
};

export default ChampionService;
