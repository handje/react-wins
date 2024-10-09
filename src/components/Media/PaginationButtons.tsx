import { useEffect, useState } from "react";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { useMediaStore } from "store/actions/useMediaStore";
import styled from "styled-components";

const PagenationWrapper = styled.nav`
  width: 100%;
  margin-top: 54px;
  text-align: center;
`;

const PageButton = styled.button<{ $isSelected?: boolean }>`
  width: 26px;
  height: 26px;
  background-color: ${({ $isSelected }) => ($isSelected ? "#e60013" : "#fff")};
  color: ${({ $isSelected }) => ($isSelected ? "#fff" : "#999")};
  border: 1px solid #c3c3c3;
  border-radius: 2px;
  margin: 0 2px;
  padding: 0px;
  font-size: 12px;
  line-height: 26px;
  vertical-align: middle;
`;

const PaginationButtons = () => {
  const [pageGroup, setPageGroup] = useState(0);
  const PAGE_COUNT = 10;
  const MAX_PAGE = 116;
  const maxGroup = Math.floor(MAX_PAGE / PAGE_COUNT);
  const pageNum = useMediaStore((state) => state.pageNum);
  const setPageNum = useMediaStore((state) => state.setPageNum);

  useEffect(() => {
    setPageGroup(Math.floor(Number(pageNum) / PAGE_COUNT));
  }, []);

  const handlePageChange = (pageNumber: number) => {
    setPageNum(pageNumber);
  };
  const handlePageGroupPrev = () => {
    if (pageGroup === 0) return;
    setPageGroup((prev) => prev - 1);
    setPageNum(pageNum - PAGE_COUNT);
  };
  const handlePageGroupNext = () => {
    if (pageGroup === maxGroup) return;
    setPageGroup((prev) => prev + 1);
    setPageNum(pageNum + PAGE_COUNT);
  };
  const handlePageFirst = () => {
    setPageGroup(0);
    setPageNum(1);
  };
  const handlePageLast = () => {
    setPageGroup(maxGroup);
    setPageNum(MAX_PAGE);
  };

  return (
    <PagenationWrapper>
      {pageNum !== 1 && (
        <PageButton onClick={handlePageFirst}>
          <MdKeyboardDoubleArrowLeft>처음</MdKeyboardDoubleArrowLeft>
        </PageButton>
      )}
      {pageGroup !== 0 && (
        <PageButton onClick={handlePageGroupPrev}>
          <MdKeyboardArrowLeft>이전</MdKeyboardArrowLeft>
        </PageButton>
      )}
      {Array.from({ length: 10 }, (_, index) => {
        const pageNumber = pageGroup * PAGE_COUNT + index + 1;
        if (pageNumber <= MAX_PAGE) {
          return (
            <PageButton key={index} $isSelected={pageNumber === pageNum} onClick={() => handlePageChange(pageNumber)}>
              {pageNumber}
            </PageButton>
          );
        }
      })}
      {pageGroup !== maxGroup && (
        <PageButton onClick={handlePageGroupNext}>
          <MdKeyboardArrowRight>다음</MdKeyboardArrowRight>
        </PageButton>
      )}
      {pageNum !== MAX_PAGE && (
        <PageButton onClick={handlePageLast}>
          <MdKeyboardDoubleArrowRight>마지막</MdKeyboardDoubleArrowRight>
        </PageButton>
      )}
    </PagenationWrapper>
  );
};
export default PaginationButtons;
