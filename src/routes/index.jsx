import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddMobileNumber from "../pages/Authentication/AddMobileNumber";
import ChangeNewPassword from "../pages/Authentication/ChangeNewPassword";
import ChangeYourName from "../pages/Authentication/ChangeYourName";
import ChangeYourPassword from "../pages/Authentication/ChangeYourPassword";
import ChooseMethod from "../pages/Authentication/ChooseMethod";
import Congratulations from "../pages/Authentication/Congratulations";
import CreateNewPassword from "../pages/Authentication/CreateNewPassword";
import ForgetPassword from "../pages/Authentication/ForgetPassword/index";
import JoinVerify from "../pages/Authentication/JoinVerify";
import Registration from "../pages/Authentication/Registration";
import SignIn from "../pages/Authentication/SignIn";
import SingleUseCode from "../pages/Authentication/SingleUseCode";
import TextATemporaryPassword from "../pages/Authentication/TextATemporaryPassword";
import VerifyItsYouEmail from "../pages/Authentication/VerifyItsYouEmail";
import VerifyItsYouPhone from "../pages/Authentication/VerifyItsYouPhone";
import Welcome from "../pages/Authentication/Welcome";
import HomePage from "../pages/HomePage";
import MainPage from "../pages/HomePage/main";
import RecentlyViewedItems from "../pages/HomePage/RecentlyViewedItems";
import TodaysDeals from "../pages/HomePage/TodaysDeals";
import CheckOut from "../pages/ListingDetails/CheckOut";
import ShopingCart from "../pages/ListingDetails/ShopingCart";
import Listings from "../pages/Listings/Listings";
import TextATemporaryPasswordMsg from "../pages/Messages/199";
import MyNichoShop from "../pages/MyNichoShop";
import Account from "../pages/MyNichoShop/Account";
import AccountAddPhoneNumber from "../pages/MyNichoShop/Account/AccountAddPhoneNumber";
import AccountAddYourAddress from "../pages/MyNichoShop/Account/AccountAddYourAddress";
import AccountChangeYourName from "../pages/MyNichoShop/Account/AccountChangeYourName";
import AccountUpdate from "../pages/MyNichoShop/Account/AccountUpdate";
import AccountUpdateYourEmailAddress from "../pages/MyNichoShop/Account/AccountUpdateYourEmailAddress";
import AccountUpdateYourRegAddress from "../pages/MyNichoShop/Account/AccountUpdateYourRegAddress";
import ChangeAccountType from "../pages/MyNichoShop/Account/ChangeAccountType";
import CloseAccount from "../pages/MyNichoShop/Account/CloseAccount";
import CloseRequest from "../pages/MyNichoShop/Account/CloseRequest";
import RequestCancel from "../pages/MyNichoShop/Account/RequestCancel";
import RequestProcess from "../pages/MyNichoShop/Account/RequestProcess";
import Addresses from "../pages/MyNichoShop/Addresses";
import AddressAddYourAddress from "../pages/MyNichoShop/Addresses/AddressAddYourAddress";
import AddressNotAddedYet from "../pages/MyNichoShop/Addresses/AddressNotAddedYet";
import AddressYourShippingAddress from "../pages/MyNichoShop/Addresses/AddressYourShippingAddress";
import CreateShipFromAddress from "../pages/MyNichoShop/Addresses/CreateShipFromAddress";
import Bidding from "../pages/MyNichoShop/Bidding";
import BrowseHelp from "../pages/MyNichoShop/HelpContact/BrowseHelp";
import CallUs from "../pages/MyNichoShop/HelpContact/CallUs";
import ContactUs from "../pages/MyNichoShop/HelpContact/ContactUs";
import EmailUs from "../pages/MyNichoShop/HelpContact/EmailUs";
import SendUsDocumentation from "../pages/MyNichoShop/HelpContact/SendUsDocumentation";
import Messages from "../pages/MyNichoShop/Messages";
import Order from "../pages/MyNichoShop/Purchases/Order";
import CancleOrderDetail from "../pages/MyNichoShop/Purchases/Order/CancleOrderDetail";
import PurchaseClaim from "../pages/MyNichoShop/Purchases/PurchaseClaim";
import PurchaseOpen from "../pages/MyNichoShop/Purchases/PurchaseOpen";
import PurchaseReportItem from "../pages/MyNichoShop/Purchases/PurchaseReportItem";
import PurchasesCancelledOrder from "../pages/MyNichoShop/Purchases/PurchasesCancelledOrder";
import SellerCentral from "../pages/MyNichoShop/SellerCentral";
import ContactBuyer from "../pages/MyNichoShop/SellerCentral/ContactBuyer";
import CreateListing from "../pages/MyNichoShop/SellerCentral/CreateListing/CreateListing";
import CreateListing_multiple from "../pages/MyNichoShop/SellerCentral/CreateListing_multiple/CreateListing_multiple";
import SellerCentralListing from "../pages/MyNichoShop/SellerCentral/Listing";
import SellerCentralListingOutOfStock from "../pages/MyNichoShop/SellerCentral/Listing/OutOfStock";
import SellerCentralOrder from "../pages/MyNichoShop/SellerCentral/Order";
import SellerCentralOrderCancellations from "../pages/MyNichoShop/SellerCentral/Order/Cancellations";
import CancelItem from "../pages/MyNichoShop/SellerCentral/Order/Cancellations/CancelItem";
import CancellationApproved from "../pages/MyNichoShop/SellerCentral/Order/Cancellations/CancellationApproved";
import CancelledItems from "../pages/MyNichoShop/SellerCentral/Order/Cancellations/CancelledItems";
import OrderCancelled from "../pages/MyNichoShop/SellerCentral/Order/Cancellations/OrderCancelled";
import Claims from "../pages/MyNichoShop/SellerCentral/Order/SellerCentralDetails/Claims";
import InTransit from "../pages/MyNichoShop/SellerCentral/Order/SellerCentralDetails/InTransit";
import NotYetPaid from "../pages/MyNichoShop/SellerCentral/Order/SellerCentralDetails/NotYetPaid";
import NotYetSheppid from "../pages/MyNichoShop/SellerCentral/Order/SellerCentralDetails/NotYetSheppid";
import OrderDetails from "../pages/MyNichoShop/SellerCentral/Order/SellerCentralDetails/OrderDetails";
import OrderInvoice from "../pages/MyNichoShop/SellerCentral/Order/SellerCentralDetails/OrderInvoice";
import Returns from "../pages/MyNichoShop/SellerCentral/Order/SellerCentralDetails/Returns";
import ViewDetails from "../pages/MyNichoShop/SellerCentral/Order/SellerCentralDetails/ViewDetails";
import SellerCentralOverview from "../pages/MyNichoShop/SellerCentral/Overview";
import ProductInfo from "../pages/MyNichoShop/SellerCentral/ProductInfo";
import ConfirmShipment from "../pages/MyNichoShop/SellerCentral/Shipment";
import StartSelling from "../pages/MyNichoShop/SellerCentral/StartSelling";
import WatchList from "../pages/MyNichoShop/WatchList";
import PaymentMethod from "../pages/PaymentMethod";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";


