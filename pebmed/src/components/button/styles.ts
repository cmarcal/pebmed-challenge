import styled from 'styled-components';
import { Color } from 'src/assets/designerToken/_colorsStyled';

export const Container = styled.button<{ highlight?: boolean }>`
	background-color: ${({ highlight }) => (highlight ? Color.errorDarken : Color.light)};
	color: ${({ highlight }) => (highlight ? Color.light : Color.errorDarken)};
	border: 1px solid ${Color.errorDarken};
	border-radius: 8px;
	padding: 8px 16px;
	font-size: 0.85rem;
	cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
	&:focus {
		outline: none;
	}
`;
