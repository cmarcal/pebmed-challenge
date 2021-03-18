import { Color } from 'src/assets/designerToken/_colorsStyled';
import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 100vh;
	padding: 40px;
	gap: 32px;
`;

export const ProductDetail = styled.div`
	flex: 1.5;
	padding: 40px;
	position: relative;
`;
export const InfoPayment = styled.div`
	flex: 1;
	background-color: ${Color.paymentBox};
	border-radius: 8px;
	box-shadow: 0px 0px 5px 2px rgb(0 0 0 / 10%);
	color: ${Color.light};
	padding: 40px;
`;
export const TitlePage = styled.h1`
	margin: 0;
	font-size: 1.7rem;
	letter-spacing: 1px;
`;
export const TitleCard = styled.h2`
	margin: 0;
	font-size: 1.2rem;
	margin-bottom: 48px;
	letter-spacing: 1px;
`;
export const BoxPrice = styled.div`
	border: 1px solid ${Color.greyLight};
	border-radius: 8px;
	padding: 12px;
	position: absolute;
	bottom: 0;
	right: 0;
	text-align: right;
`;
export const PriceTitle = styled.h4`
	margin: 0;
	font-size: 1rem;
	color: ${Color.greyDarken};
	margin-bottom: 8px;
`;
export const Price = styled.span`
	font-size: 1.3rem;
	color: ${Color.darken};
`;
