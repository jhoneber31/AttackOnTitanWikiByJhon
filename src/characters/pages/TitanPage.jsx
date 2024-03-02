import { Navigate, useParams } from "react-router-dom"
import { getTitanByName } from "../helpers/getTitanByName";
import { useEffect, useState } from "react";
import { getPortadorByTitan } from "../helpers/getPortadorByTitan";
import { getExCurrentsByName } from "../helpers/getExCurrentsByName";

export const TitanPage = () => {
  
  const [currentInheritor, setCurrentInheritor] = useState();
  const [exCurrents, setExCurrents] = useState([]);

  const {name} = useParams();

  const titan = getTitanByName(name);

  useEffect(() => {
    const getCurrent = async() => {
      if( !titan) {
        return
      }
      const cur = await getPortadorByTitan(titan.current_inheritor);
      setCurrentInheritor(cur)
    };

    const getExCurrents = async() => {
      if( !titan) {
        return
      }
      const exCur = await getExCurrentsByName(titan.former_inheritors);
      setExCurrents(exCur);
    }
    getExCurrents();
    getCurrent();
  },[titan])

  if (!titan) { 
    return <p>Loading ....</p>
  }
  if (titan.notFound) { 
    return <Navigate to='/' />;
  }
  const formattedImgUrl = titan.img.substring(0, titan.img.indexOf('.png') + 4);

  return (
    <div className="container d-flex justify-content-center">
      <div className="card mb-3 mt-3" style={{maxWidth: "540px"}}>
        <div className="row g-0">
          <div className="col-md-12">
            <div className="card-header" style={{backgroundColor: "#4F4341"}}>
              <h1 className="text-center text-white">{titan.name}</h1>
            </div>
            <img src={formattedImgUrl} className="img-fluid w-100" alt={titan.name}/>
          </div>
          <div className="col-md-12">
            <div className="card-header rounded-0" style={{backgroundColor: "#4F4341"}}>
              <h3 className="text-center text-white">Information</h3>
            </div>
            <div className="card-body d-flex justify-content-between border-top">
              <h5 className="card-text">Height</h5>
              <p className="card-text"><small className="text-body-secondary">{titan.height}</small></p>
            </div>
            <div className="card-body d-flex justify-content-between border-top">
              <h5 className="card-text">Abilities</h5>
              <ul className="text-body-secondary">
                {
                  titan.abilities.map(abilities => (
                    <li key={abilities} className="">
                      {abilities}
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className="card-body d-flex justify-content-between border-top">
              <h5 className="card-text">Allegiance</h5>
              <p className="card-text"><small className="text-body-secondary">{titan.allegiance}</small></p>
            </div>
            <div className="card-body d-flex justify-content-between border-top">
              <h5 className="card-text">Current inheritor</h5>
              <p className="card-text"><small className="text-body-secondary">{currentInheritor}</small></p>
            </div>
            {
              exCurrents.length !==0 && 
              <div className="card-body d-flex justify-content-between border-top">
                <h5 className="card-text">Current Former</h5>
                <ul className="text-body-secondary">
                  {
                     exCurrents.map( exCurrents => (
                      <li key={exCurrents} className="">
                        {exCurrents}
                      </li>
                     ))
                  }
                </ul>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}
