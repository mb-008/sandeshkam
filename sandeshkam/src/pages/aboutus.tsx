import Navbar from "../components/navbar";
import Footer from "../components/footer";

const AboutUsPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-6">
          Welcome to our news website hosted on the Solana blockchain! We are
          committed to providing accurate, timely, and unbiased news to our
          readers. Our mission is to empower individuals with information that
          enables them to make informed decisions and stay updated with the
          latest developments in various fields.
        </p>
        <p className="text-lg mb-6">
          As a decentralized news platform built on Solana, we prioritize
          transparency, integrity, and decentralization. Leveraging the
          blockchain technology, we ensure the authenticity and immutability of
          our news articles, fostering trust among our audience.
        </p>
        <p className="text-lg mb-6">
          Our team comprises experienced journalists, blockchain enthusiasts,
          and technology experts dedicated to delivering high-quality content
          that adheres to journalistic ethics and standards. We strive to cover
          a wide range of topics, including finance, technology, politics,
          health, and more, catering to diverse interests and preferences.
        </p>
        <p className="text-lg mb-6">
          Thank you for choosing us as your source of news and information. We
          value your trust and remain committed to serving you with the utmost
          integrity and professionalism.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUsPage;
