import React, { useState } from "react";

function BeerDetails(props) {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
    console.log(isClicked);
  };

  console.log(props);
  const { beer } = props;
  return (
    <div>
      <img className="beer_image" src={beer.image_url} />
      <p>{beer.name}</p>
      {isClicked ? (
        <button onClick={handleClick}>Unlike</button>
      ) : (
        <button onClick={handleClick}>Like</button>
      )}
    </div>
  );
}

export default BeerDetails;
