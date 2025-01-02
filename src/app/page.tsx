

import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import Shopcard from "./components/Shopcard";
import Products from "./components/Products";
import Greensection from "./components/Greensection";
import Whitesection from "./components/Whitesection";
import Blog from "./components/Blog"
import Footer from "./components/Footer";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      <Shopcard />
      <Products />
      <Greensection />
      <Whitesection />
       <Blog />  
       <Footer />
      </div>
  );
};

export default Home;
