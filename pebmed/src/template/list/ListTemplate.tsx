import React, { useEffect } from 'react';
import { useGetPlans } from 'src/hooks/plans';
import { Card } from 'src/components/card';
import { Loading } from 'src/components/loading';
import { Container, Title, Header, Body } from './styles';
export function ListTemplate() {
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
							highligth={plan.period === 'annually' || false}
							title={plan.title}
							fullPrice={plan.fullPrice}
							installments={plan.installments}
							periodLabel={plan.periodLabel}
							caption={plan.caption}
							description={plan.description}
							splittable={plan.splittable}
						/>
					))
				) : (
					<Loading />
				)}
			</Body>
		</Container>
	);
}
