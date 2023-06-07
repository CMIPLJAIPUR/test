import {
  Box,
  Button,
  Divider,
  TextField,
  Typography,
  Stack,
} from "@mui/material";
import { useState,useEffect } from "react";
import AccountFooter from "../../../../components/accountfooter/AccountFooter";
import { ReactComponent as Logo } from "./../../../../assets/logo/logo.svg";
import "./accountchangeyourname.scss";
import ToastError from "../../../../assets/form-social/toast_error.png";
import showToast from "../../../../helper/toasts/toasts";
import { useDispatch, useSelector } from "react-redux";
import { clearEmail, checkUsernameIsAvailable } from "../../../../actions/userActions";
import {useNavigate} from 'react-router-dom'




const AccountChangeYourName = ({ currentUsername }) => {
  const navigate = useNavigate()
  //State
  const [userName, setUserName] = useState("");
  const [canSubmitForm, setCanFormSubmit] = useState(true);

 //Dispatcher
    const dispatch = useDispatch();
    const state = useSelector(state=>state.email)
    console.log(state)


  const handleChangeInput = (e) => {
    const { value } = e.target;
    setUserName(value);
    setCanFormSubmit(true);
  };
  
  const submitUserNameHandler = () => {
    if (!userName) {
      setCanFormSubmit(false);
      const toastStyle = {
        background: "#FFF0F0",
        size: 10,
        color: "#FF6666",
      };
      showToast("Enter New Name", toastStyle, ToastError);
    } else {
      setCanFormSubmit(true);
      dispatch(checkUsernameIsAvailable({ "username": userName }));
    }
  };

  useEffect(() => {
    if (state?.email?.code === 1) {
      dispatch(clearEmail())
        navigate('/account')
    }
  },[state])
    



  return (
    <Box className="account-change-wrapper">
      <Box className="ui-common-logo">
        <Logo />
      </Box>
      <Box className="account-content-wrapper">
        <Typography className="change-heading">Change your username</Typography>

        <Divider sx={{ marginY: "20px", height: 1.5, borderColor: "black" }} />
        <Typography className="change-caption">
          <span style={{ fontWeight: 600, color: "#81818F" }}>
            Current username :
          </span>
          {currentUsername} <br />
          You can only change your username on every 30 days.
        </Typography>
        <Stack className="text-field-wrapper">
          <Box className="input-box-wrapper">
            <TextField
              id="outlined-basic"
              label="New NichoShop username"
              variant="outlined"
              className="text-field-input"
              error={!canSubmitForm || state?.email?.code == 0}
              onChange={handleChangeInput}
              value={userName}
            />
            <span className="input-error-lable">
              {!canSubmitForm && "Enter Username"}
            </span>
             <span className="input-error-lable">
              {state?.email?.code == 0 && state?.email?.message}
            </span>
             {/* <span className="input-success-lable">
              {state?.email?.code == 1 && state?.email?.message}
            </span> */}
          </Box>
          <Button
            variant="contained"
            className="change-submit-btn"
            sx={{textTransform: 'unset'}}
            onClick={submitUserNameHandler}
          >
            Save changes
          </Button>
        </Stack>
      </Box>
      <AccountFooter />
    </Box>
  );
};

export default AccountChangeYourName;
