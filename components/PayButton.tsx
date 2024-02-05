import React from "react";
import { PaystackButton } from "react-paystack";
import { toast } from "react-toastify";

const PayButton = ({
	amount,
	email,
}: {
	amount: number;
	email: string;
}) => {
	const publicKey =
		"pk_test_a5558592ba1025b36a2a71d39230856bea5ed208";
	const [reference, setReference] = React.useState("");

	const handlePaystackSuccessAction = (
		reference: any
	) => {
		alert("Payment success");

		// handle payment success
	};

	const componentProps = {
		email,
		amount,
		publicKey,
		text: "Pay Now",
		onSuccess: (reference: any) =>
			handlePaystackSuccessAction(reference),
		onClose: () => alert("Payment canceled by user."),
	};

	return <PaystackButton {...componentProps} />;
};

export default PayButton;
