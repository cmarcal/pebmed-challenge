import React, { ReactElement } from 'react';
import { Button } from 'src/components/button';
import { Container, Column, Title, Price, PriceAnnually, Benefits, ItemBenefits, ImageWrapper } from './styles';
import { TagDiscount, Wallet } from 'src/assets/img';
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
}
export function Card(props: ComponentsProps): ReactElement {
	const { title, id, highligth, fullPrice, installments, periodLabel, caption, description, splittable } = props;
	const parcelValue = fullPrice / installments;
	return (
		<Container>
			<Column>
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
				<Button text='Eu quero esse' onClick={() => console.log(id)} highlight={highligth} />
			</Column>
			<Column>
				<ImageWrapper>{splittable ? <TagDiscount /> : <Wallet />}</ImageWrapper>
			</Column>
		</Container>
	);
}
