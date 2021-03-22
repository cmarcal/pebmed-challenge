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
	testId?: string;
	handleChange(event): void;
}
export function SelectField(props: ComponentsProps) {
	const { options, name, label, value, testId, handleChange } = props;
	return (
		<Container>
			<Label text={label} />
			<SelectedField data-testId={testId} name={name} value={value} onChange={handleChange}>
				{options.map((item, i) => (
					<option data-testid='select-option' key={i} value={item.value}>
						{item.label}
					</option>
				))}
			</SelectedField>
		</Container>
	);
}
