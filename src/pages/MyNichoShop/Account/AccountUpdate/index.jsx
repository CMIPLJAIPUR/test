import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import AccountChangeYourName from "../../../MyNichoShop/Account/AccountChangeYourName/index"
import ChangeAccountType from "../../../MyNichoShop/Account/ChangeAccountType/index"
import AccountUpdateYourEmailAddress from "../../../MyNichoShop/Account/AccountUpdateYourEmailAddress/index"
import AccountAddYourAddress from "../../../MyNichoShop/Account/AccountAddYourAddress/index"
import AccountUpdateYourRegAddress from "../../../MyNichoShop/Account/AccountUpdateYourRegAddress/index"
import AccountAddPhoneNumber from "../../../MyNichoShop/Account/AccountAddPhoneNumber/index"
import ChangeNewPassword from "../../../Authentication/ChangeYourPassword/index"
import CloseAccount from "../../../MyNichoShop/Account/CloseAccount/index"
import Menu from "../../../../components/menu/Menu";
import AccountFooter from "../../../../components/accountfooter/AccountFooter";
import Breadcrumbs from "../../../../components/breadcrumbs/Breadcrumbs";

function AccountUpdate() {
  const { state } = useLocation();

  return (
    <div>
      {state?.type === 'userName' ?
        <AccountChangeYourName currentUsername={state?.data}/> :
        state?.type == 'email' ?
         <AccountUpdateYourEmailAddress currentEmail={state?.data}/>:
          state?.type === 'password' ?
            <ChangeNewPassword/> :
            state?.type === 'account' ?
             <ChangeAccountType/>:
              state?.type === 'phoneNumber'?
                <AccountAddPhoneNumber password={state?.data}/> :
                state?.type === 'address' ?
                  <AccountAddYourAddress address={state?.data}/> :
                  state?.type === '123' ?
                        <div className="home-page">
      <Menu />
  
        <div className="cs_section ne_css account-pg accoutn-details-wrpr">
          <div className="container_no">
            <Breadcrumbs links={[{title: "My NichoShop", href: "jhj"}]} lastElemTitle="account" />
            <h3 className="all_heading">Account</h3>
            <div className="inner_content no_padd">
              <div className="inner_content-two">
                
             <CloseAccount/>
              </div>
            </div>
          </div>
        </div>
     
      <AccountFooter style={{ position: "relative" }} />
                    </div>
                    :null
 



// AccountUpdateYourRegAddress


      }
    </div>
  )
}

export default AccountUpdate
