import { useEffect, useState } from "react";

import ClaimHeader from "../../../components/Claims/ClaimHeader/index.jsx";
import ClaimDetails from "../../../components/Claims/ClaimDetails";
import ClaimInfo from "../../../components/Claims/ClaimInfo/index.jsx";
import ClaimBtnDialogs from "../../../components/Claims/ClaimBtnDialogs";
import ButtonBox from "../../../components/Claims/ButtonBox/index.jsx";

const ClaimOpen = () => {
  const [claimDetails, setClaimDetails] = useState({});

  useEffect(() => {
    setClaimDetails({
      topic: "You have opened a claim",
      brief: {
        title: "Please be patient - you should hear back from the seller soon",
        descr:
          "If you can't sort something out with the seller, you can ask use to help beginning 30 Sp 2017.",
      },
      claim: {
        status: "Not recieved item",
        orderId: "12345678-123456",
        seller: "seller_username",
      },
      item: [
        {
          info: "EE PAY AS YOU GO 4G prepaid sim card with preloader US $150.50 forcalls, everything in one package",
          condition: "New",
          color: "Blue",
          size: "XL",
          material: "Cotton",
          claimItem: "2 of 3",
        },
      ],
      history: [
        {
          date: "28 Sep 2017",
          topic: "You have opened a claim for not received item",
          claimID: "1234567890",
          claimAmount: "US $1,234.56",
        },
        {
          date: "24 Sep 2017",
          topic: "The seller marked this order as shipped",
        },
        {
          date: "22 Sep 2017",
          topic: "You paid for this order",
          orderDetails: "US $1,234.56(12345678-123456)",
        },
      ],
    });
  }, []);

  return (
    <div className="claim-open">
      <h2>{claimDetails.topic}</h2>

      <ClaimBtnDialogs />

      <div className="claim-open-content">
        <ClaimHeader brief={claimDetails.brief} />
        <div className="claim-open-detail">
          <div className="item-infor d-lg-flex d-md-block justify-content-between">
            <ClaimInfo claimInfo={claimDetails.claim} />

            <ButtonBox btnBox={[true, true, false]} />
          </div>
          <ClaimDetails details={claimDetails} />
        </div>
      </div>
    </div>
  );
};

export default ClaimOpen;
