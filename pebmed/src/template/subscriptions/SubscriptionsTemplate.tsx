import React, { useEffect } from 'react';
import { useGetPlans } from 'src/hooks/plans';
import { Card } from 'src/components/card';
import { Loading } from 'src/components/loading';
import { Container, Title, Header, Body } from './styles';
export function SubscriptionsTemplate() {
	const { plans, isLoading, error, fetchPlans } = useGetPlans();
	useEffect(() => {
		fetchPlans();
	}, []);

	return (
		<Container>
			<Header>
				<Title>Plano de Assinatura</Title>
			</Header>
			<Body>
				{plans && !isLoading ? (
					plans?.map((plan) => (
						<Card
							key={plan.id}
							id={plan.id}
							isAnnually={plan.period === 'annually' || false}
							title={plan.title}
							fullPrice={plan.fullPrice}
							caption={plan.caption}
							gateway={plan.gateway}
							discountPercentage={plan.discountPercentage}
							installmentsLimit={plan.installments}
						/>
					))
				) : (
					<Loading />
				)}
			</Body>
		</Container>
	);
}
