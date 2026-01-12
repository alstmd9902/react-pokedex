import { getRegExp } from "korean-regexp";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Card from "../components/Card";
import { selectPokemonByRegExp } from "../RTK/selector";

export default function Search() {
  const [searchParams] = useSearchParams();
  const param = searchParams.get("pokemon");
  const reg = getRegExp(param);
  const pokemon = useSelector(selectPokemonByRegExp(reg));

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] justify-center items-center gap-6">
      {pokemon.map((el) => (
        <Card key={el.id} pokemon={el} />
      ))}
    </div>
  );
}
