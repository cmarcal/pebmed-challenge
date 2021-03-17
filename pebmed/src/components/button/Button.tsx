import React from 'react';
import { Container } from './styles';
interface ComponentsProps {
	text: string;
	highlight?: boolean;
	onClick: (e?: unknown) => void;
}
export function Button(props: ComponentsProps) {
	const { text, highlight, onClick } = props;
	return (
		<Container onClick={onClick} highlight={highlight}>
			{text}
		</Container>
	);
}
