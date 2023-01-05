import classes from "./CartButton.module.css";
import { uiActions } from "../../store/ui-slice";
import { useDispatch,useSelector } from "react-redux";


const CartButton = (props) => {

  const quantity = useSelector(state => state.cart.totalQuantity)


  const dispatch = useDispatch()

  const toggleCart = () =>{
    dispatch(uiActions.toggle())
  }

  return (
    <button onClick={toggleCart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
