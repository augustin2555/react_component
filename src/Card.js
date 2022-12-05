import { faCheck, faCoffee, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card({product,addToCart,cartList}) {
  
  return (
    <div className="col-lg-4 mb-3">
      <div class="card" style={{width: "18rem"}}>
  <img src={product.image} class="card-img-top" alt="Book"/>
  <div class="card-body">
    <h5 class="card-title">{product.title}</h5>
    <p class="card-text">Rs.{product.price}</p>
    <button disabled={cartList.some((item)=> item.id === product.id)} 
    class="btn btn-primary" onClick={()=>addToCart(product)}>Add to Cart </button>
  </div>
</div>
    </div>
  );
}
export default Card;



