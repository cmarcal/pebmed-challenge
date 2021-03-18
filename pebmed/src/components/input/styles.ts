import { Color } from 'src/assets/designerToken/_colorsStyled';
import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

export const Label = styled.label`
	font-size: 0.9rem;
`;

export const Input = styled.input`
	border: 1px solid ${Color.dark};
	border-radius: 5px;
	flex: 1 0 auto;
	height: 40px;
	padding-left: 8px;

	&:focus {
		outline: none;
	}
`;
