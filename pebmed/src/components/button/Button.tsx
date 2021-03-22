import React from 'react';
import { Container } from './styles';
interface ComponentsProps {
	text: string;
	highlight?: boolean;
	disabled?: boolean;
	onClick: (e?: unknown) => void;
}
export function Button(props: ComponentsProps) {
	const { text, highlight, disabled = false, onClick } = props;
	return (
		<Container disabled={disabled} onClick={onClick} highlight={highlight} data-testid='ButtonComponent'>
			{text}
		</Container>
	);
}
