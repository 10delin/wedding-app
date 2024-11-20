import Header from "@/components/Header";
import useFetchData from "../hooks/useFetchData";
import Countdown from "@/components/Countdown";

const Home = () => {
  const { data, loading, error } = useFetchData("/api/weddingInfo");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Header data={data.header} />
      <div style={{marginTop:"225px" }}>
        HOLA
        </div>
      {/* <TitleStyles>{data?.title}</TitleStyles> */}
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
