import React, { useState } from 'react';
import { CreditCardWrapper } from 'src/components/CreditCardWrapper';
import { CreditCard } from 'src/components/CreditCardWrapper/types';
import { InputField } from 'src/components/input';
import { PaymentButton } from 'src/components/button';
import { ButtonWrapper, Form, Row } from './styles';
import { validityCreditCardMask } from 'src/helper';
import { SelectField } from '../select';

interface ComponentsProps {
	installmentsLimit: number;
	price: number;
	handleClick(paymentInfo: { cardValues: CreditCard; cupom: string; installments: number }): void;
}

export function CreditCardForms(props: ComponentsProps) {
	const { handleClick, installmentsLimit, price } = props;
	const [cardValues, setCardvalues] = useState<CreditCard>(null);
	const [validationCard, setValidationCard] = useState<{ issuer: string; maxLength: number }>(null);
	const [installments, setInstallments] = useState<number>(1);
	const [cupom, setCupom] = useState<string>('');
	const [focus, setFocus] = useState<string>('');

	const handleChangeCard = (name, value) => {
		setCardvalues({ ...cardValues, [name]: value });
	};
	const handleFocus = (event) => {
		setFocus(event.target.name);
	};
	const disabledPayment = !!(
		!(validationCard && validationCard.issuer !== 'unknown') ||
		!cardValues?.cvv ||
		!cardValues?.expiry ||
		!cardValues?.name
	);

	const optionsInstallment = () => {
		const options = [];
		for (let index = 1; index <= installmentsLimit; index++) {
			if (index === 1) options.push({ label: `À vista R$ ${price},00`, value: index });
			else {
				const installmentPrice = parseFloat((price / index).toString())
					.toFixed(2)
					.replace('.', ',');
				options.push({ label: `${index}x de R$ ${installmentPrice}`, value: index });
			}
		}
		return options;
	};

	return (
		<>
			<CreditCardWrapper infoCard={cardValues} focused={focus} handleValidCard={setValidationCard} />
			<Form>
				<InputField
					label='Número do seu cartão'
					nameInput='number'
					value={cardValues?.number || ''}
					placeholder='0000 0000 0000 0000'
					handleChange={({ target }) =>
						target.value.length <= (validationCard?.maxLength || 14) &&
						handleChangeCard(target.name, target.value.replace(/\D/g, ''))
					}
					handleFocus={handleFocus}
				/>
				<Row>
					<InputField
						label='Validade'
						nameInput='expiry'
						value={cardValues?.expiry ? validityCreditCardMask(cardValues?.expiry) : ''}
						placeholder='MM/AA'
						handleChange={({ target }) =>
							target.value.length <= 5 && handleChangeCard(target.name, target.value.replace(/\D/g, ''))
						}
						handleFocus={handleFocus}
					/>
					<InputField
						label='CVV'
						nameInput='cvv'
						value={cardValues?.cvv || ''}
						placeholder='000'
						handleChange={({ target }) => handleChangeCard(target.name, target.value.replace(/\D/g, ''))}
						handleFocus={handleFocus}
					/>
				</Row>
				<InputField
					label='Nome impresso no cartão'
					nameInput='name'
					value={cardValues?.name?.toUpperCase() || ''}
					placeholder='Seu nome'
					handleChange={({ target }) => handleChangeCard(target.name, target.value)}
					handleFocus={handleFocus}
				/>

				<InputField
					label='Cupom'
					nameInput='cupom'
					value={cupom}
					placeholder='Insira aqui'
					handleChange={({ target }) => setCupom(target.value)}
				/>
				{installmentsLimit < 1 && (
					<SelectField
						label='Número de parcelas'
						name='installments'
						options={optionsInstallment()}
						value={installments}
						handleChange={({ target }) => setInstallments(target.value)}
					/>
				)}
			</Form>
			<ButtonWrapper>
				<PaymentButton
					disabled={disabledPayment}
					onClick={() => (!disabledPayment ? handleClick({ cardValues, cupom, installments }) : undefined)}
				/>
			</ButtonWrapper>
		</>
	);
}
