import { PaymentElement, useElements } from "@stripe/react-stripe-js";

const PaymentForm = ({ stripe }) => {
  const elements = useElements();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(PaymentElement),
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PaymentForm;
