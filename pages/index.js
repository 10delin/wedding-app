import useFetchData from "@/hooks/useFetchData";

import GlobalStyles from "@/styles/global";
import Layout from "@/components/Layout";

import BlockImages from "@/components/BlockImages";
import HistoryWedding from "@/components/HistoryWedding";
import Head from "next/head"; // Importa el componente Head
import Carousel from "@/components/Carousel";
import { getStaticProps } from "@/tools/images.js";
import Rings from "@/components/Rings";
import Main from "@/components/Main";
import Explore from "@/components/Explore";

import { ClipLoader } from "react-spinners";
import FAQAccordion from "@/components/FaqAccordion";

const Home = ({ images }) => {
  const { data, loading, error } = useFetchData("/api/weddingInfo");

  if (loading)
    return (
      <div style={LoadingContainer}>
        <ClipLoader
          color="#ac7d23"
          loading={loading}
          cssOverride={override}
          size={75}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );

  if (error) return <p>{error}</p>;

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caudex:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyles />
      <Layout data={data}>
        <Main data={data} />
        <Rings data={data?.rings} />
        <BlockImages data={data?.block_images} />
        <HistoryWedding data={data?.history} />
        <Carousel images={images} />
        <FAQAccordion data={data?.faq} />
        <Explore data={data?.explore} />
      </Layout>
    </>
  );
};

export { getStaticProps };

export default Home;

const override = {
  display: "block",
  margin: "0 auto",
  borderRadius: "50%",
  borderWidth: "5px",
};

const LoadingContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  zIndex: 1000,
  boxSizing: "border-box",
};
