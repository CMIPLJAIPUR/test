// React
import { Formik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import * as yup from "yup";
import { clearErrors, forgotRquest } from "../../../actions/userActions";
import Email from "../../../assets/authentication/email.svg";
import Text from "../../../assets/authentication/get-text.svg";
import Footer from "../../../components/auth/Footer";
import Header from "../../../components/auth/Header";
import ToastError from "./../../../assets/form-social/toast_error.png";
import { getStore } from "./../../../helper/storeHelper";
import "./../auth.css";
import "./index.css";
import { setLocalstore,removeLocalstore } from '../../../helper/localstore/localstore';


const ChooseMethod = () => {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { error,email_pwd } = useSelector(state=>state.forgotPassword)
    const { errors,txt_pwd } = useSelector(state=>state.mobile)

    const datas =  getStore('forgot_data');

    const [authSpinner, setAuthSpinner] = useState(false);
    const [emailsuc,setemailsuc] = useState(false);
    const [textsuc,settextsuc] = useState(false);

    const UsernameSchema = yup.object({
        username: yup
            .string("Enter your Email or Username")
            .required("This email or username doesn't exit."),
    });

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
                y: 40, // vertical axis - can be a number or a string indicating unity. eg: '2em'
            },
        }).showToast();
    }

    const requestForOTP = async(e) => {  
        e.preventDefault();
        let payload = {};
        payload = {
            userId: datas.userId,
            sendSUCOnEmail: true,
            sendSUCOnPhone: false
        }
        removeLocalstore('otpEmailSend');
        setLocalstore('otpEmailSend',true);
        setLocalstore('isRequestedOtp',true);
            
        dispatch(forgotRquest(payload))
        setemailsuc(true);
    };

    const requestForOTPNumber = async(e) => {  
        e.preventDefault();
        let payload = {};
        payload = {
            userId: datas.userId,
            sendSUCOnEmail: false,
            sendSUCOnPhone: true
        }
        removeLocalstore('otpEmailSend');
        setLocalstore('otpEmailSend',false);
        setLocalstore('isRequestedOtp',true);
            
        dispatch(forgotRquest(payload))
        setemailsuc(true);
    };

    useEffect(() => {   

        if (error) {
            settextsuc(false);
            setemailsuc(false);
            showErrorMsg(error);
            dispatch(clearErrors());
        }
        
        if(txt_pwd || email_pwd) {
            navigate("/verify-its-you-phone");
            settextsuc(false);
            setemailsuc(false);
        }
    
    }, [dispatch, navigate,txt_pwd,email_pwd, error]);
    
    return (
        <main>
            <div className="signInContainer authContainer">
                <Header>
                </Header>
                {/* Form Section  */}
                <section className="authFormSection choose-method">
                    <div className="container">
                        <div className="authFormBox">
                            <div className="formTitle text-center ">
                                <h2>
                                    How do you want to reset your password
                                </h2>
                            </div>
                            <div className="mt-5 mb-3">
                                <Formik
                                initialValues={{
                                    username: "",
                                }}
                                validationSchema={UsernameSchema}
                                onSubmit={(values, { setSubmitting }) => {
                                    setSubmitting(true);
                                }}
                                >
                                    {(props) => (
                                        <form onSubmit={props.handleSubmit}>
                                            {authSpinner ? (
                                                <div className="formSpinner">
                                                    <div className="loading"></div>
                                                </div>
                                            ) : null}
                                            <div>
                                                <Link
                                                    className="choose-option"
                                                    to="" onClick={requestForOTP}
                                                >
                                                    <strong>
                                                        <img
                                                            className="email"
                                                            src={Email}
                                                            alt="Email"
                                                        />
                                                        Get an email
                                                    </strong>
                                                    <p className="formError mt-2">
                                                        We’ll send a code to your email: {""}
                                                        <br/>
                                                        <strong>
                                                            {datas?.email}
                                                        </strong>
                                                    </p>
                                                </Link>
                                            </div>
                                            <div className='mb-3'>
                                                <Link
                                                className="choose-option mb-5"
                                                to="" onClick={requestForOTPNumber}
                                                    >
                                                    <strong>
                                                        <img
                                                            className="get-text"
                                                            src={Text}
                                                            alt="Text"
                                                        />
                                                        Get a text
                                                    </strong>
                                                    <p className="formError mt-2">
                                                        We’ll text a code to your phone{" "}
                                                        <br/>
                                                        <strong>{datas?.phoneNumber}</strong>
                                                    </p>
                                                </Link>
                                            </div>
                                        </form>
                                    )}
                                </Formik>
                            </div>
                            <div className="mt-2 mb-3 ">
                                <p className="fw-bold">Having trouble resetting your password?</p>
                            </div>  
                            <p className="mb-2 add-mobile-caption_text">
                                If you no longer use the email address or
                                the mobile phone number associated with your
                                NichoShop account, you can contact{" "}
                                <Link to="/">Customer Support</Link> for
                                help restoring access to your account.
                            </p>
                            <span className="add-mobile-caption_text ">
                                *By selecting to Get a text, mobile phone
                                charges my apply.
                            </span>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </main>
    );
};

export default ChooseMethod;
