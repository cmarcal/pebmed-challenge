import { Color } from 'src/assets/designerToken/_colorsStyled';
import styled from 'styled-components';

export const ButtonWrapper = styled.div<{ disabled: boolean }>`
	display: flex;
	& > button {
		background-color: ${({ disabled }) => (disabled ? Color.greyDarkest : Color.app)};
		border-color: ${({ disabled }) => (disabled ? Color.greyDarkest : Color.app)};
		color: ${Color.light};
		height: 48px;
		flex: 1;
		text-transform: uppercase;
		letter-spacing: 0.8px;
		font-weight: 600;
		cursor: ${({ disabled }) => disabled && 'not-allowed'};
		${({ disabled }) =>
			!disabled &&
			`  &:hover {
        background-color: ${Color.appClean};
        border-color: ${Color.appClean};
      }`};
	}
`;
