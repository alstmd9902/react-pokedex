import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMultiplePokemonById } from "./RTK/thunk";
import Routers from "./shared/Router";

function App() {
  const dispatch = useDispatch();
  const pokemoneData = useSelector((state) => state.pokemon);
  console.log(pokemoneData);

  useEffect(() => {
    dispatch(fetchMultiplePokemonById(10));
  }, []);

  return (
    <>
      <Routers />
    </>
  );
}

export default App;
