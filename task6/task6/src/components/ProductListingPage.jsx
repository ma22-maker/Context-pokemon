import { useState, useEffect } from "react";
import ProductListCard from "./ProductListCard";
import { Useanime } from "./UsingContext";

function ProductListingPage() {
  let isempty = false;

  const{allpokemon, getData} = Useanime();

  useEffect(() => {getData()}, []);

 

  if (!allpokemon) {
    isempty = true;
    return <div>Loading...</div>;
  }

  // console.log(allpokemon);

  return (
    <>
      {isempty ? (
        <h1>no listing found</h1>
      ) : (
        <div className="w-full gap-2 grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 p-8">
          {allpokemon.map((item, index) => (
            <ProductListCard  anime={item} key={index}/>
          ))}
        </div>
      )}
    </>
  );
}

export default ProductListingPage;
