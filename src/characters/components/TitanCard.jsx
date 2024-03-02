import React from 'react'
import { Link } from 'react-router-dom';

export const TitanCard = ({img = '', name}) => {
  const formattedImgUrl = img.substring(0, img.indexOf('.png') + 4);

  const isImageLoaded = formattedImgUrl !== '';

  if (!isImageLoaded) {
    return null;
  }
  return (
    <div className="col d-flex justify-content-center mb-3">
      <div className="card" style={{ width: '18rem' }}>
        <img src={formattedImgUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
         <h5 className="card-title text-center">
          <Link to={`/titans/${name}`} className="link-offset-2 link-underline link-underline-opacity-0 text-black">
            {name}
          </Link>     
        </h5>
        </div>
      </div>
    </div>
  )
}
