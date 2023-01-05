import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_DATA = [
  {
    id: "b1",
    title: "My first written Book",
    price: 18.99,
    description: "Perfect book for couples",
  },
  {
    id: "b2",
    title: "My first written Book",
    price: 18.99,
    description: "Perfect book for couples",
  },
  {
    id: "b3",
    title: "My first written Book",
    price: 18.99,
    description: "Perfect book for couples",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_DATA.map((item) => {
          return(
            <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
          )
        })}
      </ul>
    </section>
  );
};

export default Products;
