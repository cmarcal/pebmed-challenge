import React from 'react';
import { Container, Title, Ops } from './styles';
import { NotPlanButton } from 'src/components/button';
export function PlanNotSelected() {
	return (
		<Container>
			<Ops>Estamos quase lá...</Ops>
			<Title>Para prosseguir, você deve selecionar o plano de assinatura desejado</Title>
			<br />
			<NotPlanButton />
		</Container>
	);
}
