import React from 'react';
import { Label } from '../label';
import { Container, SelectedField } from './styles';
type Option = {
	label: string;
	value: number;
};
interface ComponentsProps {
	options: Option[];
	name: string;
	label: string;
	value: number;
	handleChange(event): void;
}
export function SelectField(props: ComponentsProps) {
	const { options, name, label, value, handleChange } = props;
	return (
		<Container>
			<Label text={label} />
			<SelectedField name={name} value={value} onChange={handleChange}>
				{options.map((item, i) => (
					<option key={i} value={item.value}>
						{item.label}
					</option>
				))}
			</SelectedField>
		</Container>
	);
}
