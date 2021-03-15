import styled from 'styled-components';
import { Color } from 'src/assets/designerToken/_colorsStyled';
export const Container = styled.div`
	display: flex;
	padding: 16px 32px;
	border-radius: 8px;
	box-shadow: 0px 0px 5px 2px rgb(0 0 0 / 10%);
	margin-bottom: 24px;
	min-width: 300px;
	background-color: ${Color.light};
`;
export const Column = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
`;
export const Title = styled.h2`
	margin: 8px 0 16px 0;
`;
export const Price = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	margin-bottom: 8px;
	font-weight: 600;
`;
export const PriceAnnually = styled.p`
	margin: 0;
	font-size: 0.85rem;
	font-weight: 400;
`;
export const Benefits = styled.ul`
	padding-left: 16px;
	margin-bottom: 24px;
`;
export const ItemBenefits = styled.li`
	color: ${Color.greyDarken};
	margin-bottom: 6px;
`;

export const ImageWrapper = styled.div<{ rotate?: boolean }>`
	margin: auto;
	${({ rotate }) => rotate && 'transform: rotate(270deg);'}
`;