const RootRoute = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* private routes */}
                    <Route element={<PrivateRoute />}>
                        {/* 
                            HomePage > ./
                            HomePage > recently-viewed-items
                            HomePage > todays-deals
                        */}
                        <Route path="/" element={<HomePage />} />
                        <Route path="/main" element={<MainPage />} />
                    </Route>

                    <Route
                        path="/recently-viewed-items"
                        element={<RecentlyViewedItems />}
                    />
                    <Route path="/todays-deals" element={<TodaysDeals />} />

                    <Route path="/StartSelling" element={<StartSelling /> } />
                    <Route path="/CreateListing" element={<CreateListing /> } />
                    <Route path="/CreateListing_multiple" element={<CreateListing_multiple /> } />
                    <Route path="/listing_detail" element={<SellerCentralListing /> } />

                    {/* public routes */}
                    <Route element={<PublicRoute />}>
                        {/* 
                        Authentication > registration
                        Authentication > signin
                        Authentication > single-use-code
                        Authentication > text-a-temporary-password
                        Messages > text-a-temporary-password-msg (199 page)
                        Authentication > verify-its-you-email
                        Authentication > verify-its-you-phone
                        Authentication > change-new-password
                        Authentication > change-your-name
                        Authentication > change-your-password
                    */}
                        <Route path="/registration" element={<Registration />} />
                        <Route path="/signin" element={<SignIn />} />
                    </Route>

                    <Route path="/single-use-code" element={<SingleUseCode />} />
                    <Route
                        path="/text-a-temporary-password"
                        element={<TextATemporaryPassword />}
                    />
                    <Route
                        path="/text-a-temporary-password-msg"
                        element={<TextATemporaryPasswordMsg />}
                    />
                    <Route
                        path="/verify-its-you-email"
                        element={<VerifyItsYouEmail />}
                    />
                    <Route
                        path="/verify-its-you-phone"
                        element={<VerifyItsYouPhone />}
                    />
                    <Route
                        path="/change-new-password"
                        element={<ChangeNewPassword />}
                    />

                    <Route path="/change-your-name" element={<ChangeYourName />} />
                    <Route
                        path="/change-your-password"
                        element={<ChangeYourPassword />}
                    />
                    <Route
                        path="/forget-password"
                        element={<ForgetPassword/>}
                    />
                    <Route
                        path="/add-mobile-number"
                        element={<AddMobileNumber />}
                    />
                    <Route path="/user/signup/confirm" element={<Congratulations />} />
                    <Route path="/join-verify" element={<JoinVerify />} />
                    <Route path="/choose-method" element={<ChooseMethod />} />
                    <Route
                        path="/create-new-password"
                        element={<CreateNewPassword />}
                    />
                    <Route path="/welcome" element={<Welcome />} />

                    {/* 
                        MyNichoShop > mynichoshop
                        MyNichoShop > bidding
                        MyNichoShop > watchlist
                        MyNichoShop > purchases > order
                        MyNichoShop > addresses
                        MyNichoShop > messages
                        MyNichoShop > sellercentral
                        MyNichoShop > sellercentral > order
                        MyNichoShop > sellercentral > order > not-yet-paid
                        MyNichoShop > sellercentral > order > order-details
                        MyNichoShop > sellercentral > order > in-transit
                        MyNichoShop > sellercentral > order > view-details
                        MyNichoShop > sellercentral > order > not-yet-sheppid
                        MyNichoShop > sellercentral > order > order-invoice
                        MyNichoShop > sellercentral > product-info
                        MyNichoShop > sellercentral > confirm-shipment
                        MyNichoShop > sellercentral > contact-buyer
                        MyNichoShop > sellercentral > seller-central-order-claims
                        MyNichoShop > help-content > browse-help
                        MyNichoShop > help-content > contact-us
                        MyNichoShop > help-content > call-us
                        MyNichoShop > help-content > email-us
                        MyNichoShop > help-content > send-us-document
                        MyNichoShop > help-content > email-us
                        MyNichoShop > account
                        MyNichoShop > account > close-account
                        MyNichoShop > account > close-request
                        MyNichoShop > account > request-cancel
                        MyNichoShop > account > request-process
                        MyNichoShop > account > change-account-type
                        MyNichoShop > account > change-your-name
                        MyNichoShop > account > verify-you
                        MyNichoShop > account > update-your-email-address
                        MyNichoShop > account > add-your-address
                        MyNichoShop > account > update-your-reg-address
                        MyNichoShop > account > add-phone-number
                        MyNichoShop > purchase > purchase-claim
                        MyNichoShop > purchase > purchase-report-item
                        MyNichoShop > purchase > purchase-open
                    */}

                    <Route path="/mynichoshop" element={<MyNichoShop />} />
                    <Route path="/bidding" element={<Bidding />} />
                    <Route path="/watchlist" element={<WatchList />} />
                    <Route path="/purchases/order" element={<Order />} />
                    <Route
                        path="/purchases/order/cancleorderdetail"
                        element={<CancleOrderDetail />}
                    />
                    <Route
                        path="/purchases/cancelled"
                        element={<PurchasesCancelledOrder />}
                    />
                    <Route path="/addresses" element={<Addresses />} />
                    <Route
                        path="/addresses/you-have-not-added-address-yet"
                        element={<AddressNotAddedYet />}
                    />
                    <Route
                        path="/addresses/add-your-address"
                        element={<AddressAddYourAddress />}
                    />
                    <Route
                        path="/addresses/your-shipping-address"
                        element={<AddressYourShippingAddress />}
                    />
                    <Route
                        path="/addresses/add-ship-from-address"
                        element={<CreateShipFromAddress />}
                    />
                    <Route path="/messages" element={<Messages />} />
                    <Route path="/sellercentral" element={<SellerCentral />} />
                    <Route
                        path="/sellercentral/order"
                        element={<SellerCentralOrder />}
                    />

                    <Route
                        path="/sellercentral/overview"
                        element={<SellerCentralOverview />}
                    />
                    <Route
                        path="/sellercentral/order/cancelitems"
                        element={<CancelItem />}
                    />

                    <Route
                        path="/sellercentral/order/cancelleditems"
                        element={<CancelledItems />}
                    />

                    <Route
                        path="/sellercentral/order/ordercancelled"
                        element={<OrderCancelled />}
                    />

                    <Route
                        path="/sellercentral/order/cancellations"
                        element={<SellerCentralOrderCancellations />}
                    />

                    <Route
                        path="/sellercentral/order/cancellationapproved"
                        element={<CancellationApproved />}
                    />
                    <Route
                        path="/sellercentral/order/not-yet-paid"
                        element={<NotYetPaid />}
                    />
                    <Route
                        path="/sellercentral/order/order-details"
                        element={<OrderDetails />}
                    />
                    <Route
                        path="/sellercentral/order/in-transit"
                        element={<InTransit />}
                    />
                    <Route
                        path="/sellercentral/order/view-details"
                        element={<ViewDetails />}
                    />
                    <Route
                        path="/sellercentral/order/not-yet-sheppid"
                        element={<NotYetSheppid />}
                    />
                    <Route
                        path="/sellercentral/order/order-invoice"
                        element={<OrderInvoice />}
                    />
                    <Route
                        path="/sellercentral/order/returns"
                        element={<Returns />}
                    />
                    <Route
                        path="/sellercentral/order/claims"
                        element={<Claims />}
                    />
                    <Route
                        path="/sellercentral/product-info"
                        element={<ProductInfo />}
                    />
                    <Route
                        path="/sellercentral/confirm-shipment"
                        element={<ConfirmShipment />}
                    />
                    <Route
                        path="/help-content/contact-buyer"
                        element={<ContactBuyer />}
                    />
                    <Route
                        path="/help-content/browse-help"
                        element={<BrowseHelp />}
                    />
                    <Route
                        path="/help-content/contact-us"
                        element={<ContactUs />}
                    />
                    <Route path="/help-content/call-us" element={<CallUs />} />
                    <Route path="/help-content/email-us" element={<EmailUs />} />
                    <Route
                        path="/help-content/send-us-document"
                        element={<SendUsDocumentation />}
                    />
                    <Route path="/account" element={<Account />} />
                    <Route
                        path="/account/close-account"
                        element={<CloseAccount />}
                    />
                    <Route
                        path="/account/close-request"
                        element={<CloseRequest />}
                    />
                    <Route
                        path="/account/request-cancel"
                        element={<RequestCancel />}
                    />
                    <Route
                        path="/account/request-process"
                        element={<RequestProcess />}
                    />
                    <Route
                        path="/account/change-account-type"
                        element={<ChangeAccountType />}
                    />
                    <Route
                        path="/account/change-your-name"
                        element={<AccountChangeYourName />}
                    />
                    <Route
                        path="/account/verify-you"
                        element={<AccountChangeYourName />}
                    />
                     <Route
                        path="/account/update"
                        element={<AccountUpdate />}
                    />
                    <Route
                        path="/account/update-your-email-address"
                        element={<AccountUpdateYourEmailAddress />}
                    />
                    <Route
                        path="/account/add-your-address"
                        element={<AccountAddYourAddress />}
                    />
                    <Route
                        path="/account/update-your-reg-address"
                        element={<AccountUpdateYourRegAddress />}
                    />
                    <Route
                        path="/account/add-phone-number"
                        element={<AccountAddPhoneNumber />}
                    />

                    <Route
                        path="/purchase/purchase-claim"
                        element={<PurchaseClaim />}
                    />
                    <Route
                        path="/purchase/purchase-report-item"
                        element={<PurchaseReportItem />}
                    />
                    <Route
                        path="/purchase/purchase-open"
                        element={<PurchaseOpen />}
                    />

                    {/* 
                        ListOfListing
                    */}
                    <Route
                        path="/sellercentral/listing"
                        element={<SellerCentralListing />}
                    />
                    <Route
                        path="/sellercentral/listing/out-of-stock"
                        element={<SellerCentralListingOutOfStock />}
                    />

                <Route path="/list-of-listing" element={<Listings />} />

                    {/* 
                        ListingDetails > shoping-card 
                        ListingDetails > checkout
                    */}
                    <Route path="/shoping-cart" element={<ShopingCart />} />
                    <Route path="/checkout" element={<CheckOut />} />
                    {/* 
                        payment method
                    */}
                    <Route path="/payment-method" element={<PaymentMethod />} />
                </Routes>
            </BrowserRouter>
            {/* <FormFooter /> */}
        </>
    );
};

export default RootRoute;
