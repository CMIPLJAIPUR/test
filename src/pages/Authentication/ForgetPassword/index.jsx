import { TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import "react-phone-number-input/style.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import { clearErrors, forgotPassword } from "../../../actions/userActions";
import { usePostLoginMutation } from "../../../api/services/authApi";
import FormFooter from "../../../components/FormFooter/FormFooter";
import { FORGOT_PASSWORD_INITIAL } from "../../../constants/userConstants";
import ToastError from "./../../../assets/form-social/toast_error.png";
import { ReactComponent as Logo } from "./../../../assets/logo/logo.svg";

const ForgetPassword = () => {

    const recaptchaRef = useRef(null)
    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {
        dispatch({ type: FORGOT_PASSWORD_INITIAL});
    },[])

    // login api
    const [loginApi, { isLoading }] = usePostLoginMutation();
    const pwdInputRef = useRef();
    const { error,fp,data } = useSelector(state=>state.forgotPassword)

    // is password show & hidden
    const [isPwdShow, setPwdShow] = useState(false);
    // pasword show & hidden
    const isPwdShowedHandler = () => {
        if (pwdInputRef.current.querySelector("input").type == "password") {
            pwdInputRef.current.querySelector("input").type = "text";
            setPwdShow(true);
        } else {
            pwdInputRef.current.querySelector("input").type = "password";
            setPwdShow(false);
        }
    };

    // submit form
    const [getEmail, setEmail] = useState("");
    const [getCaptcha, setCaptcha] = useState("");
    const [getFormSubmit, setFormSubmit] = useState(false);
    const [getfp,setfp]=useState(false)
    // full name input handler

    const emailHandler = (e) => {
        setEmail(e.target.value);
    };

    const captchaHandler = (value) => {
        setCaptcha(value);
    };

    const showErrorMsg = (msg) => {
        Toastify({
            text: msg,
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
    }
    // form data submit
    const formHandler = async (e) => {
        e.preventDefault();
        setFormSubmit(true);
        if (getEmail.length !== 0 && getCaptcha.length !== 0) {
            dispatch(forgotPassword(getEmail,getCaptcha))
            setfp(true)
        }
    };

    useEffect(() => {
        if (error) {
            setfp(false);
            showErrorMsg(error);
            dispatch(clearErrors());
        } else {
            if (data) {
                if(getfp){
                    navigate("/choose-method");
                    setfp(false);
                }      
            }
        }
    }, [dispatch, navigate,setfp,fp,data,recaptchaRef,error]);


    return (
        <>
            <div className="ui-form-box">
                <Container>
                    <Row>
                        <Col>
                            <div className="ui-form-logo">
                                <Logo />
                            </div>
                            <div className="ui-form-content">
                                <h4 >Password assistance</h4>
                                <p className="text-center mb-5">
                                    Please enter your email or username
                                </p>
                                <Form onSubmit={formHandler}>
                                    <Form.Group className="mb-3">
                                        <TextField
                                            id="outlined-basic"
                                            label="Email or username"
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            onChange={emailHandler}
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
                                        />
                                        <span className="ui-form-lable-error">
                                            {getFormSubmit &&
                                                getEmail.length < 1 &&
                                                "Please enter your email address"}
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
                                        {isLoading && (
                                            <div
                                                class="spinner-border spinner-border-sm me-3"
                                                role="status"
                                            >
                                                <span class="visually-hidden">
                                                    Loading...
                                                </span>
                                            </div>
                                        )}
                                        Continue
                                    </Button>
                                    <Link to="/text-a-temporary-password">
                                        <p className="mb-2 text-center">
                                            Trouble reset your password?    
                                        </p>
                                    </Link>
                                    <Button variant="outline-primary" onClick={()=>{
                                        navigate('/registration');
                                    }}>
                                        {isLoading && (
                                            <div
                                                class="spinner-border spinner-border-sm me-3"
                                                role="status"
                                            >
                                                <span class="visually-hidden">
                                                    Loading...
                                                </span>
                                            </div>
                                        )}
                                        Register for a new account
                                    </Button>
                                </Form>
                            </div>

                            <div className="ui-form-link text-center">
                                <p>
                                    <p className="fw-bold">
                                        <Link to="#/">
                                            Contact Customer Support
                                        </Link>
                                    </p>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <FormFooter />
        </>
    );
};

export default ForgetPassword;
