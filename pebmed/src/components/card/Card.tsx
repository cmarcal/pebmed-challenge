import React, { ReactElement, useContext } from 'react';
import { SubscriptionContext } from 'src/store/subscription';
import { Button } from 'src/components/button';
import { Container, Title, Price, PriceAnnually, Benefits, ItemBenefits } from './styles';
import { navigate, Routes } from 'src/routes';

interface ComponentsProps {
	caption: string;
	description: string;
	discountAmmount?: number;
	discountPercentage?: number;
	fullPrice: number;
	id: number;
	installments: number;
	periodLabel: string;
	title: string;
	highligth: boolean;
	splittable: boolean;
	gateway: string;
}
export function Card(props: ComponentsProps): ReactElement {
	const {
		title,
		id,
		highligth,
		fullPrice,
		installments,
		periodLabel,
		caption,
		description,
		splittable,
		gateway
	} = props;
	const { handleSubscription } = useContext(SubscriptionContext);
	const parcelValue = fullPrice / installments;
	const choosePlan = () => {
		handleSubscription({ id, name: title, fullPrice, gateway });
		navigate(Routes.payment(id));
	};
	return (
		<Container>
			<Title>{title}</Title>
			<Price>
				R$ {parcelValue} / por {periodLabel}
				{splittable && <PriceAnnually>R$ {fullPrice} / por ano</PriceAnnually>}
			</Price>
			<Benefits>
				<ItemBenefits>{caption}</ItemBenefits>
				<ItemBenefits>{description}</ItemBenefits>
				<ItemBenefits>Acesso ilimitado</ItemBenefits>
			</Benefits>
			<Button text='Eu quero esse' onClick={choosePlan} highlight={highligth} />
		</Container>
	);
}
