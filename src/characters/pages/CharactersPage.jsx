import { Navigate,useParams } from "react-router-dom"
import { getCharacterByName } from "../helpers/getCharacterByName";
import { getEpisodeByName } from "../helpers/getEpisodeByName";
import { useEffect, useState } from "react";

export const CharactersPage = () => {

  const [episode, setEpisode] = useState();

  const {name} = useParams();

  const character = getCharacterByName(name);

  useEffect(() => {
    const getEpisode = async() => {

      if( !character) {
        return
      }
      const base = character.episodes[0];
      const episodeNumber = await getEpisodeByName(base);
      setEpisode(episodeNumber)
    }
    getEpisode()
  },[character])

  if (!character) { 
    return <p>Loading ....</p>
  }
  if (character.notFound) { 
    return <Navigate to='/' />;
  }


  const formattedImgUrl = character.img.substring(0, character.img.indexOf('.png') + 4);


  return (
    <div className="container d-flex justify-content-center">
      <div className="card mb-3 mt-3" style={{maxWidth: "540px"}}>
        <div className="row g-0">
          <div className="col-md-12">
            <div className="card-header" style={{backgroundColor: "#4F4341"}}>
              <h1 className="text-center text-white">{character.name}</h1>         
            </div>
            <img src={formattedImgUrl} className="img-fluid w-100" alt={character.name}/>  
          </div>
          <div className="col-md-12">
            <div className={`card-body ${character.alias.length !== 0 ? 'd-flex justify-content-between' : 'd-none' }`}>
              <h5 className="card-text">Alias</h5>
              <ul className="text-body-secondary">
                {
                  character.alias.map(char => (
                    <li key={char}>
                      {char}
                    </li>
                  ))
                }
              </ul>
            </div> 
            <div className="card-header" style={{backgroundColor: "#4F4341"}}>
              <h3 className="text-center text-white">Debut</h3>         
            </div>
            <div className="card-body d-flex justify-content-between">
              <h5 className="card-text">Anime</h5>
              <p className="card-text"><small className="text-body-secondary">{episode}</small></p>
            </div>
            <div className="card-header" style={{backgroundColor: "#4F4341"}}>
              <h3 className="text-center text-white">Information</h3>         
            </div>
            <div className="card-body d-flex justify-content-between">
              <h5 className="card-text">Age</h5>
              <p className="card-text"><small className="text-body-secondary">{character.age}</small></p>
            </div>
            {
              character.relatives.length !==0 && 
              <div className="card-body d-flex justify-content-between border-top">
                <h5 className="card-text">Family</h5>
                <p className="card-text"><small className="text-body-secondary">{character.relatives[0].family}</small></p>
              </div>
            }
            <div className="card-body d-flex justify-content-between border-top">
              <h5 className="card-text">Gender</h5>
              <p className="card-text">
                <i className={`bi bi-gender-${character.gender === 'Male' ? 'male' : 'female'}`}></i>
                <small className="text-body-secondary ms-2">
                  {character.gender}
                </small>
              </p>
            </div>
            <div className="card-body d-flex justify-content-between border-top">
              <h5 className="card-text">Status</h5>
              <p className="card-text"><small className="text-body-secondary">{character.status}</small></p>
            </div>
            <div className="card-body d-flex justify-content-between border-top">
              <h5 className="card-text">Species</h5>
              <ul className="text-body-secondary list-unstyled">
                {
                  character.species.map(char => (
                    <li key={char} className="text-end">
                      {char}
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className="card-body d-flex justify-content-between border-top">
              <h5 className="card-text">Occupation</h5>
              <p className="card-text"><small className="text-body-secondary">{character.occupation}</small></p>
            </div>
            {
              character.groups.length !== 0 &&
              <div className="card-body d-flex justify-content-between border-top">
                <h5 className="card-text">Groups</h5>
                <p className="card-text"><small className="text-body-secondary">{character.groups[0].name}</small></p>
              </div>
            }
            {
              character.roles.length !== 0 &&
              <div className="card-body d-flex justify-content-between border-top">
                <h5 className="card-text">Roles</h5>
                <ul className="text-body-secondary list-unstyled">
                {
                  character.roles.map(char => (
                    <li key={char} className="text-end">
                      {char}
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
