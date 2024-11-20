import { useEffect, useState } from "react";
import useFetchData from "../hooks/useFetchData";

const Home = () => {
  const { data, loading, error } = useFetchData("/api/weddingInfo");

  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <h1>{data?.title}</h1>
      <p>{data?.countdown?.date}</p>
    </>
  );
};

export default Home;
