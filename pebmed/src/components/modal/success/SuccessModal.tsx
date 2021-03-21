import React from 'react';
import { SuccessSubscription } from 'src/assets/img';
import { NotPlanButton } from 'src/components/button';
import { Box, Contianer, Title, SubTitle, BoxDescription, List, Itens, ValueClient } from './style';

interface ComponentPros {
	plan: string;
	pricePlan: number;
	installment: number;
	email: string;
	cpf: string;
}
export function SuccessModal(props: ComponentPros) {
	const { plan, pricePlan, installment, email, cpf } = props;
	const price = () => {
		if (installment === 1) return `À vista, R$ ${pricePlan},00`;
		else {
			const valuePlan = parseFloat((pricePlan / installment).toString())
				.toFixed(2)
				.replace('.', ',');
			return `${installment}x de R$ ${valuePlan}`;
		}
	};
	return (
		<Contianer>
			<Box>
				<SuccessSubscription />
				<Title>Parabéns!</Title>
				<SubTitle>Sua assinatura foi realizada com sucesso.</SubTitle>
				<BoxDescription>
					<List>
						<Itens>
							Plano escolhido: <ValueClient>{plan}</ValueClient>
						</Itens>
						<Itens>
							Valor pago: <ValueClient>{price()}</ValueClient>
						</Itens>
						<Itens>
							E-mail: <ValueClient>{email}</ValueClient>
						</Itens>
						<Itens>
							CPF: <ValueClient>{cpf}</ValueClient>
						</Itens>
					</List>
				</BoxDescription>
				<NotPlanButton />
			</Box>
		</Contianer>
	);
}
