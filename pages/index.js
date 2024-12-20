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

const Home = ({ images }) => {
  const { data, loading, error } = useFetchData("/api/weddingInfo");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Head>
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
        <Explore data={data?.explore} />
      </Layout>
    </>
  );
};

export { getStaticProps };

export default Home;
