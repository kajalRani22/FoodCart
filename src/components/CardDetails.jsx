import React, { useState, useEffect } from "react";
import "./cartStyle.css";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import toast, { Toaster } from 'react-hot-toast';
import {
  addToCart,
  removeToCart,
  removeSingleItems,
  emptycartItem,
} from "./redux/app/features/cartSlice";
const CardDetails = () => {
  const { carts } = useSelector((state) => state.allCart);
  const [totalprice, setPrice] = useState(0);
  const [totalquantity, setTotalQuantity] = useState(0);

  const dispatch = useDispatch();

  //add to cart
  const handleIncrement = (e) => {
    dispatch(addToCart(e));
  };
  //delete data
  const handleDeleteCart = (e) => {
    dispatch(removeToCart(e));
    toast.success("Item Remove From Cart")
  };
  //decrement data
  const handleDecrement = (e) => {
    dispatch(removeSingleItems(e));
  };
  //empty data
  const emptyData = (e) => {
    dispatch(emptycartItem(e));
    toast.success("Your Cart is Empty")
  };
  //count total price
  const total = () => {
    let totalprice = 0;
    carts.map((ele, index) => {
      totalprice = ele.price * ele.qnty + totalprice;
    });

    setPrice(totalprice);
  };
  // count total quantity
  const constquantity = () => {
    let totalquantity = 0;
    carts.map((ele, index) => {
      totalquantity = ele.qnty + totalquantity;
    });

    setTotalQuantity(totalquantity);
  };

  useEffect(() => {
    total();
  }, [total]);

  useEffect(() => {
    constquantity();
  }, [constquantity]);
  return (
    <div className="row justify-content-center m-0">
      <div className="col-md-8 mt-5 mb-5 cardsdeatails">
        <div className="card">
          <div className="card-header bg-dark p-3">
            <div className="card-header-flex">
              <h5 className="text-white m-0">
                Cart calculation{carts.length > 0 ? `(${carts.length})` : ""}
              </h5>
              {carts.length > 0 ? (
                <button
                  className="btn btn-danger mt-0 btn-sm"
                  type="button"
                  onClick={emptyData}
                >
                  <MdOutlineDeleteForever />
                  EmptyCart
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="card-body p-0">
            {carts.length === 0 ? (
              <table className="table cart-table mb-0">
                <tbody>
                  <tr>
                    <td colSpan={6}>
                      <div className="cart-empty">
                        <i className="fa fa-shopping-cart"></i>
                        <p>Your Cart Is Empty</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <table className="table cart-table mb-0 table-responsive-sm ">
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Qnty</th>
                    <th className="text-right">
                      <span id="amount" className="amount">
                        Total Amount
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {carts.map((data, index) => {
                    return (
                      <>
                        <tr>
                          <td>
                            <button
                              className="prdct-delete"
                              onClick={() => handleDeleteCart(data.id)}
                            >
                              <i className="fa fa-trash-alt mr-2"></i>
                            </button>
                          </td>
                          <td>
                            <div className="product-img">
                              <img src={data.imgdata} alt="" />
                            </div>
                          </td>
                          <td>
                            <div className="product-name">
                              <p>{data.dish}</p>{" "}
                            </div>
                          </td>
                          <td>{data.price}</td>
                          <td>
                            <div className="prdct-qty-container">
                              <button
                                className="prdct-qty-btn"
                                type="button"
                                onClick={
                                  data.qnty <= 1
                                    ? () => handleDeleteCart(data.id)
                                    : () => handleDecrement(data)
                                }
                              >
                                <i className="fa fa-minus"></i>
                              </button>
                              <input
                                type="text"
                                name=""
                                id=""
                                className="qty-input-box"
                                value={data.qnty}
                                disabled
                              />
                              <button
                                className="prdct-qty-btn"
                                type="button"
                                onClick={() => handleIncrement(data)}
                              >
                                <i className="fa fa-plus"></i>
                              </button>
                            </div>
                          </td>
                          <td className="text-right">
                            {data.qnty * data.price}
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>

                <tfoot>
                  <tr>
                    <th>&nbsp;</th>
                    <th colSpan={3}>&nbsp;</th>
                    <th>
                      Items in Cart<span className="ml-2 mr-2">:</span>
                      <span className="text-danger">{totalquantity}</span>
                    </th>
                    <th className="text-right">
                      Total Price<span className="ml-2 mr-2">:</span>
                      <span className="text-danger">{totalprice}</span>
                    </th>
                  </tr>
                </tfoot>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
