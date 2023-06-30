import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({
  id,
  name,
  species,
  onClose,
  gender,
  status,
  origin,
  image,
}) {
  return (
    <div className={styles.div}>
      <div>
        <button className={styles.btn} onClick={() => onClose(id)}>
          X
        </button>
        <h2 className={styles.name}>
          <Link className={styles.link} to={`/detail/${id}`}>
            {name}
          </Link>
        </h2>
        <img className={styles.image} src={image} alt="" />
      </div>
      <div className={styles.data}>
        <h2>{species}</h2>
        <h2>{gender}</h2>
        {/* <h2>{status}</h2>
        <h2>{origin}</h2> */}
      </div>
    </div>
  );
}
