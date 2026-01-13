import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectPokemonById } from "../RTK/selector";
import FlipCard from "../components/FlibCard";

export default function Detail() {
  const { pokemonId } = useParams();
  const pokemon = useSelector(selectPokemonById(Number(pokemonId)));

  //포켓몬아이디별로 하나씩 가져오기 pokemonId 스트링값이니깐 넘버로 변경
  console.log(pokemon, "======>");
  return (
    <div className="max-w-[450px] mx-auto flex flex-col gap-3 justify-center items-center border border-blue-200 px-4 py-12 rounded-xl card">
      <FlipCard pokemon={pokemon} />
    </div>
  );
}
