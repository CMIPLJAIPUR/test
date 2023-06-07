import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";
import { HiViewGrid } from "react-icons/hi";
import { TiThList } from "react-icons/ti";
import {
    MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { FiFilter } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import CategoryCheck from "components/CategoryCheck/CategoryCheck";
import Menu from "components/menu/Menu";
import Footer from "components/MyNichoShop/footer/Footer";
import ProductCard from "components/ProductCard/ProductCard";
import ProductListCard from "components/ProductCard/ProductListCard";
import ProductImg from "assets/product-img/product.png";

import { listCategory, langList, product, condition } from "Data"

const TodaysDeals = () => {

    // is toggled dropdown
    const [ type, setType ] = useState(0)
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
                <div className="ui-header d-lg-flex">
                    <span className="d-none d-xl-block" style={{width: "280px"}}/>
                    <div className="border-bottom d-flex align-items-center gap-4 pb-3 flex-grow-1">
                        <div className="ui-header-button-group">
                            <button className={type ===0 && 'active'} onClick={() => setType(0)}>All listings</button>
                            <button className={type ===1 && 'active'} onClick={() => setType(1)}>Auction</button>
                            <button className={type ===2 && 'active'} onClick={() => setType(2)}>Buy it now</button>
                        </div>
                        {/* <span className="flex-grow-1" /> */}
                        <div className="ui-td-select d-flex align-items-center gap-1">
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
                        <div className="ui-td-select d-flex align-items-center gap-1">
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
                        <div className="ui-td-select d-flex align-items-center gap-1">
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
                <>
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
                                <div className="ui-price-link">
                                    {listCategory.map((item, index) => (
                                        <a href="#">{item}</a>
                                    ))}
                                </div>
                                <p className="link">Show more</p>
                                <div className="ui-header-button-group py-3">
                                    <button className={type ===0 && 'active'} onClick={() => setType(0)}>All listings</button>
                                    <button className={type ===1 && 'active'} onClick={() => setType(1)}>Auction</button>
                                    <button className={type ===2 && 'active'} onClick={() => setType(2)}>Buy it now</button>
                                </div>
                                <h4>Refine By</h4>
                                <Accordion>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    >
                                        <span className="font-weight-bolder">Item details 1</span>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <div className="left-accordion">
                                            {
                                                [...Array(8)].map((item, key) => (
                                                    <CategoryCheck
                                                        category={`Value ${key + 1} (${1*10**key})`}
                                                    />
                                                ))
                                            }
                                        </div>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    >
                                        <span className="font-weight-bolder">Item details 2</span>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <div className="left-accordion">
                                            {
                                                [...Array(8)].map((item, key) => (
                                                    <CategoryCheck
                                                        category={`Value ${key + 1} (${1*10**key})`}
                                                    />
                                                ))
                                            }
                                        </div>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    >
                                        <span className="font-weight-bolder">Item details 3</span>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <div className="left-accordion">
                                            {
                                                [...Array(8)].map((item, key) => (
                                                    <CategoryCheck
                                                        category={`Value ${key + 1} (${1*10**key})`}
                                                    />
                                                ))
                                            }
                                        </div>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    >
                                        <span className="font-weight-bolder">Item details 4</span>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <div className="left-accordion">
                                            {
                                                [...Array(8)].map((item, key) => (
                                                    <CategoryCheck
                                                        category={`Value ${key + 1} (${1*10**key})`}
                                                    />
                                                ))
                                            }
                                        </div>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    >
                                        <span className="font-weight-bolder">Condition</span>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <div className="left-accordion">
                                            {
                                                condition.map((item, key) => (
                                                    <CategoryCheck
                                                        category={item}
                                                    />
                                                ))
                                            }
                                        </div>
                                    </AccordionDetails>
                                </Accordion>
                                <h4>Price</h4>
                                <div className="d-flex align-items-center">
                                    <div class="z-input-group">
                                        <span>$</span>
                                        <input placeholder="0" className="input-form"/>
                                    </div> &nbsp; ~ &nbsp;  
                                    <div class="z-input-group">
                                        <span>$</span>
                                        <input placeholder="0" className="input-form"/>
                                    </div>   
                                </div>
                                <h4>Delivery</h4>
                                <CategoryCheck
                                    category="Free shipping"
                                />
                            </div>
                        </div>
                        )}
                        <div className="ui-todays-deals-left d-none d-lg-block listing">
                            <p className="fs-4 mb-3">Categories</p>
                            <div className="ui-price-link">
                                {listCategory.map((item, index) => (
                                    <a href="#">{item}</a>
                                ))}
                            </div>
                            <h4>Refine By</h4>
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                    <span className="font-weight-bolder">Item details 1</span>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div className="left-accordion">
                                        {
                                            [...Array(8)].map((item, key) => (
                                                <CategoryCheck
                                                    category={`Value ${key + 1} (${1*10**key})`}
                                                />
                                            ))
                                        }
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                    <span className="font-weight-bolder">Item details 2</span>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div className="left-accordion">
                                        {
                                            [...Array(8)].map((item, key) => (
                                                <CategoryCheck
                                                    category={`Value ${key + 1} (${1*10**key})`}
                                                />
                                            ))
                                        }
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                    <span className="font-weight-bolder">Item details 3</span>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div className="left-accordion">
                                        {
                                            [...Array(8)].map((item, key) => (
                                                <CategoryCheck
                                                    category={`Value ${key + 1} (${1*10**key})`}
                                                />
                                            ))
                                        }
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                    <span className="font-weight-bolder">Item details 4</span>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div className="left-accordion">
                                        {
                                            [...Array(8)].map((item, key) => (
                                                <CategoryCheck
                                                    category={`Value ${key + 1} (${1*10**key})`}
                                                />
                                            ))
                                        }
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                    <span className="font-weight-bolder">Condition</span>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div className="left-accordion">
                                        {
                                            condition.map((item, key) => (
                                                <CategoryCheck
                                                    category={item}
                                                />
                                            ))
                                        }
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                            <h4>Price</h4>
                            <div className="d-flex align-items-center">
                                <div class="z-input-group">
                                    <span>$</span>
                                    <input placeholder="0" className="input-form"/>
                                </div> &nbsp; ~ &nbsp;  
                                <div class="z-input-group">
                                    <span>$</span>
                                    <input placeholder="0" className="input-form"/>
                                </div>   
                            </div>
                            <h4>Delivery</h4>
                            <CategoryCheck
                                category="Free shipping"
                            />
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
                            <p className="py-30 fs-3 font-weight-bolder">You are already viewed</p>
                            <div className="recently-view">
                                {[...Array(8)].map((item,key) => (
                                    <img src={ProductImg} alt="" className="border p-4"/>
                                ))}
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
