export interface PlanDTO {
	id: number;
	storeId: string;
	title: string;
	description: string;
	caption: string;
	fullPrice: number;
	discountAmmount: number;
	discountPercentage: number;
	periodLabel: string;
	period: string;
	discountCouponCode: number;
	order: number;
	priority: number;
	gateway: string;
	splittable: boolean;
	installments: number;
	acceptsCoupon: boolean;
}
