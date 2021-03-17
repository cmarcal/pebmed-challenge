import React from 'react';
import { useRouter } from 'next/router';
import { Container } from './styles';

export function PaymentTemplate() {
	const router = useRouter();
	const { pid: planId } = router.query;

	return <Container>Payment id = {planId}</Container>;
}
