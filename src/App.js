import logo from "./logo.svg";
import "./App.css";
import {useState} from "react";
import Card from "./Card";
import Cart from "./Cart";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { faAlignCenter } from "@fortawesome/free-solid-svg-icons";

function App() {
  const products = [
    {
      id: 1,
      title: "Adventure stories",
      image: "https://media.istockphoto.com/id/1216658448/photo/stack-of-colorful-books-isolated-on-white-background-collection-of-different-books-hardback.jpg?s=612x612&w=0&k=20&c=_8yq2H5pkScnt0-DXkud4EEJKi8P0RRzZpAUSrh5lvk=",
      price: 450,
    },

    {
      id: 2,
      title: "Crime Novels",
      image: "https://media.istockphoto.com/id/1216658448/photo/stack-of-colorful-books-isolated-on-white-background-collection-of-different-books-hardback.jpg?s=612x612&w=0&k=20&c=_8yq2H5pkScnt0-DXkud4EEJKi8P0RRzZpAUSrh5lvk=",
      price: 200,
    },

    {
      id: 3,
      title: "Fantasy Stories",
      image: "https://media.istockphoto.com/id/1216658448/photo/stack-of-colorful-books-isolated-on-white-background-collection-of-different-books-hardback.jpg?s=612x612&w=0&k=20&c=_8yq2H5pkScnt0-DXkud4EEJKi8P0RRzZpAUSrh5lvk=",
      price: 500,
    },

    {
      id: 4,
      title: "Historical Stories",
      image: "https://media.istockphoto.com/id/1216658448/photo/stack-of-colorful-books-isolated-on-white-background-collection-of-different-books-hardback.jpg?s=612x612&w=0&k=20&c=_8yq2H5pkScnt0-DXkud4EEJKi8P0RRzZpAUSrh5lvk=",
      price: 350,
    },

    {
      id: 5,
      title: "Thriller Novels",
      image: "https://media.istockphoto.com/id/1216658448/photo/stack-of-colorful-books-isolated-on-white-background-collection-of-different-books-hardback.jpg?s=612x612&w=0&k=20&c=_8yq2H5pkScnt0-DXkud4EEJKi8P0RRzZpAUSrh5lvk=",
      price: 390,
    },
  ];
  
  const [cartList, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  let addToCart = (product) => {
    setCart([...cartList,{...product, quantity : 1 }]);
    setTotal(total+product.price);
   };

   let removeCart=(cartItem)=>{
    let itemIndex=cartList.findIndex((item)=> cartItem.id===item.id)
    cartList.splice(itemIndex,1);
    setCart([...cartList]);
    setTotal(total-cartItem.price * cartItem.quantity);
   };

   const incQuantity =(cartItem)=>{
    let itemIndex=cartList.findIndex((item)=>cartItem.id===item.id);
    cartList[itemIndex].quantity=cartList[itemIndex].quantity+1;
    setCart([...cartList]);
    setTotal(total + cartItem.price);
   };

   const decQuantity = (cartItem)=>{
    let itemIndex=cartList.findIndex((item)=>cartItem.id===item.id);
    cartList[itemIndex].quantity=cartList[itemIndex].quantity-1;
    setCart([...cartList]);
    setTotal(total-cartItem.price);
   };

  return (
    
    <div className="container">
      <div className="row mt-3 ">
        <div><h1 style={{textAlign:"center",backgroundColor:"lightcyan"}}>Book Market</h1></div>
        <div className="col-lg-9">
          <div className="row ">
          
            {products.map((product) => {
              return <Card cartList={cartList} product={product} addToCart={addToCart} />;
              
            })}
          </div>
        </div>
        <div className="col-lg-3">
          <h4>Cart</h4>
          <Cart cartList={cartList} removeCart={removeCart} incQuantity={incQuantity} decQuantity={decQuantity}/>
          <h4>Total:{total}</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
