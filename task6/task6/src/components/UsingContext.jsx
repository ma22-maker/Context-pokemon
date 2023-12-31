import { useState,useEffect } from "react";
import { useContext, createContext } from "react";
//creating the context
const animeContext = createContext();

// eslint-disable-next-line react/prop-types
export function AnimeProvider({ children }) 
{  
  const [allpokemon, setAllpokemon] = useState([]);

  const GetPokemon = async (animeName) => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${animeName}`
      );
      const data = await response.json();
      //setDetails(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  const getData = async () => {
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const data = await res.json();
      data.results.forEach(async (anime) => {
        // console.log(anime);
        // console.log(anime.name);
        const res = await GetPokemon(anime.name);
        // console.log(res);
        setAllpokemon((currentList) => [...currentList, res]);
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(()=>{getData()},[]);
  return (
    <animeContext.Provider
      value={{ allpokemon}}
    >
      {children}
    </animeContext.Provider>
  );
}
export function Useanime() {
  return useContext(animeContext);
}
