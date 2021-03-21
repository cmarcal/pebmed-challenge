import { Color } from 'src/assets/designerToken/_colorsStyled';
import styled from 'styled-components';

export const Contianer = styled.div`
	position: fixed;
	width: 100vw;
	height: 100vh;
	background-color: ${Color.greyCleanOpacity};
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1;
`;

export const Box = styled.div`
	background-color: ${Color.light};
	border-radius: 8px;
	border: 1px solid ${Color.light};
	width: 80%;
	height: 80vh;
	text-align: center;
	padding: 24px 16px;
	display: flex;
	flex-direction: column;
  align-items: center;
}
`;

export const Title = styled.h2`
	color: ${Color.successDarken};
`;
export const SubTitle = styled.h4`
	color: ${Color.greyDarken};
	margin: 0;
`;
export const BoxDescription = styled.div`
	border-radius: 8px;
	padding: 16px;
	border: 1px solid ${Color.greyClean};
	display: flex;
	flex-direction: column;
	color: ${Color.greyRegular};
	font-weight: 600;
	width: 50%;
	margin: auto;
	@media (max-width: 1024px) {
		width: 100%;
	}
`;
export const List = styled.ul`
	display: flex;
	flex-direction: column;
	list-style-type: none;
	padding-left: 0;
	gap: 8px;
`;
export const Itens = styled.li`
	justify-content: space-between;
	display: flex;
	white-space: nowrap;
	font-size: 1rem;
	@media (max-width: 1024px) {
		font-size: 0.8rem;
	}
`;

export const ValueClient = styled.span`
	color: ${Color.dark};
	font-weight: 600;
`;
