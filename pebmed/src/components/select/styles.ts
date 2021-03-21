import { Color } from 'src/assets/designerToken/_colorsStyled';
import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	flex: 1;
`;

export const SelectedField = styled.select`
	height: 40px;
	border: 1px solid ${Color.dark};
	border-radius: 5px;
	&:focus {
		outline: none;
	}
`;
