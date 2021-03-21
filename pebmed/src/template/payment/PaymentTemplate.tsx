import React, { useContext, useState } from 'react';
import uuid from 'react-uuid';
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
import { useCreateSubscription } from 'src/hooks/subscription';
import { CreditCard } from 'src/components/CreditCardWrapper/types';
import { Person } from 'src/components/forms/interface';
import { SuccessModal } from 'src/components/modal';

export function PaymentTemplate() {
	const { subscription } = useContext(SubscriptionContext);
	const { createdSubscription, createSubscribe } = useCreateSubscription();
	const [person, setPerson] = useState<Person>(null);

	const handleChangePerson = (name, value) => {
		setPerson({ ...person, [name]: value });
	};
	const submitSubscription = (paymentInfo: { cardValues: CreditCard; cupom: string; installments: number }) => {
		const { cvv, expiry, name, number } = paymentInfo.cardValues;
		const subscribe = {
			userId: uuid(),
			offerId: subscription.id,
			creditCardNumber: number,
			creditCardExpirationDate: expiry,
			creditCardHolder: name,
			creditCardCVV: cvv,
			creditCardCPF: person.cpf,
			gateway: subscription.gateway,
			installments: paymentInfo.installments,
			couponCode: paymentInfo.cupom
		};
		createSubscribe(subscribe);
	};

	return (
		<>
			{createdSubscription && subscription && (
				<SuccessModal
					email={person?.email}
					pricePlan={subscription.price}
					plan={subscription.name}
					cpf={createdSubscription?.creditCardCPF}
					installment={createdSubscription?.installments}
				/>
			)}
			<Container>
				{subscription ? (
					<>
						<ProductDetail>
							<TitlePage>Carrinho de compra</TitlePage>
							<ProductBox>
								<ProductName>{subscription.name}</ProductName>
								<ProductPrice>R$ {subscription.price},00</ProductPrice>
							</ProductBox>
							<BoxPrice>
								<PriceTitle>Total</PriceTitle>
								<Price>R$ {subscription.price},00</Price>
							</BoxPrice>
						</ProductDetail>
						<InfoPayment>
							<TitleCard>Informações pessoais</TitleCard>
							<PersonBox>
								<PersonForm handleChangePerson={handleChangePerson} person={person} />
								<AcceptCards />
							</PersonBox>
						</InfoPayment>
						<InfoPayment>
							<TitleCard>Descrição do cartão</TitleCard>
							<CreditCardForms
								handleClick={(paymentInfo) => submitSubscription(paymentInfo)}
								installmentsLimit={subscription.installmentsLimit}
								price={subscription.price}
							/>
						</InfoPayment>
					</>
				) : (
					<PlanNotSelected />
				)}
			</Container>
		</>
	);
}
