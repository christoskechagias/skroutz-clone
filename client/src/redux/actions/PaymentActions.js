export const paymentAction = (totalCost) => ({
	type: 'PAYMENT_REQUEST',
	payload: totalCost,
});
