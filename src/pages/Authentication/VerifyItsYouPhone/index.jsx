import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "./../../../assets/logo/logo.svg";
import axios from "axios";
import OTPInput from "otp-input-react";
import { useCookies } from "react-cookie";
import "react-phone-number-input/style.css";
import { useDispatch, useSelector } from "react-redux";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import { AddMobile, clearErrors, VerifyMobile } from "../../../actions/mobileActions";
import { forgotRquest, VerifyOTP } from "../../../actions/userActions";
import ErrorIcon from "../../../assets/form-social/toast_error.png";
import Footer from "../../../components/auth/Footer";
import { getLocalstore, removeLocalstore, setLocalstore } from "../../../helper/localstore/localstore";
const Base_url = "https://stage-api.nichoshop.com/api";


const VerifyItsYouPhone = () => {

    const user = getLocalstore("_userLogin");
    const data = getLocalstore("verifyphone");
    const dataa = getLocalstore("choose_method");
    const forgotData = getLocalstore("forgot_data")
    const forgotOtpSendEmail = getLocalstore("otpEmailSend");

    const isRequestedOtp = getLocalstore("isRequestedOtp");
    const [cookies, setCookie] = useCookies("RememberMe_Nichoshop");
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const [getSocCode, setSocCode] = useState(null);
    const [getFormSubmit, setFormSubmit] = useState(false);
    const [otpss, setotpss] = useState(false);
    const { error, verify } = useSelector(state => state.otp)

    const soccodeHandler = (value) => {
        setSocCode(value);
    }

    useEffect(() => {
        if (!isRequestedOtp) navigate('/');
    }, [navigate, forgotData])

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
                y: 55,
            },
        }).showToast();
    }

    const formHandler = async (e) => {
        try {
            //console.log(getSocCode); event.preventDefault(); return false;
            if (forgotData?.userId) {

                let payload = {};
                payload = {
                    userId: forgotData.userId,
                    code: getSocCode,
                }
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                    },
                };
                console.log(payload)

                e.preventDefault();
                const { data } = await axios.post(
                    `${Base_url}/user/forgot-password/confirm`,
                    JSON.stringify(payload),
                    config
                );

                console.log(data)

                if (data.code == 1) {
                    navigate("/change-new-password");
                }

                //dispatch(VerifyOTP({userId: forgotData.userId,code:getSocCode})); 
                setotpss(true);
            } else { 
                dispatch(VerifyMobile(getSocCode))

                setotpss(true);
                //e.preventDefault();
                //console.log(getSocCode); event.preventDefault(); return false;
            }
        } catch (e) {
            console.log(e);
        }
    };

    const ResendTextsSUC = async (e) => {
        let type = "Mobile number";
        let details = data;
        if (forgotData?.userId) {
            let payload = {};
            if (forgotOtpSendEmail) {
                payload = {
                    userId: forgotData.userId,
                    sendSUCOnEmail: true,
                    sendSUCOnPhone: false
                }
                details = forgotData?.email;
                type = "Email";
            } else {
                payload = {
                    userId: forgotData.userId,
                    sendSUCOnEmail: false,
                    sendSUCOnPhone: true
                }
                details = forgotData.phoneNumber;
            }

            forgotRquest(payload);
            setotpss(false)
        } else {
            dispatch(AddMobile(data));
            setotpss(false)
        }


        Toastify(
            {
                text: `We’ve sent a Single-Use Code (SUC) to this ${details} ${type}`,
                className: "info",
                style: {
                    background:
                        "linear-gradient(to right, #00b09b, #96c93d)",
                    size: 10,
                },
                close: true,
            }).showToast();

    }

    useEffect(() => {
        if (error) {
            console.log(dataa + '111')
            setotpss(false);
            ShowErrorMsg(error);
            dispatch(clearErrors());
        } else {
            console.log(dataa + 'sadsdfsfa')
            console.log(otpss + 'otpss')
            console.log(verify + 'verify')
            //if(dataa?.type ==="Forget_OTP"){
            //if (verify) {
            if (otpss) {
                navigate("/change-new-password");
                removeLocalstore("single-use-code");
                setotpss(false)
                //}
            }
            // } else {

            //     if (verify) {
            //         alert('fdsf');
            //         if(otpss){
            //             if(data?.type === "add_phone"){
            //                 user.phone = "+"+data;
            //                 user.phoneConfirmed = "true";
            //                 setLocalstore("_userLogin",user);
            //             }
            //             removeLocalstore("choose_method");
            //             removeLocalstore("isRequestedOtp");
            //             removeLocalstore("single-use-code");
            //             setotpss(false)
            //             setCookie("RememberMe_Nichoshop", user, {
            //                 path: "/"
            //             });
            //             navigate("/");
            //         }
            //     }
            // }
        }
    }, [dispatch, navigate, error]);


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
                                <p className="text-center ">
                                    A text with a Single-Use Code (SUC) has
                                </p>
                                {forgotData?.userId ?
                                    forgotOtpSendEmail ?
                                        <>
                                            <p className="text-center mb-2">
                                                been sent to your email:
                                            </p>
                                            <p className='mb-5'>{forgotData?.email}</p>
                                        </> :
                                        <>
                                            <p className="text-center mb-2">
                                                been sent to your phone number:
                                            </p>
                                            <p className='mb-5'>+{forgotData?.phoneNumber}</p>
                                        </> :
                                    <>
                                        <p className="text-center mb-2">
                                            been sent to your phone number:
                                        </p>
                                        <p className='mb-5'>+{data}</p>
                                    </>
                                }
                                <h2 className="mb-5">Fill the Code</h2>

                                <Form onSubmit={formHandler}>
                                    <Form.Group className="mb-3">
                                        <OTPInput
                                            inputStyles={{
                                                width: '20%',
                                                height: 68,
                                                BorderColor: '#E4E4EE',
                                                marginRight: 10
                                            }}
                                            className="otp-root"
                                            value={getSocCode}
                                            onChange={soccodeHandler}
                                            autoFocus
                                            OTPLength={6}
                                            otpType="number"
                                            disabled={false}
                                            secure />
                                        <span className="ui-form-lable-error">
                                            {/* {getFormSubmit &&
                                                getSocCode.length < 1 && (
                                                    <>
                                                        That’s not a match. Try
                                                        again
                                                    </>
                                                )} */}
                                        </span>

                                        <p className="text-center mt-3 font-weight-bold link font-weight-bold" onClick={ResendTextsSUC}>
                                            Resend
                                        </p>
                                    </Form.Group>
                                    <div className="ui-vy-button">
                                        <Button
                                            variant="contained"
                                            type="submit"
                                            fullWidth
                                        >
                                            Verify
                                        </Button>
                                    </div>
                                    <p className="text-center mt-3 font-weight-bold link font-weight-bold" onClick={() => {
                                        navigate('/add-mobile-number')
                                    }}>
                                        Change Phone Number
                                    </p>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="add-mobile-footer-wrapper">
                <Footer />
            </div>
        </>
    );
};

export default VerifyItsYouPhone;
