import Hero from "../components/hero";
import Newscard from "../components/newscard";
import Layout from "../components/layout";

const Home = () => {
  // Sample news data
  const news = {
    title: "Sample News Title",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://via.placeholder.com/300", // Sample image URL
    category: "General", // Sample category
  };

  return (
    <Layout>
      <Hero />
      <div className="pt-8 flex justify-center">
        <Newscard news={news} />
      </div>
    </Layout>
  );
};

export default Home;
