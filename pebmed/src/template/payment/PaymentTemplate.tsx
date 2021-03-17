import React from 'react';
import { useRouter } from 'next/router';

export function PaymentTemplate() {
	const router = useRouter();
	const { pid: planId } = router.query;

	return <div>Payment id = {planId}</div>;
}
