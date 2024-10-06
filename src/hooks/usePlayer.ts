import { api } from "@api/api";
import { useQuery } from "@tanstack/react-query";
import { usePlayerStore } from "store/actions/usePlayerStore";

export const usePlayerListQuery = (url: string) => {
  const setPlayerList = usePlayerStore((state) => state.setPlayerList);

  return useQuery({
    queryKey: [url],
    queryFn: async () => {
      const data = await api(`player/${url}list`);
      if (url === "coach") {
        setPlayerList(data.data.list);
        return data.data;
      }

      setPlayerList(data);
      return data;
    },
    enabled: !!url,
  });
};

export const usePlayerDetailQuery = (url: string, pcode: string) => {
  const setPitcherDetail = usePlayerStore((state) => state.setPitcherDetail);
  const setHitterDetail = usePlayerStore((state) => state.setHitterDetail);
  const setPlayer = usePlayerStore((state) => state.setPlayer);

  return useQuery({
    queryKey: [url, pcode],
    queryFn: async () => {
      const data = await fetchPlayerDetail(url, pcode);
      if (url === "coach") {
        setPlayer(data.data.coachstep);
      } else {
        setPlayer(data.data.gameplayer);
        if (url === "pitcher") {
          setPitcherDetail(data);
        } else if (url === "catcher" || url === "infielder" || url === "outfielder") {
          setHitterDetail(data);
        }
      }
      return data.data;
    },
  });
};

const fetchPlayerDetail = async (url: string, pcode: string) => {
  const response = await api(`player/${url}detail?pcode=${pcode}`);
  return response;
};
