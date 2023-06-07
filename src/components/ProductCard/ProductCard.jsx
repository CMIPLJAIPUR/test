import { MdKeyboardArrowDown } from "react-icons/md";
import "./productcard.scss";

const ProductCard = ({ img, title, price, discountPrice, discount }) => {
    return (
        <>
            <div className="ui-product-card col-6 col-sm-4 col-md-4 col-lg-3">
                <img src={img} alt="product" />
                <p>{title}</p>
                <h4>US $ {price}</h4>
                <p>
                    List: US <del>{discountPrice}</del>
                    <span> {discount} OFF</span>
                </p>
                <small className="pointer color-inactive">
                    More options <MdKeyboardArrowDown />
                </small>
            </div>
        </>
    );
};

export default ProductCard;
