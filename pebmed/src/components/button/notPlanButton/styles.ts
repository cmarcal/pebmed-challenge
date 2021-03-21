import { Color } from 'src/assets/designerToken/_colorsStyled';
import styled from 'styled-components';

export const ButtonWrapper = styled.div<{ disabled: boolean }>`
	display: flex;
	& > button {
		background-color: ${Color.appLight};
		border-color: ${Color.appLight};
		color: ${Color.light};
		height: 48px;
		text-transform: uppercase;
		letter-spacing: 0.8px;
		font-weight: 600;
		cursor: pointer;
	}
`;
