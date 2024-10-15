import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SelectStyle = styled.div`
  position: relative;
  width: 100%;
  min-width: 254px;
  padding: 10px 15px;
  border-radius: 8px;
  background-color: #ffffff;
  align-self: center;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.3);
  &::before {
    content: "⌵";
    position: absolute;
    top: 3px;
    right: 10px;
    color: #111;
    font-size: 20px;
  }
`;

const LabelStyle = styled.label`
  font-size: 13px;
`;

const SelectOptionsStyle = styled.ul<{ $isOptionsVisible: boolean }>`
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  overflow-y: scroll;
  height: 100px;
  max-height: ${(props) => (props.$isOptionsVisible ? "none" : "0")};
  padding: 0;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  color: #000;
`;

const OptionStyle = styled.li`
  font-size: 12px;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: #eceef2;
  }
  & > a {
    width: 100%;
    display: block;
    padding: 10px 15px;
  }
`;

const Select = () => {
  const [currentOption, setCurrentOption] = useState("Project-wins");
  const [$isOptionsVisible, setIsOptionsVisible] = useState(false);

  const onClickOptionHandler = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    setCurrentOption(target.getAttribute("value")!);
  }, []);

  const toggleOptionsVisibility = useCallback(() => {
    setIsOptionsVisible((prev) => !prev);
  }, []);

  const MEMBER_LIST = [
    {
      id: 1,
      name: "이승미(팀장)",
      link: "https://github.com/mya413",
    },
    {
      id: 2,
      name: "손지은(팀대표자)",
      link: "https://github.com/handje",
    },
    {
      id: 3,
      name: "박지은",
      link: "https://github.com/Jieuneenee",
    },
    {
      id: 4,
      name: "신동준",
      link: "https://github.com/sdj799",
    },
    {
      id: 5,
      name: "조보라",
      link: "https://github.com/snsqhfk",
    },
  ];

  return (
    <SelectStyle onClick={toggleOptionsVisibility}>
      <LabelStyle>{currentOption}</LabelStyle>
      <SelectOptionsStyle $isOptionsVisible={$isOptionsVisible}>
        {MEMBER_LIST.map((member) => (
          <OptionStyle key={member.id} value={member.name} onClick={onClickOptionHandler}>
            <Link to={member.link} target="_blank" onClick={(e) => e.stopPropagation()}>
              {member.name}
            </Link>
          </OptionStyle>
        ))}
      </SelectOptionsStyle>
    </SelectStyle>
  );
};
export default Select;
