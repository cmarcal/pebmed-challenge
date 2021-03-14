import { useState } from 'react';
import { PlanDTO } from 'src/service/get/types';
import { getPlans } from 'src/service/get/plans';

interface ReturnHooks {
	plans: PlanDTO[];
	isLoading: boolean;
	error: string;
	fetchPlans: () => void;
}

export function useGetPlans(): ReturnHooks {
	const [plans, setPlans] = useState<PlanDTO[]>();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string>(null);

	const fetchPlans = () => {
		setIsLoading(true);
		setError(null);

		getPlans()
			.then(({ data }) => setPlans(data))
			.catch((err) => setError(err))
			.finally(() => setIsLoading(false));
	};

	return { plans, isLoading, error, fetchPlans };
}
