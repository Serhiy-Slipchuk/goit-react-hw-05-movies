import { Outlet } from "react-router-dom";

const MovieInfo = function () {
  return (
    <>
      <div>Movie Info</div>
      <Outlet />
    </>
  );
};

export default MovieInfo;
