import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [pathWays, setPathWays] = useState<string[]>([]);
  useEffect(() => {
    setPathWays(["Disc Buldge | Hernia"]);
  }, []);
  return (
    <div className="home-page">
      <h1>Path ways to heal yourself.</h1>
      {pathWays.map((path) => {
        return (
          <Link key={path} to="/disk-hernia">
            <button key={path}>{path}</button>
          </Link>
        );
      })}
    </div>
  );
};

export default HomePage;
