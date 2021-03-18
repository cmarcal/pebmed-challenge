import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Container, ProductDetail, InfoPayment, TitlePage, TitleCard, BoxPrice, PriceTitle, Price } from './styles';
import { CreditCardForms, PersonForm } from 'src/components/forms';

export function PaymentTemplate() {
	const router = useRouter();
	const { pid: planId } = router.query;
	return (
		<Container>
			<ProductDetail>
				<TitlePage>Carrinho de compra</TitlePage>
				<BoxPrice>
					<PriceTitle>Total</PriceTitle>
					<Price>R$ 600,00</Price>
				</BoxPrice>
			</ProductDetail>
			<InfoPayment>
				<TitleCard>Informações pessoais</TitleCard>
				<PersonForm />
			</InfoPayment>
			<InfoPayment>
				<TitleCard>Descrição do cartão</TitleCard>
				<CreditCardForms handlClick={(val) => console.log(val)} />
			</InfoPayment>
		</Container>
	);
}
