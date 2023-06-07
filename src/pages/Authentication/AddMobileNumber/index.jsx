// React
import {
    Box,
    FormControl,
    InputAdornment,
    InputLabel,
    OutlinedInput
} from "@mui/material";
import { ErrorMessage, Formik } from "formik";
import MuiPhoneNumber from "material-ui-phone-number";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import * as yup from "yup";
import { AddMobile, clearErrors } from "../../../actions/mobileActions";
import Footer from "../../../components/auth/Footer";
import Logo from "../../../components/logo/Logo";
import ErrorIcon from "../../../assets/form-social/toast_error.png";
import "./../auth.css";
import "./index.scss";


import Cookies from "js-cookie";
import {
    getLocalstore,
    setLocalstore
} from "../../../helper/localstore/localstore";

const AddMobileNumber = () => {
    // console.log(Cookies.get("RememberMe_Nichoshop"));
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const data = getLocalstore("_userLogin");

    useEffect(() => {
        if (data?.phoneNumberVerified) {
            navigate("/");  
        }
    },[])

    const { error, message, add_mob } = useSelector((state) => state.mobile);

    const [authSpinner, setAuthSpinner] = useState(false);
    const [getphone, setphone] = useState({});
    const [getphones, setphones] = useState(false);

    const AddNumberSchema = yup.object({
        phoneNumber: yup
        .string("Enter your Phone Number")
        .required("Phone Number Required"),
    });

    const SUCSchema = yup.object({
        suc: yup
        .string("Enter your SUC")
        .required("The code you entered is different from the one we texted."),
    });

    const ShowErrorMsg = (msg) => {
        Toastify({
            text: msg,
            className: "toastify-center",
            duration: 3000,
            avatar: ErrorIcon,
            style: {
                background: "#FFF0F0",
                size: 10,
                color: "#FF6666",
            },
            offset: {
                y: 45, 
            },
        }).showToast();
    }


    useEffect(() => {
        if (error) {
        setphones(false);
        ShowErrorMsg(error);
        dispatch(clearErrors());
        } else if (add_mob) {   
            if (getphones) {
                setLocalstore("verifyphone", getphone);
                navigate("/verify-its-you-phone");
                setphones(false);
            }
        }
    }, [dispatch, navigate, message, error,add_mob]);

return (
    <Box>
        <div className="ui-form-logo">
            <Logo />
        </div>
        <Box className="flex-center">
            <Box className="wid-30">
            <p className="add-mobile-heading">Add mobile number</p>
            <Formik
                initialValues={{
                    phoneNumber: "",
                    countryCode: "+1",
                }}
                validationSchema={AddNumberSchema}
                onSubmit={async (values, { setSubmitting }) => {
                    setSubmitting(true);
                    const countryCodes = values.countryCode.replace(/[^\w\s*]/gi, "");
                    const phone = countryCodes + values.phoneNumber;
                    setphone(phone);
                    dispatch(AddMobile(phone));
                    setphones(true);
                }}
            >
                {(props) => (
                <form onSubmit={props.handleSubmit}>
                    {authSpinner ? (
                    <div className="formSpinner">
                        <div className="loading"></div>
                    </div>
                    ) : null}
                    <div className="textField">
                        <p className="text-center add-mobile-caption">
                            Add a mobile phone number for a higher level of protection
                            to your NichoShop account. Make sure your mobile number is
                            up to date because it is an important part of your account
                            security.
                        </p>
                        <div className="country-code-container">
                            <FormControl
                                variant="outlined"
                                size="small"
                                className={
                                props.touched.phoneNumber && props.errors.phoneNumber
                                    ? "error country-code countryPhoneCode"
                                    : "country-code countryPhoneCode"
                                }
                                >
                                <InputLabel htmlFor="phoneNumber">
                                    Legal phone number
                                </InputLabel>
                                <OutlinedInput
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    type="text"
                                    className="input-container"
                                    value={props.values.phoneNumber}
                                    onChange={props.handleChange}
                                    endAdornment={
                                        <InputAdornment position="start">
                                        <div className="countryCode">
                                            <MuiPhoneNumber
                                            disabled
                                            className="countryCodeInput"
                                            defaultCountry={"us"}
                                            countryCodeEditable={false}
                                            onChange={(value) =>
                                                props.setFieldValue("countryCode", value)
                                            }
                                            />
                                        </div>
                                        </InputAdornment>
                                    }
                                    label="phoneNumber"
                                />
                            </FormControl>
                            <ErrorMessage name="phoneNumber">
                                {(msg) => <p className="formError">{msg}</p>}
                            </ErrorMessage>
                            <button type="submit" className="themeBtn country-code w-100 my-4">
                                Add mobile number
                            </button>
                        </div>
                    </div>
                </form>
                )}
            </Formik>
            <p className="not-now-option">
                <Link to="/">Not Now</Link>
            </p>
            </Box>
        </Box>
        <div className="add-mobile-footer-wrapper">
            <Footer />
        </div>
    </Box>
    );
};

export default AddMobileNumber;
