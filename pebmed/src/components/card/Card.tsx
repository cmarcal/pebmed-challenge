import React, { ReactElement, useContext } from 'react';
import { SubscriptionContext } from 'src/store/subscription';
import { Button } from 'src/components/button';
import { Container, Title, Price, PriceAnnually, InitialPrice, Benefits, ItemBenefits } from './styles';
import { navigate, Routes } from 'src/routes';

interface ComponentsProps {
	caption: string;
	discountPercentage: number;
	fullPrice: number;
	id: number;
	title: string;
	isAnnually: boolean;
	gateway: string;
}
export function Card(props: ComponentsProps): ReactElement {
	const { title, id, isAnnually, discountPercentage, fullPrice, caption, gateway } = props;
	const { handleSubscription } = useContext(SubscriptionContext);
	const discount = isAnnually ? discountPercentage * 100 : (discountPercentage / 100) * 100;
	const valueWithDiscount = fullPrice - fullPrice * (discount / 100);
	const choosePlan = () => {
		handleSubscription({ id, name: title, fullPrice, gateway });
		navigate(Routes.payment());
	};
	return (
		<Container>
			<Title>{title}</Title>
			<Price>
				<InitialPrice>De: R$ {fullPrice},00</InitialPrice>

				<span>
					Por: {!isAnnually && '12x de'} R$
					{valueWithDiscount},00
				</span>
			</Price>
			<Benefits>
				<ItemBenefits highlight>{discount}% de desconto</ItemBenefits>
				<ItemBenefits>{caption}</ItemBenefits>
				<ItemBenefits>Acesso ilimitado</ItemBenefits>
			</Benefits>
			<Button text='Eu quero esse' onClick={choosePlan} highlight={isAnnually} />
		</Container>
	);
}
