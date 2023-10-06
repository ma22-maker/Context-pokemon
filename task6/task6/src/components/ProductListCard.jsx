import { Link } from "react-router-dom";
import { Card, CardBody,Image } from "@nextui-org/react";

function ProductListCard({anime}) {
  return (
    <>
            <Link to={`/about/${anime.name}`} >
              <Card shadow="sm">
                <CardBody className="flex flex-row p-0 justify-between animes-center ">
                  <Image
                    shadow="lg"
                    radius="lg"
                    width="100%"
                    alt={anime.name}
                    className="w-[200px] object-contain h-[200px]"
                    src={anime.sprites.other.dream_world.front_default}
                  />              
                  <div>
                  <h4 className="font-bold text-large mr-4">{anime.name}</h4>
                  <div  className="flex flex-col ">
                    { anime.types.map((anime,index)=>
                      <ul key={index}>{anime.type.name}</ul>
                    )}
                  </div> 
                  </div>
                </CardBody>
              </Card>
            </Link>
    </>
  );
}

export default ProductListCard;
