import { BsFillBagFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addItems, deleteItems } from "../utils/cartSlice";

const Card = ({ img, title, star, reviews, prevPrice, newPrice, status }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addItems({img, title, reviews, prevPrice, newPrice, added: true }))
  }

  const handleDelete = () => {
    dispatch(deleteItems({img, title, reviews, prevPrice, newPrice, added: true }))
  }

  return (
    <>
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            <div className="bag">
            {status ? <AiFillDelete className="bag-icon" onClick={handleDelete} /> :  <BsFillBagFill className="bag-icon" onClick={handleClick} />}
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;
