/* eslint-disable @typescript-eslint/no-explicit-any */

export const valuesCreateSubscriptionMock = {
	userId: '3ccca6cb-4090-4741-bd27-9dc3d0ac2c02',
	offerId: 32,
	creditCardNumber: '5200000000000000',
	creditCardExpirationDate: '1012',
	creditCardHolder: 'roberto c m junior',
	creditCardCVV: '132',
	creditCardCPF: '12345678910',
	gateway: 'iugu',
	installments: 1,
	couponCode: ''
};

export const subscriptionResponseMock = (): any => {
	return Promise.resolve({
		data: {
			...valuesCreateSubscriptionMock,
			id: '2'
		}
	});
};
