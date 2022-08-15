import React, { useState } from "react";

export default function AddressDetails(props) {
  const [moreInfo, setMoreInfo] = useState(false);
  const MoreDetails = () => {
    return (
      <div>
        <p>gender:{props.user.gender}</p>
        <p>DOB:{props.user.date}</p>
        <p>Age:{props.user.age}</p>
        <p>
          Location:{props.user.location.street.number}
          {props.user.location.street.name}
          {props.user.location.city}
          {props.user.location.state}
        </p>
      </div>
    );
  };
  
  return (
    <div>
    {moreInfo && <MoreDetails />}
    <button onClick={() => setMoreInfo(!moreInfo)}>
      {moreInfo ? "hide details" : "show details"}
    </button>
  </div>
);
}

