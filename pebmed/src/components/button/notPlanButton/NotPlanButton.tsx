import React from 'react';
import { navigate, Routes } from 'src/routes';
import { Button } from '../Button';
import { ButtonWrapper } from './styles';

export function NotPlanButton() {
	return (
		<ButtonWrapper>
			<Button text='Retorne para página de planos' onClick={() => navigate(Routes.subscriptions())} />
		</ButtonWrapper>
	);
}
