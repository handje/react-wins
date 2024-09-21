import Title from "@components/Location/LocationTitle";
import { FilterHitRecentType } from "@customTypes/hitterRecent";
import { FilterHitTotalType } from "@customTypes/hitterTotal";
import { FilterPitRecentType } from "@customTypes/pitcherRecent";
import { FilterPitTotalType } from "@customTypes/pitcherTotal";
import { FilterHitterType, FilterHitterType2 } from "@customTypes/playerHitter";
import { FilterPitcherType, FilterPitcherType2 } from "@customTypes/playerPitcher";
import { TableMargin } from "@styles/PlayerTable.style";
import {
  filterHitRecentData,
  filterHitterData,
  filterHitterData2,
  filterHitTotalData,
  filterPitcherData,
  filterPitcherData2,
  filterPitRecentData,
  filterPitTotalData,
} from "@utils/fiterPlayerData";
import { hitRecentData, hitterData, hitTotalData, pitcherData, pitRecentData, pitTotalData } from "data/playerData";
import {
  hitRecentHeaders,
  hitterHeaders,
  hitterHeaders2,
  hitTotalHeaders,
  pitcherHeaders,
  pitcherHeaders2,
  pitRecentHeaders,
  pitTotalHeaders,
} from "data/playerHeaders";
import { useState } from "react";
import { usePlayerStore } from "store/actions/usePlayerStore";
import styled from "styled-components";
import PlayerChart from "./PlayerChart";
import PlayerTable from "./PlayerTable";

const DetailMenuWrapper = styled.div`
  height: 60px;
  background-color: "#fdfdfd";
  position: relative;
`;

const MenuLi = styled.li`
  float: left;
  width: 165px;
  height: 60px;
  box-sizing: border-box;
  text-align: center;
  ${({ className }) => (className === "active" ? "border-bottom: 3px solid #ec0a0b; color: #ec0a0b;" : "color: #999;")}
`;

const MenuA = styled.a`
  display: block;
  font-size: 16px;
  line-height: 60px;
`;

const TableWrapper = styled.div`
  margin-top: 15px;
  width: 1100px;
  border-top: 2px solid #d7161b;
`;

const PlayerDetail = ({ isPitcher }: { isPitcher: boolean }) => {
  const [menu, setMenu] = useState("league");
  const [title, setTitle] = useState("2024 시즌 정규리그 기록");

  const pitcherSeasonSummary = usePlayerStore((state) => state.pitcherSeasonSummary);
  const hitterSeasonSummary = usePlayerStore((state) => state.hitterSeasonSummary);

  if ((!isPitcher && !hitterSeasonSummary) || (isPitcher && !pitcherSeasonSummary)) return <></>;
  // 필터링된 데이터
  const filteredPitchers: FilterPitcherType[] = pitcherData.map(filterPitcherData);
  const filteredPitchers2: FilterPitcherType2[] = pitcherData.map(filterPitcherData2);
  const filteredHitters: FilterHitterType[] = hitterData.map(filterHitterData);
  const filteredHitters2: FilterHitterType2[] = hitterData.map(filterHitterData2);

  const filteredPitRecents: FilterPitRecentType[] = pitRecentData.map(filterPitRecentData);
  const filteredPitTotals: FilterPitTotalType[] = pitTotalData.map(filterPitTotalData);

  const filteredHitRecents: FilterHitRecentType[] = hitRecentData.map(filterHitRecentData);
  const filteredHitTotals: FilterHitTotalType[] = hitTotalData.map(filterHitTotalData);

  return (
    <>
      <DetailMenuWrapper>
        <ul>
          <MenuLi className={menu === "league" ? "active" : ""}>
            <MenuA
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setMenu("league");
                setTitle("2024 시즌 정규리그 기록");
              }}>
              정규리그 기록
            </MenuA>
          </MenuLi>
          <MenuLi className={menu === "recent" ? "active" : ""}>
            <MenuA
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setMenu("recent");
                setTitle("최근 5경기 기록");
              }}>
              최근 5경기
            </MenuA>
          </MenuLi>
          <MenuLi className={menu === "total" ? "active" : ""}>
            <MenuA
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setMenu("total");
                setTitle("통산 기록 (kt)");
              }}>
              통산 기록
            </MenuA>
          </MenuLi>
        </ul>
      </DetailMenuWrapper>
      <div style={{ marginTop: "40px" }}>
        <Title title={title} />
      </div>
      <TableWrapper>
        {menu === "league" &&
          (isPitcher ? (
            <>
              <PlayerTable<FilterPitcherType> resData={filteredPitchers} headers={pitcherHeaders} />
              <TableMargin />
              <PlayerTable<FilterPitcherType2> resData={filteredPitchers2} headers={pitcherHeaders2} />
              {pitcherSeasonSummary && (
                <PlayerChart
                  isPitcher={isPitcher}
                  data={[
                    Number(pitcherSeasonSummary.era) < 6 ? 6 - Number(pitcherSeasonSummary.era) : 0,
                    Number(pitcherSeasonSummary.whip) < 2 ? 2 - Number(pitcherSeasonSummary.whip) : 0,
                    pitcherSeasonSummary.kk,
                    Number(pitcherSeasonSummary.innDisplay),
                    Number(pitcherSeasonSummary.wra),
                    Number(pitcherSeasonSummary.kbb),
                  ]}
                />
              )}
            </>
          ) : (
            <>
              <PlayerTable<FilterHitterType> resData={filteredHitters} headers={hitterHeaders} />
              <TableMargin />
              <PlayerTable<FilterHitterType2> resData={filteredHitters2} headers={hitterHeaders2} />
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
          ))}
        {menu === "recent" &&
          (isPitcher ? (
            <PlayerTable<FilterPitRecentType> resData={filteredPitRecents} headers={pitRecentHeaders} />
          ) : (
            <PlayerTable<FilterHitRecentType> resData={filteredHitRecents} headers={hitRecentHeaders} />
          ))}
        {menu === "total" &&
          (isPitcher ? (
            <PlayerTable<FilterPitTotalType> resData={filteredPitTotals} headers={pitTotalHeaders} />
          ) : (
            <PlayerTable<FilterHitTotalType> resData={filteredHitTotals} headers={hitTotalHeaders} />
          ))}
      </TableWrapper>
    </>
  );
};
export default PlayerDetail;
