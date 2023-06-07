import React, {useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Logo from "../../../../components/logo/Logo";
import Footer1 from "components/MyNichoShop/footer/Footer";
import Footer from "./components/footer";
import InputSelect from "components/form/inputSelect"
import SizePicker from "./components/sizePicker"

import "./Mutiple_create.scss"

const CreateListing = () => {
    const navigate = useNavigate();
    const [ picker, setPicker ] = useState([0, 0, 0])
    const [ second, setSecond ] = useState(false)
    const [ create, setCreate ] = useState(false)
    
    return (
        <>
            <div className="main-create-list">
                <div className="main-logo">
                    <Logo />
                    <span>Create a listing</span>
                </div>
                {
                    second ? 
                    
                <div className="main-search-list">
                    <h3>Multiple variations</h3>
                    <div className="d-flex flex-column gap-20 mt-20">
                        <div className="d-flex flex-column flex-sm-row">
                            <div className="label"><i className="text-danger">*</i>Variations attributes</div>
                            <div className="d-flex gap-20 flex-column flex-md-row flex-grow-1">
                                <div className="d-flex flex-column gap-20 w-100" style={{marginTop: "10px"}}>
                                    <div className="d-flex flex-column flex-sm-row">
                                        <div style={{width: "110px"}}>Size:</div>
                                        <SizePicker selected={picker} type={0} onChange={setPicker} /> 
                                    </div>
                                    <div className="d-flex flex-column flex-sm-row">
                                        <div style={{width: "110px"}}>Color:</div>
                                        <SizePicker selected={picker} type={1} onChange={setPicker} />                       
                                    </div>
                                    <div className="d-flex flex-column flex-sm-row">
                                        <div style={{width: "110px"}}>Material:</div>
                                        <SizePicker selected={picker} type={2} onChange={setPicker} />                        
                                    </div>
                                    <div className="d-flex flex-column flex-sm-row">
                                        <div className="label2"><span className="link"> Revise</span></div>
                                    </div>
                                </div> 
                                <div className="d-none d-md-block  w-100"/>
                            </div> 
                        </div>
                         <div className="d-flex flex-column flex-sm-row">
                            <div className="label"><i className="text-danger">*</i>Photos</div>
                            <div>
                                <p className="mt-10">Main photo</p>
                                <div className="photo">
                                    <span>
                                        <img src="/images/BG.png" />
                                        <i className="bi bi-trash3" /> 
                                    </span>
                                    <span>
                                        <img src="/images/BG.png" />
                                        <i className="bi bi-trash3" /> 
                                    </span>
                                    <span>
                                        <img src="/images/BG.png" />
                                        <i className="bi bi-trash3" /> 
                                    </span>
                                </div>
                                <span className="link"> Revise</span>
                            </div>
                        </div>
                        <div className="d-flex flex-column flex-sm-row">
                            <div className="label"><i className="text-danger">*</i>Buy it now price</div>
                            <div style={{lineHeight: "48px"}}>
                                US $1,234.56 - US #1,234.56 <span className="link"> Revise</span>
                            </div>
                        </div>
                        <div className="d-flex flex-column flex-sm-row">
                            <div className="label"><i className="text-danger">*</i>Total Quantity</div>
                            <div style={{lineHeight: "48px"}}>
                                123 <span className="link">Revise</span>
                            </div>
                        </div>
                        <div className="d-flex flex-column flex-sm-row">
                            <div className="label"><i className="text-danger">*</i>Listing Duration</div>
                            <div className="format-width">
                                <InputSelect placeholder="Enter quanitity 1,2,eg..."/>                          
                            </div>
                        </div>
                    </div>
                    <h3>Describe your item</h3>
                    <div className="d-flex flex-column gap-20 mt-20">
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
                    <div className="d-flex flex-column gap-20 mt-20">
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
                    <div className="d-flex flex-column gap-20 mt-20">
                        <div className="d-flex flex-column flex-sm-row">
                            <div className="label"><i className="text-danger">*</i>Sipphing option</div>
                            <div className="d-flex gap-20 flex-column flex-md-row flex-grow-1">
                                <div className="d-flex flex-column gap-20 w-100" style={{marginTop: "10px"}}>
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
                                <div className="d-none d-md-block w-100"/>
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
                    <div className="d-flex flex-column flex-sm-row mt-20">
                        <div className="label"><i className="text-danger">*</i> Returns accepted</div>
                        <div className="d-flex flex-column gap-20" style={{marginTop: "10px"}}>
                            <label><input type="radio"  /> Returns accepted</label>
                            <label><input type="radio" checked /> Returns not accepted</label>
                            <p>Returns will not be accepted but the item can always be returned if it doesn’t match the listing description. Lear more <span className="link"> Change location</span></p>
                        </div>
                    </div>
                    <div className="gap-20 d-flex py-30">
                        <button className="save">List it</button>
                        <button className="later">Save for later</button>
                        <button className="cancel">Cancel</button>
                    </div>
                    <Footer />
                </div> : 
                <div className='select-variation'>
                <nav>Step 1 of 3 : Select the details of your variations</nav>
                <hr />
                <p className="color-green d-flex gap-30">
                    <span className="pointer"><i className="bi bi-plus-circle" />&nbsp; Size</span>
                    <span className="pointer"><i className="bi bi-plus-circle" />&nbsp; Color</span>
                    <span className="pointer"><i className="bi bi-plus-circle" />&nbsp; Material</span>
                </p>
                <hr/>
                <p className="color-green">
                    <span className="pointer" onClick={() => setCreate(true)}><i className="bi bi-plus-circle" /> Create your own varation</span>
                </p>
                {
                    create && 
                    <>
                    <table className='table mt-20'>
                        <thead>
                            <tr>
                                <th>Size</th>
                                <th>Color</th>
                                <th>Material</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='col-3'>
                                    <div className='input-group multiple-input-group'>
                                        <span className='align-middle mt-1'>#1 &nbsp; | </span>
                                        <select name="" className='form-control'>
                                            <option value='5'>x5</option>
                                            <option value='10'>x10</option>
                                            <option value='15'>x15</option>
                                        </select>
                                    </div>
                                </td>
                                <td className='col-4'>
                                    <select name="" className='form-control'>
                                        <option value='1'>Black</option>
                                        <option value='2'>White</option>
                                        <option value='3'>Yellow</option>
                                    </select>
                                </td>
                                <td className='col-5'>
                                    <div className='input-group'>
                                        <select name="" className='form-control' aria-label="Default select example">
                                            <option value='1'>Black</option>
                                            <option value='2'>White</option>
                                            <option value='3'>Yellow</option>
                                        </select>
                                    </div>

                                </td>
                                <td>
                                    <span style={{ 'fontSize': '25px' }}>&times;</span>
                                </td>
                            </tr>
                            <tr>
                                <td className='col-3'>
                                    <div className='input-group multiple-input-group'>
                                        <span className='align-middle mt-1'>#2 &nbsp; | </span>
                                        <select name="" className='form-control'>
                                            <option value='5'>x5</option>
                                            <option value='10'>x10</option>
                                            <option value='15'>x15</option>
                                        </select>
                                    </div>
                                </td>
                                <td className='col-4'>
                                    <select name="" className='form-control'>
                                        <option value='1'>Black</option>
                                        <option value='2'>White</option>
                                        <option value='3'>Yellow</option>
                                    </select>
                                </td>
                                <td className='col-5'>
                                    <div className='input-group'>
                                        <select name="" className='form-control' aria-label="Default select example">
                                            <option value='1'>Black</option>
                                            <option value='2'>White</option>
                                            <option value='3'>Yellow</option>
                                        </select>
                                    </div>

                                </td>
                                <td>
                                    <span style={{ 'fontSize': '25px' }}>&times;</span>
                                </td>
                            </tr>
                            <tr>
                                <td className='col-3'>
                                    <div className='input-group multiple-input-group'>
                                        <span className='align-middle mt-1'>#3 &nbsp; | </span>
                                        <select name="" className='form-control'>
                                            <option value='5'>x5</option>
                                            <option value='10'>x10</option>
                                            <option value='15'>x15</option>
                                        </select>
                                    </div>
                                </td>
                                <td className='col-4'>
                                    <select name="" className='form-control'>
                                        <option value='1'>Black</option>
                                        <option value='2'>White</option>
                                        <option value='3'>Yellow</option>
                                    </select>
                                </td>
                                <td className='col-5'>
                                    <div className='input-group'>
                                        <select name="" className='form-control' aria-label="Default select example">
                                            <option value='1'>Black</option>
                                            <option value='2'>White</option>
                                            <option value='3'>Yellow</option>
                                        </select>
                                    </div>

                                </td>
                                <td>
                                    <span style={{ 'fontSize': '25px' }}>&times;</span>
                                </td>
                            </tr>
                            <tr>
                                <td className='col-3'>
                                    <div className='input-group multiple-input-group'>
                                        <span className='align-middle mt-1'>#4 &nbsp; | </span>
                                        <select name="" className='form-control'>
                                            <option value='5'>x5</option>
                                            <option value='10'>x10</option>
                                            <option value='15'>x15</option>
                                        </select>
                                    </div>
                                </td>
                                <td className='col-4'>
                                    <select name="" className='form-control'>
                                        <option value='1'>Black</option>
                                        <option value='2'>White</option>
                                        <option value='3'>Yellow</option>
                                    </select>
                                </td>
                                <td className='col-5'>
                                    <div className='input-group'>
                                        <select name="" className='form-control' aria-label="Default select example">
                                            <option value='1'>Black</option>
                                            <option value='2'>White</option>
                                            <option value='3'>Yellow</option>
                                        </select>
                                    </div>

                                </td>
                                <td>
                                    <span style={{ 'fontSize': '25px' }}>&times;</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="color-green">
                        <span className="pointer"><i className="bi bi-plus-circle" /> Create your own varation</span>
                    </p>
                </>
                }

                <div className="gap-20 d-flex py-30">
                    <button className="save" onClick={() => setSecond(true)}>Continue</button>
                    <button className="later" onClilck={() => navigate("/CreateListing")}>Cancel</button>
                </div>
                <Footer1 />
                </div>
                }               
            </div>
        </>
    );
};

export default CreateListing;
