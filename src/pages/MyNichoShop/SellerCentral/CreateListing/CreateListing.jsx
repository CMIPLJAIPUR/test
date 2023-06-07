import React, {useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CreatelistSearch from "./components/createlistSearch/CreatelistSearch";
import FinishDraft from "./components/finishdraft/FinishDraft";
import Logo from "../../../../components/logo/Logo";
import Footer from "components/MyNichoShop/footer/Footer";
import InputSelect from "components/form/inputSelect"

import "./CreateListing.scss";
import axios from "axios";
var filtertexts = [];

const CreateListing = () => {
    const [category, setCategory] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        if(!localStorage.getItem("address")) {
            navigate("/addresses/add-ship-from-address")
        }
    }, [])
    return (
        <>
            <div className="main-create-list">
                <div className="main-logo">
                    <Logo />
                    <span>Create a listing</span>
                </div>
                {
                    category == "" ? <>
                    <CreatelistSearch onChange={setCategory}/>
                    <FinishDraft />
                    </> :
                <div className="main-search-list">
                    <Link to="/CreateListing_multiple" ><p className="link">List multiple variations of your item <i className="bi bi-info-circle color-inactive" /></p></Link>
                    <h3>Describe your item</h3>
                    <div className="d-flex flex-column gap-20">
                        <div className="d-flex flex-column flex-sm-row">
                            <div className="label"><i className="text-danger">*</i>Category</div>
                            <div style={{lineHeight: "48px"}}>
                                {category}
                                <span className="pointer color-green" onClick={() => setCategory("")}>Change Category</span>
                            </div>                            
                        </div>
                        <div className="d-flex flex-column flex-sm-row">
                            <div className="label"><i className="text-danger">*</i>Title</div>
                            <div className="flex-grow-1">
                                <input placeholder="Enter title..." className="input-form"/>                          
                            </div>
                        </div>
                        <div className="d-flex flex-column flex-sm-row">
                            <div className="label"><i className="text-danger">*</i>Condition</div>
                            <div className="d-flex gap-20 flex-column flex-md-row flex-grow-1">
                                <input placeholder="Enter condition..."  className="input-form"/> 
                                <div className="w-100 d-none d-md-block"/>
                            </div>                                                     
                        </div>
                        <div className="d-flex flex-column flex-sm-row">
                            <div className="label">Condition details <i className="bi bi-info-circle color-inactive" /></div>
                            <div className="d-flex gap-20 flex-column flex-md-row flex-grow-1">
                                <textarea placeholder="Enter condition..."  className="input-form" rows="4" /> 
                                <div className="w-100 d-none d-md-block"/>
                            </div>                                                     
                        </div>
                        <div className="d-flex flex-column flex-sm-row">
                            <div className="label"><i className="text-danger">*</i>Photos</div>
                            <div className=" flex-grow-1">
                                <input placeholder="Enter title..." className="input-form"/>                          
                            </div>
                        </div>
                        <div className="d-flex flex-column flex-sm-row">
                            <div className="label"><i className="text-danger">*</i>Item specific</div>
                            <div className="flex-grow-1 d-flex gap-20 flex-column">
                                <div className="d-flex gap-20 flex-column flex-md-row">
                                    <InputSelect label="Brand" /> 
                                    <InputSelect label="Type" /> 
                                </div>   
                                <div className="d-flex gap-20 flex-column flex-md-row">
                                    <InputSelect label="Platform" /> 
                                    <InputSelect label="Operating system" /> 
                                </div>   
                                <div className="d-flex gap-20 flex-column flex-md-row">
                                    <InputSelect label="Language" /> 
                                    <InputSelect label="Distribution system" /> 
                                </div>   
                                <div className="d-flex gap-20 flex-column flex-md-row">
                                    <InputSelect label="License category" /> 
                                    <InputSelect label="Min. hard drive space" /> 
                                </div>   
                            </div>                   
                        </div>
                        <div className="d-flex flex-column flex-sm-row">
                            <div className="label"><i className="text-danger">*</i>Item description</div>
                            <CKEditor
                                editor={ClassicEditor}
                                name="itemDescription"
                                // value={data.itemDescription}
                                fullWidth
                                required
                                onReady={(editor) => {
                                    // You can store the "editor" and use when it is needed.
                                    console.log("Editor is ready to use!", editor);
                                }}
                                // onChange={(event, editor) => {
                                //     const data = editor.getData();
                                //     console.log({ data });
                                //     setDescription(data);
                                // }}
                                onBlur={(event, editor) => {
                                    console.log("Blur.", editor);
                                }}
                                onFocus={(event, editor) => {
                                    console.log("Focus.", editor);
                                }}
                                />                         
                        </div>
                    </div>
                    <h3>Select listing type and price</h3>
                    <div className="d-flex flex-column gap-20">
                        <div className="d-flex flex-column flex-sm-row">
                            <div className="label"><i className="text-danger">*</i>Listing format</div>
                            <input placeholder="Enter title..." className="input-form format-width"/>                          
                        </div>
                        <div className="d-flex flex-column flex-sm-row">
                            <div className="label"><i className="text-danger">*</i>Listing format</div>
                            <div class="format-width z-input-group">
                                <span>US $</span>
                                <input placeholder="Enter title..." className="input-form"/>
                            </div>                          
                        </div>
                        <div className="d-flex flex-column flex-sm-row">
                            <div className="label"><i className="text-danger">*</i>Quantity</div>
                            <input placeholder="Enter quanitity 1,2,eg..." className="input-form format-width"/>                          
                        </div>
                        <div className="d-flex flex-column flex-sm-row">
                            <div className="label"><i className="text-danger">*</i>Listing duration</div>
                            <div className="format-width">
                                <InputSelect placeholder="Enter quanitity 1,2,eg..."/>                          
                            </div>
                        </div>
                    </div>
                    <h3>How you’ll post It</h3>
                    <div className="d-flex flex-column gap-20">
                        <div className="d-flex flex-column flex-sm-row">
                            <div className="label"><i className="text-danger">*</i>Sipphing option</div>
                            <div className="d-flex gap-20 flex-column flex-md-row flex-grow-1">
                                <div className="d-flex flex-column gap-20" style={{marginTop: "10px"}}>
                                    <p><i className="text-danger">*</i>Dosmetic shipping</p>
                                    <div className="d-flex flex-column flex-sm-row">
                                        <div className="label2">Service</div>
                                        <div className="flex-grow-1">
                                            <InputSelect placeholder="Enter quanitity 1,2,eg..."/>                          
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column flex-sm-row">
                                        <div className="label2">Cost</div>
                                        <div class="flex-grow-1 z-input-group">
                                            <span>US $</span>
                                            <div className="flex-grow-1">
                                                <input placeholder="Enter title..." className="input-form"/>
                                            </div>
                                        </div>                          
                                    </div>
                                    <div className="d-flex flex-column flex-sm-row">
                                        <div className="label2"></div>
                                        <lablel><input type="checkbox" /> Offer international shipping</lablel>                       
                                    </div>
                                </div> 
                                <div className="d-none d-md-block"/>
                            </div> 
                        </div>
                        <div className="d-flex flex-column flex-sm-row">
                            <div className="label"><i className="text-danger">*</i>Dispatch time</div>
                            <div className="format-width">
                                <InputSelect placeholder="Enter quanitity 1,2,eg..."/>                          
                            </div>
                        </div>
                        <div className="d-flex flex-column flex-sm-row">
                            <div className="label"><i className="text-danger">*</i>Item Location</div>
                            <div style={{lineHeight: "48px"}}>
                                London, United Kingdom <span className="link"> Change location</span>
                            </div>
                        </div>
                    </div>
                    <h3>Return policy</h3>
                    <div className="d-flex flex-column flex-sm-row">
                        <div className="label"><i className="text-danger">*</i> Returns accepted</div>
                        <div className="d-flex flex-column gap-20" style={{marginTop: "10px"}}>
                            <label><input type="radio" checked /> Returns accepted</label>
                            <p>With how many days, after receiving the item, buyer should start return</p>
                            <div className="format-width">
                                <InputSelect placeholder="Enter quanitity 1,2,eg..."/>                          
                            </div>
                            <p>Return shipping will be paid by</p>
                            <div className="format-width">
                                <InputSelect placeholder="Enter quanitity 1,2,eg..."/>                          
                            </div>
                            <label><input type="radio" /> Returns accepted</label>
                        </div>
                    </div>
                    <div className="gap-20 d-flex py-30">
                        <button className="save">List it</button>
                        <button className="later">Save for later</button>
                        <button className="cancel">Cancel</button>
                    </div>
                </div>

                }
            </div>
            <Footer />
        </>
    );
};

export default CreateListing;
