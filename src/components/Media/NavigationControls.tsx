import { useNavigate, useParams } from "react-router-dom";
import { useMediaStore } from "store/actions/useMediaStore";
import styled from "styled-components";

const NavigationWrapper = styled.nav`
  width: 100%;
  padding: 15px 20px;
  .next {
    margin-left: 10px;
  }
  .list {
    width: 100px;
    float: right;
  }
`;

const NavigationBtn = styled.button`
  width: 85px;
  height: 30px;
  padding: 0px;
  text-align: center;
  vertical-align: middle;
  font-size: 15px;
  color: #fff;
  background-color: #282828;
  border-radius: 10%;
`;

const NavigationControls = () => {
  const { mediaType } = useParams();
  const artcPrevSeq = useMediaStore((state) => state.artcPrevSeq);
  const artcNextSeq = useMediaStore((state) => state.artcNextSeq);
  const navigate = useNavigate();

  return (
    <NavigationWrapper>
      <NavigationBtn
        disabled={!artcPrevSeq && artcPrevSeq === 0}
        className="prev"
        onClick={() => {
          navigate(`../${mediaType}/${artcPrevSeq}`);
        }}>
        이전
      </NavigationBtn>
      <NavigationBtn
        disabled={!artcNextSeq && artcNextSeq === 0}
        className="next"
        onClick={() => {
          navigate(`../${mediaType}/${artcNextSeq}`);
        }}>
        다음
      </NavigationBtn>
      <NavigationBtn className="list" onClick={() => navigate(`../${mediaType}`)}>
        목록보기
      </NavigationBtn>
    </NavigationWrapper>
  );
};
export default NavigationControls;
