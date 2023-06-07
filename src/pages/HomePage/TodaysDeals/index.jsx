import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";
import { HiViewGrid } from "react-icons/hi";
import { TiThList } from "react-icons/ti";
import {
    MdKeyboardArrowLeft,
    MdKeyboardArrowRight,
    MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { FiFilter } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import "./todaysdeals.scss";

import CategoryCheck from "components/CategoryCheck/CategoryCheck";
import Menu from "components/menu/Menu";
import Footer from "components/MyNichoShop/footer/Footer";
import ProductCard from "components/ProductCard/ProductCard";
import ProductListCard from "components/ProductCard/ProductListCard";

import { category, langList, product } from "Data"

const TodaysDeals = () => {

    // is toggled dropdown
    const [isToggled, setToggle] = useState(false);

    const langHandler = () => {
        setToggle(!isToggled);
    };

    const selectLang = (id) => {
        setToggle(false);
        langList.filter((item) => {
            item.isSelected = false;
            if (item.id === id) {
                item.isSelected = true;
            }
        });
    };

    // view list is toggled
    const [isToggledList, setToggleList] = useState(false);
    const [isSelectedList, setSelectedList] = useState(false);

    const listHandler = () => {
        setToggleList(!isToggledList);
    };


    const [isCatToogled, setCatToggle] = useState(false);

    const filterHandler = () => {
        setCatToggle(true);
    };

    const [getSort, setSort] = useState(false);

    const sortByHandler = () => {
        setSort(true);
    };

    return (
        <>
            <Menu />
            <div className="ui-today-deals-box">
                <>
                    <div className="ui-header d-lg-flex">
                        <p className="ui-header-head">
                            Today’s Deals
                        </p>
                        <div className="border-bottom d-flex align-items-center gap-4 pb-3 flex-grow-1 justify-content-end">
                            <div className="ui-td-select d-flex align-items-center gap-3">
                                <p>Sort by:</p>
                                <Form.Select>
                                    <option>Relevance</option>
                                    <option value="1">
                                        Price - Low to High
                                    </option>
                                    <option value="1">
                                        Price - High to Low
                                    </option>
                                    <option value="1">
                                        Discount - Low to High
                                    </option>
                                    <option value="1">
                                        Discount - High to Low
                                    </option>
                                </Form.Select>
                            </div>
                            <div className="ui-td-select d-flex align-items-center gap-3">
                                <p>Shipping to</p>
                                <div className="ui-td-lang">
                                    {langList.map((item) => {
                                        if (
                                            item.isSelected == true
                                        ) {
                                            return (
                                                <button
                                                    className="form-select"
                                                    onClick={
                                                        langHandler
                                                    }
                                                >
                                                    <img
                                                        src={
                                                            item.img
                                                        }
                                                        alt="flug"
                                                    />
                                                    <span>
                                                        {item.name}
                                                    </span>
                                                </button>
                                            );
                                        }
                                    })}
                                    {isToggled && (
                                        <div className="ui-td-lang-option">
                                            {langList.map(
                                                (item, index) => {
                                                    return (
                                                        <button
                                                            key={
                                                                index
                                                            }
                                                            onClick={() => {
                                                                selectLang(
                                                                    item.id
                                                                );
                                                            }}
                                                        >
                                                            <img
                                                                src={
                                                                    item.img
                                                                }
                                                                alt="flug"
                                                            />
                                                            <span>
                                                                {
                                                                    item.name
                                                                }
                                                            </span>
                                                        </button>
                                                    );
                                                }
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="ui-td-select d-flex align-items-center gap-3">
                                <p>View</p>
                                <div className="ui-td-view">
                                    <button
                                        className="form-select"
                                        onClick={listHandler}
                                    >
                                        {isSelectedList ? (
                                            <TiThList />
                                        ) : (
                                            <HiViewGrid />
                                        )}
                                    </button>

                                    {isToggledList && (
                                        <div className="ui-td-view-option">
                                            <button
                                                onClick={() => {
                                                    setSelectedList(
                                                        false
                                                    );

                                                    setToggleList(
                                                        false
                                                    );
                                                }}
                                            >
                                                <HiViewGrid />
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setSelectedList(
                                                        true
                                                    );

                                                    setToggleList(
                                                        false
                                                    );
                                                }}
                                            >
                                                <TiThList />
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ui-mobile-td-header d-lg-none mb-2">
                        <p className="ui-header-head">
                            Today’s Deals
                        </p>
                        <div className="ui-mob-td-top">
                            <button
                                onClick={filterHandler}
                                className="d-flex align-items-center"
                            >
                                <FiFilter />
                                Filter
                            </button>
                            <div className="ui-mob-td-select gap-3">
                                <button onClick={sortByHandler}>
                                    Sort by
                                    <MdOutlineKeyboardArrowDown />
                                </button>

                                <div className="ui-td-select d-flex align-items-center gap-2">
                                    <p>View</p>
                                    <div className="ui-td-view">
                                        <button
                                            className="form-select"
                                            onClick={listHandler}
                                        >
                                            {isSelectedList ? (
                                                <TiThList />
                                            ) : (
                                                <HiViewGrid />
                                            )}
                                        </button>

                                        {isToggledList && (
                                            <div className="ui-td-view-option">
                                                <button
                                                    onClick={() => {
                                                        setSelectedList(
                                                            false
                                                        );

                                                        setToggleList(
                                                            false
                                                        );
                                                    }}
                                                >
                                                    <HiViewGrid />
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        setSelectedList(
                                                            true
                                                        );

                                                        setToggleList(
                                                            false
                                                        );
                                                    }}
                                                >
                                                    <TiThList />
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex gap-30">
                        {isCatToogled && (
                        <div className="ui-mob-cat-td-box">
                            <div className="ui-mob-cat-td-child ui-todays-deals-left">
                                <h4>Categories</h4>
                                <button
                                    onClick={() => {
                                        setCatToggle(false);
                                    }}
                                    className="ui-mob-cross-btn d-lg-none"
                                >
                                    <ImCross />
                                </button>
                                {category.map((item, index) => {
                                    return (
                                        <CategoryCheck
                                            category={item}
                                        />
                                    );
                                })}
                                <p className="link mt-10">
                                    See More <IoIosArrowDown />
                                </p>
                                <h4>Price</h4>
                                <div className="ui-price-link">
                                    <a href="#">Under $25</a>
                                    <a href="#">$25 to $50</a>
                                    <a href="#">$50 to $100</a>
                                    <a href="#">$100 to $200</a>
                                    <a href="#">$200 & Above</a>
                                </div>
                                <h4>Discount</h4>
                                <div className="ui-price-link">
                                    <a href="#">10% Off or More</a>
                                    <a href="#">25% Off or More</a>
                                    <a href="#">50% Off or More</a>
                                    <a href="#">70% Off or More</a>
                                </div>
                            </div>
                        </div>
                        )}
                        <div className="ui-todays-deals-left d-none d-lg-block">
                            {category.map((item, index) => (
                                <CategoryCheck category={item} />
                            ))}
                            <p className="link mt-10">
                                See More <IoIosArrowDown />
                            </p>
                            <h4>Price</h4>
                            <div className="ui-price-link">
                                <a href="#">Under $25</a>
                                <a href="#">$25 to $50</a>
                                <a href="#">$50 to $100</a>
                                <a href="#">$100 to $200</a>
                                <a href="#">$200 & Above</a>
                            </div>
                            <h4>Discount</h4>
                            <div className="ui-price-link">
                                <a href="#">10% Off or More</a>
                                <a href="#">25% Off or More</a>
                                <a href="#">50% Off or More</a>
                                <a href="#">70% Off or More</a>
                            </div>
                        </div>
                        <div className="flex-grow-1">
                            <p className="pb-3 color-inactive">
                                234.567 results
                            </p>
                            {isSelectedList ? (
                                <>
                                    <div className="ui-td-card-list border">
                                        {product.slice(0, 3).map((item, index) => {
                                            return (
                                                <ProductListCard
                                                    key={index}
                                                    img={item.productImage}
                                                    title={item.productTitle}
                                                    price={item.productPrice}
                                                    discountPrice={
                                                        item.productDiscountPrice
                                                    }
                                                    discount={
                                                        item.productDiscount
                                                    }
                                                />
                                            );
                                        })}
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="row">
                                        {product.map((item, index) => {
                                            return (
                                                    <ProductCard
                                                        key={index}
                                                        img={item.productImage}
                                                        title={item.productTitle}
                                                        price={item.productPrice}
                                                        discountPrice={
                                                            item.productDiscountPrice
                                                        }
                                                        discount={
                                                            item.productDiscount
                                                        }
                                                    />
                                            );
                                        })}
                                    </div>
                                </>
                            )}
                            <div className="ui-td-pag-box rounded-bottom d-flex align-items-center justify-content-between">
                                <p>Page 1 of 4</p>
                                <div className="ui-td-pag d-flex align-items-center gap-2">
                                    <button className="arrow">
                                        <i className="bi bi-arrow-left" />
                                    </button>
                                    <div className="ui-td-pag-no">
                                        <button>1</button>
                                        <button className="active">2</button>
                                        <button>3</button>
                                        <button>4</button>
                                    </div>
                                    <button className="arrow">
                                        <i className="bi bi-arrow-right" />
                                    </button>
                                </div>
                                <div className="ui-td-per-page-select align-items-center gap-2">
                                    <p>Results per page</p>
                                    <Form.Select>
                                        <option>10</option>
                                        <option value="1">15</option>
                                        <option value="2">20</option>
                                        <option value="3">25</option>
                                        <option value="3">30</option>
                                    </Form.Select>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
                {getSort && (
                    <div className="ui-mobile-sorting">
                        <div className="ui-mobile-sorting-content">
                            <div className="ui-mob-sorting-top d-flex align-content-center justify-content-between">
                                <p>Sort by</p>
                                <button
                                    onClick={() => {
                                        setSort(false);
                                    }}
                                >
                                    <ImCross />
                                </button>
                            </div>
                            <ul>
                                <li>Relevance</li>
                                <li>Price - Low to High</li>
                                <li>Price - High to Low</li>
                                <li>Discount - Low to High</li>
                                <li>Discount - High to Low</li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default TodaysDeals;
