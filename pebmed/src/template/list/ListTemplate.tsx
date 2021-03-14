import React, { useEffect } from 'react';
import { Container, Title } from './styles';
import { useGetPlans } from 'src/hooks/plans';
export function ListTemplate() {
	const { plans, isLoading, error, fetchPlans } = useGetPlans();

	useEffect(() => {
		fetchPlans();
	}, []);

	return (
		<Container>
			<Title>Choose your subscription:</Title>
		</Container>
	);
}
