import { api } from "@api/api";
import { useQuery } from "@tanstack/react-query";
import { useGameStore } from "store/actions/useGameStore";

export const useBoxScoreQuery = (gameDate?: string, gmkey?: string) => {
  const setBoxScore = useGameStore((state) => state.setBoxScore);

  if (!gameDate && !gmkey)
    return useQuery({
      queryKey: [gameDate, gmkey],
      queryFn: async () => {
        const data = await api(`game/boxscore`);
        setBoxScore(data.data);
        return data;
      },
    });

  return useQuery({
    queryKey: [gameDate, gmkey],
    queryFn: async () => {
      const data = await api(`game/boxscore?gameDate=${gameDate}&gmkey=${gmkey}`);
      setBoxScore(data.data);
      return data.data;
    },
  });
};
