import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carddata from "./Carddata";
import { addToCart } from "./redux/app/features/cartSlice";
import { useDispatch } from "react-redux";
import toast, { Toaster } from 'react-hot-toast';
import "./style.css";

const Home = () => {
  const [cartData, setCartData] = useState(Carddata);
  const dispatch = useDispatch();

  //add to cart

  const send= (e)=>{
    
    dispatch(addToCart(e))
    toast.success("Item added In Your Cart")
  }
  return (
    <>
      <section className="item_section mt-4 container">
        <h2 className="px-4" style={{ fontweight: 400, textAlign: "center" }}>
          Restaurants in ghaziabad Open now
        </h2>
        <div className="row mt-2 d-flex justify-content-around align-items-center">
          {cartData.map((element, index) => {
            return (
              <>
                <Card
                  style={{ width: "22rem", border: "none" }}
                  className="hove mb-4"
                >
                  <Card.Img
                    variant="top"
                    className="cd"
                    src={element.imgdata}
                  />
                  <div className="card_body">
                    <div className="upper_data d-flex justify-content-between align-items-center">
                      <h4 className="mt-2">{element.dish}</h4>
                      <span>{element.rating}&nbsp;★ </span>
                    </div>
                    <div className="lower_data d-flex justify-content-between ">
                      <h5>North Indian, Biryani, Mughlai</h5>
                      <span>{element.price}</span>
                    </div>
                    <div className="extra"></div>
                    <div className="last_data d-flex justify-content-center align-items-center">
                     
                      <Button
                        style={{
                          width: "150px",
                          background: "#FFAA1D",
                          border: "none",
                        }}
                        variant="outline-light"
                        className="mt-2 mb-2"
                        onClick={()=>send(element)}
                      >
                        Add To Cart
                      </Button>
                     
                    </div>
                  </div>
                </Card>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
