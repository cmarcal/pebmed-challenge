import { useState } from 'react';
import { createSubscribe as createSubscribeAPI } from 'src/service/post/subscription';
import { SubscribeDTO, Subscribe } from 'src/service/post/types';

interface ReturnHooks {
	subscription: SubscribeDTO;
	isLoading: boolean;
	error: string;
	createSubscribeAPI: (subscribe: Subscribe) => void;
}

export function useCreateSubscription(): ReturnHooks {
	const [subscription, setSubscription] = useState<SubscribeDTO>();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string>(null);

	const createSubscribe = (subscribe: Subscribe) => {
		setIsLoading(true);
		setError(null);

		createSubscribeAPI(subscribe)
			.then(({ data }) => setSubscription(data))
			.catch((err) => setError(err))
			.finally(() => setIsLoading(false));
	};

	return { subscription, isLoading, error, createSubscribe };
}
