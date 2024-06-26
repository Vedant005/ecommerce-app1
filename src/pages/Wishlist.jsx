import Header from "../components/Header";
import { WishlistContext } from "../contexts/wishlistContext";

import { useContext } from "react";

export default function Wishlist() {
  const { wishList } = useContext(WishlistContext);

  return (
    <div>
      <div>
        <Header />
      </div>
      <h1> Items in wishList: {wishList.length} </h1>
      <div className="wishlist">
        <div className="wishList-info-card">
          {wishList.length === 0 ? (
            <div>
              <p>There is nothing in wishList</p>
            </div>
          ) : (
            <div className="wishList-main">
              {wishList.map((item) => {
                const { _id, title, price, ratings } = item;
                return (
                  <div className="wishList-product-main" key={_id}>
                    <div className="wishList-details-div">
                      <h1>{title}</h1>

                      <p>Rating ={ratings}</p>

                      <p>Price ={price}</p>
                      <div className="quantity">
                        {/* <button className="decrement"  >-</button>
                                   <div type="Number" className="quantityDiv">9</div>
                                 <button className="increment" >+</button> */}
                      </div>
                      <div>
                        <button className="wishListItemActionBtn">
                          {" "}
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
