import { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";
import Loading from "./Loading";

export const Card = memo(function Card({ pokemon }) {
  const [isImageLoading, setIsImageLoading] = useState(true);
  const navigate = useNavigate();
  return (
    <section
      onClick={() => {
        //절대경로로 변경 detail/${pokemon.id} 이것만 할시 검색하고 해당 카드 클릭시 상세페이지로 안넘어감
        navigate(`/detail/${pokemon.id}`);
      }}
      className="flex-1 flex flex-col items-center border border-blue-200 p-4 rounded-xl section card"
    >
      <FavoriteButton pokemonId={pokemon.id} />
      <Loading className={isImageLoading ? "block" : "hidden"} />
      <img
        onLoad={() => setIsImageLoading(false)}
        src={pokemon.front}
        alt={pokemon.name}
        className="w-[120px]"
      />

      <div>{pokemon.name}</div>
    </section>
  );
});
