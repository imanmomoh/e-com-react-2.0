const Productss = (props) => {
    return (
               <div className="grid-container">
                   
                   <div className="grid-item">

                   <img src={props.image} alt={props.name} />
                         <h4>{props.name}</h4>
                <div className="rating">
               <i className="fa fa-star"></i>
             <i className="fa fa-star"></i>
               <i className="fa fa-star"></i>
               <i className="fa fa-star"></i>
                <i className="fa fa-star-half-o"></i>
            </div>
            <p><span className="dollar"> $ </span>{props.price}  </p>
            <button className="mycart">
                <span>Add to Cart</span>
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </button>
                   </div>
                   
                   
              </div>
 )
}
export default Productss;