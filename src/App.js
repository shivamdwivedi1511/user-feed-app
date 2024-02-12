import { useEffect, useState } from "react";
import "./App.scss";
import Card from "./components/Card";
import { API_URL } from "./constants";
import Feed from "./components/Feed";

function App() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    let response = await fetch(API_URL);
    const data = await response.json();
    setData(data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!data.length) return null;

  return (
    <div className="app">
      <Feed data={data} />
    </div>
  );
}

export default App;
