import { useSelector } from "react-redux";
import Card from "../components/Card";

export default function Main() {
  const pokemonData = useSelector((state) => state.pokemon.data);

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-6">
      {pokemonData.map((el) => (
        <Card key={el.id} pokemon={el} />
      ))}
    </div>
  );
}
