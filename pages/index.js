import useFetchData from "../hooks/useFetchData";
import Countdown from "@/components/Countdown";

const Home = () => {
  const { data, loading, error } = useFetchData("/api/weddingInfo");

  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <h1>{data?.title}</h1>
      <Countdown targetDate={data?.countdown?.date} />
      <div>
        <a href={data.link_form} target="_blank" rel="noreferrer">
          <button>Confirmar asistencia</button>
        </a>
      </div>
    </>
  );
};

export default Home;
