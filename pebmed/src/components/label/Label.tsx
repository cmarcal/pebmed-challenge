import React from 'react';
import { LabelForm } from './styles';
interface ComponentsProps {
	text: string;
}
export function Label(props: ComponentsProps) {
	const { text } = props;
	return <LabelForm>{text}</LabelForm>;
}
