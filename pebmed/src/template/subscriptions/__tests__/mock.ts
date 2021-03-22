/* eslint-disable @typescript-eslint/no-explicit-any */

export const listSubscriptionMock = (): any => {
	return Promise.resolve({
		data: [
			{
				id: 32,
				storeId: 'anual_parcelado_iugu',
				title: 'Premium Anual (Iugu)',
				description: 'Parcelado',
				caption: '7 Dias Grátis',
				fullPrice: 600,
				discountAmmount: 60,
				discountPercentage: 0.1,
				periodLabel: 'mês',
				period: 'annually',
				discountCouponCode: null,
				order: 2,
				priority: 2,
				gateway: 'iugu',
				splittable: true,
				installments: 12,
				acceptsCoupon: true
			},
			{
				id: 31,
				storeId: 'anual_parcelado_iugu',
				title: 'Premium Mensal (Iugu)',
				description: 'Parcelado',
				caption: '7 Dias Grátis',
				fullPrice: 60,
				discountAmmount: 3,
				discountPercentage: 5,
				periodLabel: 'mês',
				period: 'month',
				discountCouponCode: null,
				order: 2,
				priority: 2,
				gateway: 'iugu',
				splittable: true,
				installments: 1,
				acceptsCoupon: true
			}
		]
	});
};
