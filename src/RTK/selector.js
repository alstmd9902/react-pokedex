import { createSelector } from "@reduxjs/toolkit";

export const selectPokemonById = (pokemonId) =>
  createSelector(
    (state) => state.pokemon.data,
    //state => state.pokemon.data 불런온 데이터를 (어떤이름으로) 받아올꺼냐
    //pokemon 으로 받아온다 작명은 자유
    (pokemon) => pokemon.find((el) => el.id === pokemonId)
  );

// 검색
export const selectPokemonByRegExp = (reg) =>
  createSelector(
    (state) => state.pokemon.data,
    (pokemon) => pokemon.filter((el) => el.name.match(reg))
  );

//찜
export const selectFavoritePokemons = createSelector(
  (state) => state.pokemon.data,
  (state) => state.favorite,
  (pokemon, favorite) => {
    return pokemon.filter((el) => favorite.includes(el.id));
  }
);
