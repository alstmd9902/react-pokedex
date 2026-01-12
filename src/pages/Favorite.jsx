import { useSelector } from "react-redux";
import { selectFavoritePokemons } from "../RTK/selector";
import Card from "../components/Card";

export default function Favorite() {
  const pokemon = useSelector(selectFavoritePokemons);
  return (
    <div className="max-w-3xl mx-auto grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] justify-center items-center gap-6">
      {pokemon.map((el) => (
        <Card key={el.id} pokemon={el} />
      ))}
    </div>
  );
}
