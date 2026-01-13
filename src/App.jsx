import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMultiplePokemonById } from "./RTK/thunk";
import Routers from "./shared/Router";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMultiplePokemonById(10));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Routers />;
}

export default App;
