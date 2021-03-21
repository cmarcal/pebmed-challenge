import React, { useContext } from 'react';
import {
	Container,
	ProductDetail,
	ProductBox,
	InfoPayment,
	ProductName,
	ProductPrice,
	PersonBox,
	TitlePage,
	TitleCard,
	BoxPrice,
	PriceTitle,
	Price
} from './styles';
import { CreditCardForms, PersonForm } from 'src/components/forms';
import { AcceptCards } from 'src/components/acceptcards';
import { SubscriptionContext } from 'src/store/subscription';
import { PlanNotSelected } from 'src/components/errors';

export function PaymentTemplate() {
	const { subscription } = useContext(SubscriptionContext);
	return (
		<Container>
			{subscription ? (
				<>
					<ProductDetail>
						<TitlePage>Carrinho de compra</TitlePage>
						<ProductBox>
							<ProductName>{subscription.name}</ProductName>
							<ProductPrice>R$ {subscription.fullPrice},00</ProductPrice>
						</ProductBox>
						<BoxPrice>
							<PriceTitle>Total</PriceTitle>
							<Price>R$ {subscription.fullPrice},00</Price>
						</BoxPrice>
					</ProductDetail>
					<InfoPayment>
						<TitleCard>Informações pessoais</TitleCard>
						<PersonBox>
							<PersonForm />
							<AcceptCards />
						</PersonBox>
					</InfoPayment>
					<InfoPayment>
						<TitleCard>Descrição do cartão</TitleCard>
						<CreditCardForms handlClick={(val) => console.log(val)} />
					</InfoPayment>
				</>
			) : (
				<PlanNotSelected />
			)}
		</Container>
	);
}
