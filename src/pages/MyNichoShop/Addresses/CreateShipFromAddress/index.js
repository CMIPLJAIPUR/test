import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

import MENU from "components/menu/Menu";
import Footer from "components/MyNichoShop/footer/Footer";
import InputField from "components/form/inputField"
import InputPhoneNumber from "components/form/inputPhoneNumber"
import "./style.scss";

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'white',
    color: "#25252E",
    maxWidth: 380,
    padding: '16px',
    fontSize: "14px",
    border: '1px solid #dadde9',
    borderRadius: '6px',
    boxShadow: '0px 16px 32px rgba(69, 77, 107, 0.08)'
  },
}));

const CreateShipFromAddress = () => {
  const naviage = useNavigate()
  const [ address, setAddress ] = useState({
    country: "",
    name: "",
    street: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    businessName: "",
    businessCountry: "",
    businessName1: "",
    businessStreet: "",
    businessApartment: "",
    businessCity: "",
    businessState: "",
    businessZipCode: "",
    businessPhone: "",
    vatCountry: "",
    vatNumber: "",
    holderCountry: "",
    holderName: "",
    holderStreet: "",
    holderApartment: "",
    holderCity: "",
    holderState: "",
    holderZipCode: "",
    holderIBAN: "",
    holderBIC: "",
    holderCurrency: "",

    edit1: true,
    edit2: true,
    edit3: true
  })
  const [ index, setIndex ] = useState(1)
  const [ touched, setTouched ] = useState({})
  const handleAddress = (name, value) => {
    let kvalue = address;
    kvalue = { ...kvalue, [name]: value }
    setAddress({ ...kvalue })
  };
  const handleTouched = (name) => {
    let kvalue = touched;
    kvalue = { ...kvalue, [name]: true }
    setTouched({ ...kvalue })
  };
  const validate = (index) => {
    let v = true
    switch(index) {
      case 1: {
        ["country", "name", "street", "zipCode", "city", "state", "phone"].forEach(item => {
          if(address[item].length == 0  ) v = false;
        })        
        break;
      }
      case 2: {
        ["businessName", "businessCountry", "businessName1", "businessStreet", "businessCity", "businessState", "businessZipCode", "businessPhone", "vatCountry", "vatNumber"].forEach(item => {
          if(address[item].length == 0  ) v = false;
        })        
        break;
      }
      default : {
        ["holderCountry", "holderName", "holderStreet", "holderCity", "holderState", "holderZipCode", "holderIBAN", "holderBIC", "holderCurrency"].forEach(item => {
          if(address[item].length == 0  ) v = false;
        })        
        break;
      }
    }
    return v;
  }
  const onSubmit = () => {
    localStorage.setItem("address", true)
    naviage("/CreateListing")
  }
  return (
    <>
    <MENU />
    <div className="create-ship-from">
      <section>
        <div className={`title ${index > 0 && "active"}`}>
          <p>Your address</p>
          {
            !address.edit1  ?
            <span onClick={() => handleAddress("edit1", true)} className="pointer"><BorderColorIcon /> Edit</span> :
            <span>Step 1 of 3</span>
          }
        </div>
        {
          address.edit1 ? 
          <>
            <div className="form">
            <p>Before creating your first listing, please add your adress from where you will ship products sold.</p>
            <div className="d-flex gap-30 flex-column flex-md-row">
              <InputField name="country" label="Country" value={address.country} onChange={handleAddress} onBlur={handleTouched} error={touched.country && address.country.length == 0}/>
              <InputField name="name" label="Name" value={address.name} onChange={handleAddress} onBlur={handleTouched} error={touched.name && address.name.length == 0}/>
            </div>
            <div className="d-flex gap-30 flex-column flex-md-row">
              <InputField name="street" label="Street and number, P.O. box, c/o" value={address.street} onChange={handleAddress} onBlur={handleTouched} error={touched.street && address.street.length == 0} />
              <InputField name="apartment" label="Apartment, suite, uint, building, floor, etc. (optional)"  onChange={handleAddress} onBlur={handleTouched}/>
            </div>
            <div className="d-flex gap-30 flex-column flex-md-row">
              <InputField name="city" label="City" value={address.city} onChange={handleAddress} onBlur={handleTouched} error={touched.city && address.city.length == 0} />
              <div className="d-flex gap-30 flex-column flex-sm-row">
                <InputField name="state" label="State"  value={address.state} onChange={handleAddress} onBlur={handleTouched} error={touched.state && address.state.length == 0}/>
                <InputField name="zipCode" label="Zip code" value={address.zipCode} onChange={handleAddress} onBlur={handleTouched} error={touched.zipCode && address.zipCode.length == 0} />
              </div>
            </div>
            <div className="d-flex gap-30 flex-column flex-md-row">
              <InputPhoneNumber name="phone" value={address.phone} onChange={handleAddress} onBlur={handleTouched} error={touched.phone && address.phone.length < 3 }/>
              <div className="w-100 d-none d-md-block"/>
            </div>
          </div>
          <button className={`submit  ${!validate(1) && "error"}`} onClick={() => {  handleAddress("edit1", false); setIndex(2)}} disabled={!validate(1)}>Continue to Business Information</button>
          </> : 
          <article className="d-flex flex-column">
            <span>{address.country}</span>
            <span>{address.name}</span>
            <span>{address.street}</span>
            <span>{address.apartment}</span>
            <span>{address.city}</span>
            <span>{address.state}</span>
            <span>{address.zipCode}</span>
            <span>{address.phone}</span>
          </article>
        }     
      </section>
      <section>
        <div className={`title ${index > 1 && "active"}`}>
          <p>Business Information</p>
          {
            !address.edit2 ?
            <span onClick={() => handleAddress("edit1", true)} className="pointer"><BorderColorIcon /> Edit</span> :
            <span>Step 2 of 3</span>
          }
        </div>
        {
         index > 1 && (address.edit2 ? 
          <>
            <div className="form">
              <p>Please note that on EU sites, business are required by law to provide buyers with certain information about their business. Business seller information will be shown on all your item listings. Learn more about Business seller information.</p>
              <div className="d-flex gap-30 flex-column flex-md-row">
                <InputField name="businessName" label="Business name" value={address.businessName} onChange={handleAddress} onBlur={handleTouched} error={touched.businessName && address.businessName.length == 0}/>
                <div className="w-100 d-none d-md-block"/>
              </div>
              <p className="font-weight-bolder">Business address</p>
              <div className="d-flex gap-30 flex-column flex-md-row">
                <InputField name="businessCountry" label="businessCountry" value={address.businessCountry} onChange={handleAddress} onBlur={handleTouched} error={touched.businessCountry && address.businessCountry.length == 0}/>
                <InputField name="businessName1" label="Phone number" value={address.businessName1} onChange={handleAddress} onBlur={handleTouched} error={touched.businessName1 && address.businessName1.length == 0}/>
              </div>
              <div className="d-flex gap-30 flex-column flex-md-row">
                <InputField name="businessStreet" label="Street and number, P.O. box, c/o" value={address.businessStreet} onChange={handleAddress} onBlur={handleTouched} error={touched.businessStreet && address.businessStreet.length == 0} />
                <InputField name="businessApartment" label="Apartment, suite, uint, building, floor, etc. (optional)"  onChange={handleAddress} onBlur={handleTouched}/>
              </div>
              <div className="d-flex gap-30 flex-column flex-md-row">
                <InputField name="businessCity" label="City" value={address.businessCity} onChange={handleAddress} onBlur={handleTouched} error={touched.businessCity && address.businessCity.length == 0} />
                <div className="d-flex gap-30 flex-column flex-sm-row">
                  <InputField name="businessState" label="State / province / region"  value={address.businessState} onChange={handleAddress} onBlur={handleTouched} error={touched.businessState && address.businessState.length == 0}/>
                  <InputField name="businessZipCode" label="Zip code" value={address.businessZipCode} onChange={handleAddress} onBlur={handleTouched} error={touched.businessZipCode && address.businessZipCode.length == 0} />
                </div>
              </div>
              <p className="font-weight-bolder">VAT / GST Registration information</p>
              <div className="d-flex gap-30 flex-column flex-md-row">
                <InputField name="vatCountry" label="Street and number, P.O. box, c/o" value={address.vatCountry} onChange={handleAddress} onBlur={handleTouched} error={touched.vatCountry && address.vatCountry.length == 0} />
                <InputField name="vatNumber" label="VAT / GST Registration number" value={address.vatNumber} onChange={handleAddress} onBlur={handleTouched} error={touched.vatNumber && address.vatNumber.length == 0} />
              </div>
              <div className="d-flex gap-30 flex-column flex-md-row">
                <InputPhoneNumber name="businessPhone" value={address.businessPhone} onChange={handleAddress} onBlur={handleTouched} error={touched.businessPhone && address.businessPhone.length < 3 }/>
                <div className="w-100 d-none d-md-block"/>
              </div>
            </div>
            <button className={`submit  ${!validate(2) && "error"}`} onClick={() => {setIndex(3); handleAddress("edit2", false)}} disabled={!validate(2)}>Continue to Bank Account</button>
          </> : 
          <article className="d-flex flex-column">
            <span className="font-weight-bolder">Business name</span>
            <span>{address.businessName}</span>
            <span className="font-weight-bolder">Business address</span>
            <span>{address.businessCountry}</span>
            <span>{address.businessName1}</span>
            <span>{address.businessStreet}</span>
            <span>{address.businessApartment}</span>
            <span>{address.businessCity}</span>
            <span>{address.businessState}</span>
            <span>{address.businessZipCode}</span>
            <span>{address.businessPhone}</span>
            <span className="font-weight-bolder">VAT / GST Registration information</span>
            <span>{address.vatCountry}</span>
            <span>{address.vatNumber}</span>
          </article>
          )
        }     
      </section>
      <section>
        <div className={`title ${index > 2 && "active"}`}>
          <p>Bank Account</p>
          {
            !address.edit3 ?
            <span onClick={() => console.log("Ree")} className="pointer"><BorderColorIcon /> Edit</span> :
            <span>Step 3 of 3</span>
          }
        </div>
        {
          index > 2 && (address.edit3 ? 
          <>
            <div className="form">
            <p>Before creating your listing, please add  a valid bank account number which will be used to easily payput funds from products sold. </p>
            <p className="font-weight-bolder">Bank Account Holder Address</p>
            <div className="d-flex gap-30 flex-column flex-md-row">
              <InputField name="holderCountry" label="Country" value={address.holderCountry} onChange={handleAddress} onBlur={handleTouched} error={touched.holderCountry && address.holderCountry.length == 0}/>
              <div className="w-100 d-none d-md-block"/>
            </div>
            <div className="d-flex gap-30 flex-column flex-md-row">
              <InputField name="holderStreet" label="Street and number, P.O. box, c/o" value={address.holderStreeteet} onChange={handleAddress} onBlur={handleTouched} error={touched.holderStreet && address.holderStreet.length == 0} />
              <InputField name="holderApartment" label="Apartment, suite, uint, building, floor, etc. (optional)"  onChange={handleAddress} onBlur={handleTouched}/>
            </div>
            <div className="d-flex gap-30 flex-column flex-md-row">
              <InputField name="holderCity" label="City" value={address.holderCity} onChange={handleAddress} onBlur={handleTouched} error={touched.holderCity && address.holderCity.length == 0} />
              <div className="d-flex gap-30 flex-column flex-sm-row">
                <InputField name="holderState" label="State"  value={address.holderState} onChange={handleAddress} onBlur={handleTouched} error={touched.holderState && address.holderState.length == 0}/>
                <InputField name="holderZipCode" label="Zip code" value={address.holderZipCode} onChange={handleAddress} onBlur={handleTouched} error={touched.holderZipCode && address.holderZipCode.length == 0} />
              </div>
            </div>
            <p className="d-flex align-itmes-center">
              <span className="font-weight-bolder">Bank Account Holder Name &nbsp;</span> 
              <HtmlTooltip title="The name you enter should match with the name associated with the bank account">
                <InfoOutlinedIcon />
              </HtmlTooltip>
            </p>
            <div className="d-flex gap-30 flex-column flex-md-row">
              <InputField name="holderName" label="Business name" value={address.holderName} onChange={handleAddress} onBlur={handleTouched} error={touched.holderName && address.holderName.length == 0}/>
              <div className="w-100 d-none d-md-block"/>
            </div>
            <p className="d-flex align-itmes-center">
              <span className="font-weight-bolder">IBAN  &nbsp;</span> 
              <HtmlTooltip title="Your international bank account number (IBAN) is the
                account number usd for routing funds to your bank account. Please use the 22 charactrs from your bank statement.">
                <InfoOutlinedIcon />
              </HtmlTooltip>
            </p>
            <div className="d-flex gap-30 flex-column flex-md-row">
              <InputField name="holderIBAN" placeholder="Up to 34 characters" value={address.holderIBAN} onChange={handleAddress} onBlur={handleTouched} error={touched.holderIBAN && address.holderIBAN.length == 0}/>
              <div className="w-100 d-none d-md-block"/>
            </div>
            <p className="d-flex align-itmes-center">
              <span className="font-weight-bolder">BIC &nbsp;</span>
              <HtmlTooltip title="Your bank identifier code (BIC) is the code for your
                particular bank. Example: ABCDITA1 or ABCDITA1A12.
                Please use the characters from your bank statement.
                (8 or 11 characters)">
                <InfoOutlinedIcon />
              </HtmlTooltip>
            </p>
            <div className="d-flex gap-30 flex-column flex-md-row">
              <InputField name="holderBIC" placeholder="8 or 11 characters" value={address.holderBIC} onChange={handleAddress} onBlur={handleTouched} error={touched.holderBIC && address.holderBIC.length == 0}/>
              <div className="w-100 d-none d-md-block"/>
            </div>
            <p className="font-weight-bolder">Bank Account Currency</p>
            <div className="d-flex gap-30 flex-column flex-md-row">
              <InputField name="holderCurrency" placeholder="Choose a currency" value={address.holderCurrency} onChange={handleAddress} onBlur={handleTouched} error={touched.holderCurrency && address.holderCurrency.length == 0}/>
              <div className="w-100 d-none d-md-block"/>
            </div>
          </div>
          <button className={`submit  ${!validate(3) && "error"}`} onClick={() => onSubmit()} disabled={!validate(3)}>Verify Bank Account</button>
          </> : 
          <article className="d-flex flex-column">
            <span>{address.country}</span>
            <span>{address.name}</span>
            <span>{address.street}</span>
            <span>{address.apartment}</span>
            <span>{address.city}</span>
            <span>{address.state}</span>
            <span>{address.zipCode}</span>
            <span>{address.phone}</span>
          </article>
          )
        }     
      </section>

    </div>
    <Footer />
    </>
  );
};
export default CreateShipFromAddress;
