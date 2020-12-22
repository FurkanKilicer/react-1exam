import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Cards from "./components/card";
import ENTRY_LIST from "./data/data";
import Footer from "./components/footer";

export default function App() {
  const Cardexp = ENTRY_LIST.map((item, index) => (
    <Cards imgUrl={item.imgUrl} body={item.body} like={item.like} id={index} />
  ));
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">{Cardexp}</div>
      </div>
      <Footer />
    </div>
  );
}
