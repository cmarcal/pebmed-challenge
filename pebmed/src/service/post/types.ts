export interface Subscribe {
	userId: number;
	offerId: number;
	creditCardNumber: string;
	creditCardExpirationDate: string;
	creditCardHolder: string;
	creditCardCVV: string;
	creditCardCPF: string;
	gateway: string;
	installments: number;
	couponCode: string;
}
