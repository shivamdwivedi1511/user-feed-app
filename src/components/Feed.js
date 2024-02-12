import React from "react";
import Card from "./Card";

export default function Feed({ data }) {
  const feedList = () => {
    return data.map((item) => (
      <li key={item.email}>
        <Card item={item} />
      </li>
    ));
  };
  return (
    <div className="container">
      <h1 className="heading">My Users Feeds</h1>
      <ul className="feed-list">{feedList()}</ul>
    </div>
  );
}
