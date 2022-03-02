import DeliveryAddress from "../../Components/DeliveryAddress/DeliveryAddress";
import PayCard from "../../Components/PayCard/PayCard";
import ProductPay from "../../Components/ProductPay/ProductPay";


const Checkout = () => {
  return (
    <>
      <div className="osahan-checkout">
        <div className="d-none">
          <div className="bg-primary border-bottom p-3 d-flex align-items-center">
            <a className="toggle togglew toggle-2" href="#"><span></span></a>
            <h4 className="font-weight-bold m-0 text-white">Checkout</h4>
          </div>
        </div>
        {/* checkout  */}
        <div className="container position-relative">
          <div className="py-5 row">
            <div className="col-md-8 mb-3">
              <div>
                <DeliveryAddress />
                <PayCard />
              </div>
            </div>
            <div className="col-md-4">
              <ProductPay />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
