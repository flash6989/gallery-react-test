import styles from "./Cart.module.scss";

const Cart = ({
  imageUrl,
  name,
  created,
  locationId,
  authorId,
  allAuthors,
  locations,
}) => {
  let authorName = allAuthors.find((author) => author.id === authorId);
  return (
    <div className={styles.carts__items}>
      <img src={`https://test-front.framework.team/${imageUrl}`} alt="" />

      <div className={styles.carts__info}>
        <h2>{name}</h2>
        <p>
          <b>Author:</b> {authorName ? authorName.name : ""}
        </p>
        <p>
          <b>Created:</b> {created}
        </p>
        <p>
          <b>Location: </b>
          {locations.find((location) => location.id === locationId).location}
        </p>
      </div>
    </div>
  );
};

export default Cart;
