import AddressModal from "../../Components/AddressModal/AddressModal";
import BottomBar from "../../Components/BottomBar/BottomBar";
import InviteModal from "../../Components/InviteModal/InviteModal";
import PaymentModal from "../../Components/PaymentModal/PaymentModal";
import PrivacyContent from "../../Components/PrivacyContent/PrivacyContent";
import ProfileBar from "../../Components/ProfileBar/ProfileBar";


const PrivacyPolicy = () => {
  return (
    <>
      <div className="osahan-profile">
        <div className="d-none">
          <div className="bg-primary border-bottom p-3 d-flex align-items-center">
            <a className="toggle togglew toggle-2" href="#"><span></span></a>
            <h4 className="font-weight-bold m-0 text-white">Profile</h4>
          </div>
        </div>
        {/* <!-- profile --> */}
        <div className="container position-relative">
          <div className="py-5 osahan-profile row">
            <div className="col-md-4 mb-3">
              <ProfileBar />
            </div>
            <div className="col-md-8 mb-3">
              <PrivacyContent />
            </div>
          </div>
        </div>
        {/* <!-- Footer --> */}
        <BottomBar />
      </div>
      {/* <!-- payment modal --> */}
      <div className="modal fade" id="paycard" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <PaymentModal />
      </div>
      {/* <!-- address modal --> */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <AddressModal />
      </div>
      {/* <!-- Invite Modal--> */}
      <div className="modal fade" id="inviteModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <InviteModal />
      </div>
    </>
  );
};

export default PrivacyPolicy;