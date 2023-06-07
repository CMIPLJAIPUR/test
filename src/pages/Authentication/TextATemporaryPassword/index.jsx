// React
import React, { useState,useEffect,useRef } from "react";
import ToastError from "./../../../assets/form-social/toast_error.png";
// 3rd party components
import { TextField } from "@mui/material";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearErrors, TempPassword } from "../../../actions/userActions";
import { ReactComponent as Logo } from "./../../../assets/logo/logo.svg";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
// Compoenents
import { setLocalstore } from "../../../helper/localstore/localstore";
import { FORGOT_PASSWORD_INITIAL } from "../../../constants/userConstants";

// Styles
import "./textatemporarypassword.css";
import FormFooter from "../../../components/FormFooter/FormFooter";
import ReCAPTCHA from "react-google-recaptcha";

const TextATemporaryPassword = () => {

    const recaptchaRef = useRef(null)
    const [errorMessage,setErrorMessage] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [getEmail, setEmail] = useState("");
    const [getCaptcha, setCaptcha] = useState("");
    const [getFormSubmit, setFormSubmit] = useState(false);

    const captchaHandler = (value) => {
        setCaptcha(value);
    };
     useEffect(() => {
        dispatch({ type: FORGOT_PASSWORD_INITIAL});
    },[])

    const { error,temp_pwd,data } = useSelector(state=>state.forgotPassword);
    const [otpss, setotpss] = useState(false);
    const formHandler = async (e) => {
        e.preventDefault();
        setFormSubmit(true);
        if (getEmail.length !== 0 && getCaptcha.length !== 0) {
             dispatch(TempPassword(getEmail,getCaptcha));
             setotpss(true);
        }
    };
    useEffect(() => {
        if (error) {
            setotpss(false);
            setErrorMessage(error);
            Toastify({
                text: error,
                className: "toastify-center",
                duration: 3000,
                avatar: ToastError,
                style: {
                    background: "#FFF0F0",
                    size: 10,
                    color: "#FF6666",
                },
                offset: {
                    y: 60, // vertical axis - can be a number or a string indicating unity. eg: '2em'
                },
            }).showToast();
          //alert.error(error);
          dispatch(clearErrors());
        } else {
            if (data) { 
                if(otpss){
                    var user = data;
                    user.type = "OTP";
                    setLocalstore("single-use-code",user);
                    navigate("/single-use-code",{email:getEmail});
                    setotpss(false);
                }
            }
        }
      }, [dispatch, navigate,temp_pwd, error,data,otpss]);

     const bindEmail=(e) => {
        setErrorMessage("");
        setEmail(e.target.value);
    }
    return (
         <>
            <div className="ui-form-box">
                <Container>
                    <Row>
                        <Col>
                            <div className="ui-form-logo">
                                <Logo />
                            </div>
                            <div className="ui-form-content ui-form-content-width-auto">
                                <h4 >Text a temporary password</h4>
                                <p className="text-center mb-5">
                                    Enter the username or email address associated with your NichoShop account.
                                </p>
                                <Form onSubmit={formHandler}>
                                    <Form.Group className="mb-3">
                                        <TextField
                                            id="outlined-basic"
                                            label="Email or username"
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            onChange={bindEmail}
                                            value={getEmail}
                                            style={{
                                                width: 352,
                                                height:48,
                                                color: "#B2B2C2",
                                                borderColor: "#E4E4EE",
                                            }}
                                            error={
                                                getFormSubmit &&
                                                getEmail.length < 1 &&
                                                true
                                            }
                                        /><br />
                                        <span className="ui-form-lable-error">
                                            {getFormSubmit &&
                                                getEmail.length < 1 &&
                                                "Please enter your email address"}
                                            {errorMessage &&
                                                errorMessage}
                                        </span>
                                    </Form.Group>
                                     <ReCAPTCHA
                                        ref={recaptchaRef}
                                        className="mt-3 mb-3 captcha"
                                        sitekey="6Lef6nQgAAAAADoRd2Ps76UfUklHu1v5k_BIYCw1"
                                        onChange={captchaHandler}
                                        style={{
                                            display: "block !important",
                                        }}
                                    />
                                    {getFormSubmit && getCaptcha.length < 1 && (
                                        <span className="ui-form-lable-error text-center d-blcok">
                                            Captcha is required! Refresh the page
                                        </span>
                                    )}
                                    <Button variant="primary" className="mb-3" type="submit">
                                        Continue
                                    </Button>
                                    <Button variant="outline-primary" onClick={()=>{
                                        navigate('/signin');
                                    }}>
                                        Cancel
                                    </Button>
                                    <div className="height-120"></div>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <FormFooter />
        </>
    );
};

export default TextATemporaryPassword;
