import { useState } from 'react';
import { createSubscribe as createSubscribeAPI } from 'src/service/post/subscription';
import { SubscribeDTO, Subscribe } from 'src/service/post/types';

interface ReturnHooks {
	createdSubscription: SubscribeDTO;
	isLoading: boolean;
	error: string;
	createSubscribe: (subscribe: Subscribe) => void;
}

export function useCreateSubscription(): ReturnHooks {
	const [createdSubscription, setCreatedSubscription] = useState<SubscribeDTO>();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string>(null);

	const createSubscribe = (subscribe: Subscribe) => {
		setIsLoading(true);
		setError(null);

		createSubscribeAPI(subscribe)
			.then(({ data }) => setCreatedSubscription(data))
			.catch((err) => setError(err))
			.finally(() => setIsLoading(false));
	};

	return { createdSubscription, isLoading, error, createSubscribe };
}
