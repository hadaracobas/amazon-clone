import React from "react";
import "./index.css";
import Product from "../../components/Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
      />
      {/* Product id, title, price, rating, image */}
      <div className="home-row">
        <Product
          id="12312341"
          title="AstroAI 2 Pack Digital Tire Pressure Gauge 150 PSI 4 Settings for Car Truck Bicycle with Backlit LCD and Non-Slip Grip, Silver"
          price={16.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71RLr5HnW8L._AC_SX522_PIbundle-2,TopRight,0,0_SH20_.jpg"
        />
        <Product
          id="12312342"
          title="FLY HAWK Mens Dress Shirts, Slim Fit Long Sleeves Elastic Bamboo Fiber Button Down Shirts"
          price={22.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61qLspzGaYL._AC_UY500_.jpg"
        />
      </div>

      <div className="home-row">
        <Product
          id="12312343"
          title="Crayola Colored Pencils, Long, 36-Pack, Multicolor"
          price={5.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81Vje4dOoKL._AC_SY679_.jpg"
        />

        <Product
          id="12312344"
          title="AmazonBasics Small Digital Alarm Clock with Nightlight and Battery Backup, LED Display"
          price={9.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/61j17FjPhtL._AC_SX522_.jpg"
        />
        <Product
          id="12312345"
          title="Oculus Rift S PC-Powered VR Gaming Headset"
          price={399.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71URNvzoWqL._SX522_.jpg"
        />
      </div>
      <div className="home-row">
        <Product
          id="12312346"
          title="Blendtec Total Classic Original Blender - WildSide+ Jar (90 oz) - Professional-Grade Power - 6 Pre-programmed Cycles - 10-speeds - Black (Renewed)"
          price={275.75}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71zrQU%2ByLvL._AC_SX522_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
