import { FilterHitRecentType } from "@customTypes/hitterRecent";
import { FilterHitTotalType } from "@customTypes/hitterTotal";
import { FilterPitRecentType } from "@customTypes/pitcherRecent";
import { FilterPitTotalType } from "@customTypes/pitcherTotal";
import { FilterHitterType, FilterHitterType2 } from "@customTypes/playerHitter";
import { FilterPitcherType, FilterPitcherType2 } from "@customTypes/playerPitcher";
import {
  hitRecentHeaders,
  hitterHeaders,
  hitterHeaders2,
  hitTotalHeaders,
  pitcherHeaders,
  pitcherHeaders2,
  pitRecentHeaders,
  pitTotalHeaders,
} from "@data/playerHeaders";
import { TableMargin } from "@styles/PlayerTable.style";
import { filterData } from "@utils/filterData";
import { filterPitRecentData } from "@utils/fiterPlayerData";
import { hitRecentData, hitterData, hitTotalData, pitcherData, pitRecentData, pitTotalData } from "data/playerData";
import { usePlayerStore } from "store/actions/usePlayerStore";
import styled from "styled-components";
import PlayerChart from "./PlayerChart";
import PlayerTable from "./PlayerTable";

const TableWrapper = styled.div`
  margin-top: 15px;
  width: 1100px;
  border-top: 2px solid #d7161b;
`;

const PlayerTableInfo = ({ isPitcher, menu }: { isPitcher: boolean; menu: string }) => {
  const pitcherSeasonSummary = usePlayerStore((state) => state.pitcherSeasonSummary);
  const hitterSeasonSummary = usePlayerStore((state) => state.hitterSeasonSummary);

  if ((!isPitcher && !hitterSeasonSummary) || (isPitcher && !pitcherSeasonSummary)) return <></>;

  const filteredPitchers = pitcherData.map((data) => filterData(data, pitcherHeaders)) as FilterPitcherType[];
  const filteredPitchers2 = pitcherData.map((data) => filterData(data, pitcherHeaders2)) as FilterPitcherType2[];
  const filteredHitters = hitterData.map((data) => filterData(data, hitterHeaders)) as FilterHitterType[];
  const filteredHitters2 = hitterData.map((data) => filterData(data, hitterHeaders2)) as FilterHitterType2[];
  const filteredPitRecents: FilterPitRecentType[] = pitRecentData.map(filterPitRecentData);
  const filteredHitRecents = hitRecentData.map((data) => filterData(data, hitRecentHeaders)) as FilterHitRecentType[];
  const filteredPitTotals = pitTotalData.map((data) => filterData(data, pitTotalHeaders)) as FilterPitTotalType[];
  const filteredHitTotals = hitTotalData.map((data) => filterData(data, hitTotalHeaders)) as FilterHitTotalType[];
  return (
    <>
      <TableWrapper>
        {isPitcher ? (
          <>
            {menu === "league" && (
              <>
                <PlayerTable<FilterPitcherType>
                  resData={filteredPitchers}
                  headers={pitcherHeaders.map((item) => item[1])}
                />
                <TableMargin />
                <PlayerTable<FilterPitcherType2>
                  resData={filteredPitchers2}
                  headers={pitcherHeaders2.map((item) => item[1])}
                />
                {pitcherSeasonSummary && (
                  <PlayerChart
                    isPitcher={isPitcher}
                    data={[
                      Number(pitcherSeasonSummary.era) < 6
                        ? Math.round((6 - parseFloat(pitcherSeasonSummary.era)) * 100) / 100
                        : 0,
                      Number(pitcherSeasonSummary.whip) < 2
                        ? Math.round((2 - parseFloat(pitcherSeasonSummary.whip)) * 100) / 100
                        : 0,
                      pitcherSeasonSummary.kk,
                      Math.floor(pitcherSeasonSummary.inn2 / 3),
                      Number(pitcherSeasonSummary.wra),
                      Number(pitcherSeasonSummary.kbb),
                    ]}
                  />
                )}
              </>
            )}
            {menu === "recent" && (
              <PlayerTable<FilterPitRecentType> resData={filteredPitRecents} headers={pitRecentHeaders} />
            )}
            {menu === "total" && (
              <PlayerTable<FilterPitTotalType>
                resData={filteredPitTotals}
                headers={pitTotalHeaders.map((item) => item[1])}
              />
            )}
          </>
        ) : (
          <>
            {menu === "league" && (
              <>
                <PlayerTable<FilterHitterType>
                  resData={filteredHitters}
                  headers={hitterHeaders.map((item) => item[1])}
                />
                <TableMargin />
                <PlayerTable<FilterHitterType2>
                  resData={filteredHitters2}
                  headers={hitterHeaders2.map((item) => item[1])}
                />
                {hitterSeasonSummary && (
                  <PlayerChart
                    isPitcher={isPitcher}
                    data={[
                      Number(hitterSeasonSummary.hra),
                      hitterSeasonSummary.hr,
                      hitterSeasonSummary.rbi,
                      Number(hitterSeasonSummary.bra),
                      Number(hitterSeasonSummary.slg),
                      hitterSeasonSummary.sb,
                    ]}
                  />
                )}
              </>
            )}
            {menu === "recent" && (
              <PlayerTable<FilterHitRecentType>
                resData={filteredHitRecents}
                headers={hitRecentHeaders.map((item) => item[1])}
              />
            )}
            {menu === "total" && (
              <PlayerTable<FilterHitTotalType>
                resData={filteredHitTotals}
                headers={hitTotalHeaders.map((item) => item[1])}
              />
            )}
          </>
        )}
      </TableWrapper>
    </>
  );
};
export default PlayerTableInfo;
