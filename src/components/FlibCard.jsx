import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";
import { BackFace, FlipButton, FlipImageContainer, FrontFace } from "./Styled";

export default function FlipCard({ pokemon }) {
  const navigate = useNavigate();
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };
  const handleNavigate = () => navigate(`/detail/${pokemon.id}`);
  console.log({ pokemon });
  return (
    <div className="w-full h-full" onClick={handleNavigate}>
      <FavoriteButton pokemonId={pokemon.id} />
      <FlipImageContainer isFlipped={isFlipped}>
        <FrontFace>
          <img
            className="w-full max-w-[200px] "
            src={pokemon.front}
            alt="Front"
          />
        </FrontFace>
        <BackFace>
          <img
            className="w-full max-w-[200px] "
            src={pokemon.back}
            alt="Back"
          />
        </BackFace>
      </FlipImageContainer>
      <FlipButton onClick={handleFlip}>
        {isFlipped ? "앞면 보기" : "뒤집기"}
      </FlipButton>
    </div>
  );
}
//  <section
//    onClick={() => {
//      //절대경로로 변경 detail/${pokemon.id} 이것만 할시 검색하고 해당 카드 클릭시 상세페이지로 안넘어감
//      navigate(`/detail/${pokemon.id}`);
//    }}
//    className="flex-1 flex flex-col items-center border border-blue-200 p-4 rounded-xl section card"
//  >
//    <FavoriteButton pokemonId={pokemon.id} />
//    <img src={pokemon.front} alt={pokemon.name} className="w-[120px]" />
//    <div>{pokemon.name}</div>
//  </section>;
