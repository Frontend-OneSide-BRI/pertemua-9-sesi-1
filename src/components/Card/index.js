import React from "react";
import {} from "./styles.css";
import { setRupiah } from "../../helper/common";

const Card = ({ data }) => {
  return (
    <div>
      <div>ini Card</div>
      <p>{setRupiah(1000000)}</p>
      <p>{data.name}</p>
    </div>
  );
};

export default Card;
