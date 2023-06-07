import { MdKeyboardArrowDown } from "react-icons/md";
import "./productcard.scss";

const ProductListCard = ({ img, title, price, discountPrice, discount }) => {
    return (
        <>
            <div className="ui-product-list-card">
                <img src={img} alt="product" />
                <div className="ui-pro-list-info">
                    <p>
                        {title}
                    </p>
                    <h4>US $ {price}</h4>
                    <p>
                    List: US <del>{discountPrice}</del>
                    <span> {discount} OFF</span>
                    </p>
                    <small className="pointer color-inactive">
                        More options <MdKeyboardArrowDown />
                    </small>
                </div>
            </div>
        </>
    );
};

export default ProductListCard;
