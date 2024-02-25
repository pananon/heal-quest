import { useEffect, useState } from "react";

const HomePage = () => {
  const [pathWays, setPathWays] = useState<string[]>([]);
  useEffect(() => {
    setPathWays(["Disc Buldge | Hernia"]);
  }, []);
  return (
    <div className="home-page">
      <h1>Path ways to heal yourself.</h1>
      {pathWays.map((path) => {
        return <button key={path}>{path}</button>;
      })}
    </div>
  );
};

export default HomePage;
