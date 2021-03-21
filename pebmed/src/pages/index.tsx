import React, { useEffect } from 'react';
import { navigate, Routes } from 'src/routes';

export default function Index() {
	useEffect(() => {
		navigate(Routes.subscriptions());
	}, []);
	return <></>;
}
