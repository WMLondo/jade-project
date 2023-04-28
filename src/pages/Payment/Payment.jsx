import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "../../components/Payment/PaymentForm";

const stripePromise = loadStripe(
  "pk_test_51N1pgoJJoAgJEuofIEcxbS8YapZd7NEdlUe42NNA2muDYC9XuJmZPTNSdAuVwFt5Wb1Wuju6aV3JJZijhNbIM84S00sBzAPuzH"
);

const Payment = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
};

export default Payment;
