import styles from "./Cart.module.css";

function Cart({
  imageUrl,
  name,
  created,
  locationId,
  authorId,
  allAuthors,
  locations,
}) {
  let authorName = allAuthors.find((author) => author.id === authorId);
  console.log(authorName, "authorName");
  return (
    <div className={styles.carts__items}>
      <img src={`https://test-front.framework.team/${imageUrl}`} alt="" />

      <div className={styles.carts__info}>
        <h2>{name}</h2>
        <p>
          <b>Author: {authorName ? authorName.name : ""} </b>
        </p>
        <p>
          <b>Created: {created} </b>
        </p>
        <p>
          <b>
            Location:{" "}
            {locations.find((location) => location.id === locationId).location}
          </b>
        </p>
      </div>
    </div>
  );
}

export default Cart;
