import { Color } from 'src/assets/designerToken/_colorsStyled';
import styled from 'styled-components';

export const Form = styled.div`
	margin-top: 48px;
	display: flex;
	flex-direction: column;
	gap: 16px;
	@media (max-width: 1024px) {
		margin-top: 24px;
	}
`;

export const Row = styled.div`
	display: flex;
	gap: 16px;
	@media (max-width: 1024px) {
		flex-direction: column;
	}
`;

export const ButtonWrapper = styled.div`
	position: absolute;
	bottom: 40px;
	width: 86%;
	@media (max-width: 1024px) {
		position: unset;
		width: 100%;
		margin-top: 16px;
	}
`;
