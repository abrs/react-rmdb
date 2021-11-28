import React, { useEffect, useState } from "react";

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
//Api
import Api from "../Api";
//components
import HeroImage from "./HeroImage";
//image
import NoIMage from "../images/no-img.svg";
//hooks
import { useHomeFetch } from "../hooks/useHomeFetch";

const Home = () => {
  const { state, loading, error } = useHomeFetch();
  console.log("state", state);

  return (
    <>
      {state.results[0] && (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      )}
    </>
  );
};

export default Home;
