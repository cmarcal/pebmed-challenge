import React, { useState } from 'react';
import { CreditCardWrapper } from 'src/components/CreditCardWrapper';
import { CreditCard } from 'src/components/CreditCardWrapper/types';
import { InputField } from 'src/components/input';
import { PaymentButton } from 'src/components/button';
import { ButtonWrapper, Form, Row } from './styles';

interface ComponentsProps {
	handlClick(val: any): void;
}

export function CreditCardForms(props: ComponentsProps) {
	const { handlClick } = props;
	const [cardValues, setCardvalues] = useState<CreditCard>(null);
	const [cupom, setCupom] = useState<string>('');
	const [focus, setFocus] = useState<string>('');

	const handleChange = (event) => {
		const { name, value } = event.target;
		setCardvalues({ ...cardValues, [name]: value });
	};
	const handleFocus = (event) => {
		setFocus(event.target.name);
	};
	const disabledPayment = !!(!cardValues?.number || !cardValues?.cvv || !cardValues?.expiry || !cardValues?.name);
	return (
		<>
			<CreditCardWrapper infoCard={cardValues} focused={focus} />
			<Form>
				<InputField
					label='Número do seu cartão'
					nameInput='number'
					value={cardValues?.number || ''}
					placeholder='0000 0000 0000 0000'
					handleChange={handleChange}
					handleFocus={handleFocus}
				/>
				<Row>
					<InputField
						label='Validade'
						nameInput='expiry'
						value={cardValues?.expiry || ''}
						placeholder='MM/AA'
						handleChange={handleChange}
						handleFocus={handleFocus}
					/>
					<InputField
						label='CVV'
						nameInput='cvv'
						value={cardValues?.cvv || ''}
						placeholder='000'
						handleChange={handleChange}
						handleFocus={handleFocus}
					/>
				</Row>
				<InputField
					label='Nome impresso no cartão'
					nameInput='name'
					value={cardValues?.name || ''}
					placeholder='Seu nome'
					handleChange={handleChange}
					handleFocus={handleFocus}
				/>

				<InputField
					label='Cupom'
					nameInput='cupom'
					value={cupom}
					placeholder='Insira aqui'
					handleChange={({ target }) => setCupom(target.value)}
				/>
			</Form>
			<ButtonWrapper>
				<PaymentButton disabled={disabledPayment} text='Finalizar compra' onClick={() => console.log('teste')} />
			</ButtonWrapper>
		</>
	);
}
