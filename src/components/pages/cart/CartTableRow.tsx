import Image from "next/image";
import Link from "next/link";

const CartTableRow = () => {
  return (
    <tr>
      <td className="thumb__td">
        <Image
          width={126}
          height={126}
          src="/img/product/micriphone.jpg"
          alt="img"
        />
        <span className="fs-24 white fw-500 ">Microphone R4</span>
      </td>
      <td className="quantity__td">
        <form action="#0">
          <p className="qty align-items-center">
            <button className="qtyplus" aria-hidden="true">
              <i className="ti ti-plus"></i>
            </button>
            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              max="10"
              step="1"
              value="01"
            />
            <button className="qtyminus" aria-hidden="true">
              <i className="ti ti-minus"></i>
            </button>
          </p>
        </form>
      </td>
      <td>$75.80</td>
      <td>
        <span className="d-flex align-items-center gap-3">
          $75.80{" "}
          <Link href="#0" className="iconx">
            <i className="ti ti-x"></i>
          </Link>
        </span>
      </td>
    </tr>
  );
};

export default CartTableRow;
