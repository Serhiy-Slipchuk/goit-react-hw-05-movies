import { useEffect } from "react";
import { getMovies } from "functions/clientAPI";

const Home = function () {
  useEffect(() => {
    getMovies();
  }, []);

  return <div>HomePage</div>;
};

export default Home;
