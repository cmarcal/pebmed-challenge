import Router from 'next/router';
import queryString from 'query-string';

export const finalPathBuilder = ({ href, qs }) => {
	console.log(qs);
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
	payment: (planId = null) => {
		const href = '/payment/';
		return finalPathBuilder({ href, qs: objectToQueryString({ pid: planId }) });
	}
};
