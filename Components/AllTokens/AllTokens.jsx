import React from "react";
import Image from "next/image";
//INTERNAL IMPORT
import Style from "./AllTokens.module.css";
import images from "../../assets";

const AllTokens = ({ allTokenList }) => {
  return (
    <div className={Style.AllTokens}>
      <div className={Style.AllTokens_box}>
        <div className={Style.AllTokens_box_header}>
          <p className={Style.hide}>1</p>
          <p>FIL</p>
          <p>$5.25</p>
          <p className={Style.hide}>$18,67,827.00</p>
          <p className={Style.hide}>
            <small>
              {/* <Image src={images.arrowPrice} alt="img" width={15} height={15} /> */}
            </small>{" "}
            378,906,455 FIL
            <small>
              {/* <Image src={images.question} alt="img" width={15} height={15} /> */}
            </small>
          </p>
        </div>

        {allTokenList.map((el, i) => (
          <div className={Style.AllTokens_box_list}>
            <p className={Style.hide}>{i + 1}</p>
            <p className={Style.AllTokens_box_list_para}>
              <small>
                <Image src={images.uniswap} alt="logo" width={25} height={25} />
              </small>
              <small>{el.name}</small>
              <small>{el.symbol}</small>
            </p>
            <p>{el.volumeUSD.slice(0, 9)}</p>
            <p className={Style.hide}>{el.totalValueLockedUSD.slice(0, 9)}</p>
            <p className={Style.hide}>{el.txCount.slice(0, 9)}</p>
            <p className={Style.hide}>{el.totalSupply.slice(0, 9)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTokens;