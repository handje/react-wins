import { EtcGames } from "@customTypes/game/boxScore";
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { useGameStore } from "store/actions/useGameStore";
import styled from "styled-components";

const TableWrapper = styled.table`
  margin-top: 10px;
  border: 1px solid #cfcfcf;
  border-top: 2px solid #222;
  width: 100%;
`;

const HowTh = styled.th`
  background-color: #f6f6f6;
  vertical-align: middle;
  font-size: 14px;
  text-align: left;
  box-sizing: border-box;
  border-bottom: 1px solid #cfcfcf;
  border-right: 1px solid #cfcfcf;
  padding: 10px 15px;
  width: 135px;
`;

const ResultTd = styled.td`
  font-size: 14px;
  text-align: left;
  border-bottom: 1px solid #cfcfcf;
  padding: 10px 15px;
`;

const MainTable = () => {
  const columnHelper = createColumnHelper<EtcGames>();

  const columns = [
    columnHelper.accessor((row) => row.how, {
      id: "how",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor((row) => row.result, {
      id: "result",
      cell: (info) => <i>{info.getValue()}</i>,
    }),
  ];

  const ectGames = useGameStore((state) => state.etcGames);

  const [data, _setData] = useState(() => (ectGames ? [...ectGames] : []));

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  useEffect(() => {
    ectGames && _setData(() => [...ectGames]);
  }, [ectGames]);

  return (
    <div className="p-2">
      <TableWrapper>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row
                .getVisibleCells()
                .map((cell, index) =>
                  index === 0 ? (
                    <HowTh key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</HowTh>
                  ) : (
                    <ResultTd key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</ResultTd>
                  )
                )}
            </tr>
          ))}
        </tbody>
      </TableWrapper>
    </div>
  );
};
export default MainTable;
