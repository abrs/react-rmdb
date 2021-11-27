import React, { useEffect, useState } from "react";

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
//Api
import Api from "../Api";
//image
import NoIMage from "../images/no-img.svg";
//hooks
import { useHomeFetch } from "../hooks/useHomeFetch";

const Home = () => {
  const { state, loading, error } = useHomeFetch();
  console.log("state", state);

  return <div>Home Page..</div>;
};

export default Home;
