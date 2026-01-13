import styled from "styled-components";

// 1. 이미지가 담긴 컨테이너 (회전 로직 담당)
const FlipImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: auto;
  aspect-ratio: 1;
  position: relative;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d; // 3D 자식 요소 유지

  // 버튼 클릭 상태(isFlipped)에 따라 회전
  transform: ${(props) =>
    props.isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"};
`;

// 2. 앞면과 뒷면 공통 스타일
const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden; // 뒷면 숨기기
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const FrontFace = styled(CardFace)``;

const BackFace = styled(CardFace)`
  transform: rotateY(
    180deg
  ); // 미리 180도 돌려놓아 뒤집혔을 때 정면으로 보이게 함
`;

// 3. 조작 버튼
const FlipButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;

  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
`;

export { BackFace, CardFace, FlipButton, FlipImageContainer, FrontFace };
