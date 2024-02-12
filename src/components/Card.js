import React from "react";

export default function Card({ item }) {
  const nameString = ({ first, last, title }) => {
    return `${title} ${first} ${last} `;
  };

  const address = ({ street, city, state, country, postcode }) => {
    return [street.name, city, state, country, postcode].join(", ");
  };

  return (
    <div className="card">
      <div className="profile-section">
        <img src={item?.picture?.medium} alt={`user-${item.login.username}`} />
        <div className="info">
          <p className="name">{nameString(item.name)}</p>
          <p className="email">{item.email}</p>
        </div>
        <p className={`gender ${item.gender}`}>{item.gender}</p>
      </div>
      <hr />
      <div className="des-section">
        <div className="generic-info">
          <p>Username : {item.login.username}</p>
        </div>
        <div className="generic-info">
          <p>Contact : {item.cell}</p> <p> Age : {item.dob.age}</p>
        </div>
        <div className="address-info">
          <p className="address">Address : {address(item.location)}</p>
        </div>
      </div>
    </div>
  );
}
