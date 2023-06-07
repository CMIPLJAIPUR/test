import { useState } from "react";
import {Form } from "react-bootstrap";
import "./recentlyvieweditems.scss";
import Menu from "components/menu/Menu";
import Footer from "components/MyNichoShop/footer/Footer";
import RecentlyProduct from "../../../components/RecentlyProduct/RecentlyProduct";

import { product } from "Data"

const RecentlyViewedItems = () => {
    const [ list, setList ] = useState(product)
    return (
        <>
        <Menu />
        <div className="ui-today-deals-box recent">
            <div className="recent-title">
                <span>Recently viewed</span>
                <button data-bs-toggle="modal" data-bs-target="#clear-all">Clear All</button>
                <div className="modal fade" id="clear-all" data-bs-backdrop="static" tabindex="-1" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                        <div className="modal-header">
                            <i className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                        </div>
                        <div className="modal-body text-center">
                            <p className="fs-4 font-weight-bolder">Recently Viewed</p>
                            <p className="py-30 color-inactive">Are you sure you want permanently delete all Recently viewed items?</p>
                            <button data-bs-dismiss="modal">Cancel</button>
                            <button data-bs-dismiss="modal" className="del" onClick={() => setList([])}>Delete</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex gap-30">
                <div className="flex-grow-1">
                    <div className="row">
                        {list.map((item, index) => {
                            return (
                                <RecentlyProduct
                                key={index}
                                product={item}
                            />
                            );
                        })}
                        {
                            list.length === 0 &&
                            <div className="text-center" style={{paddingTop: "200px"}}>
                                <p className="fs-4 font-weight-bolder">You haven’t viewed any items recently</p>
                                <p className="py-30 color-inactive">To start , shop around on our Homepage or check out our Today’s Deals</p>
                            </div>
                        }
                    </div>
                    {
                        !(list.length === 0) &&
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
                    }
                   
                </div>
            </div>
        </div>
        <Footer />
    </>
    );
};

export default RecentlyViewedItems;
