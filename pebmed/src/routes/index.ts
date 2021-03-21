import Router from 'next/router';
import queryString from 'query-string';

export const finalPathBuilder = ({ href, qs = null }) => {
	if (qs) {
		return {
			href: `${href}?${qs}`,
			as: `${href}?${qs}`
		};
	}
	return {
		href: `${href}`,
		as: `${href}`
	};
};

export const objectToQueryString = (objectToParse) =>
	queryString.stringify(objectToParse, {
		skipNull: true
	});

export const navigate = (to: { href: string; as: string }, options?: { shallow: boolean }) => {
	Router.push(to.href, to.as, options);
};

export const Routes = {
	payment: () => {
		const href = '/payment/';
		return finalPathBuilder({ href });
	},
	subscriptions: () => {
		const href = '/subscriptions/';
		return finalPathBuilder({ href });
	}
};
