import { Color } from 'src/assets/designerToken/_colorsStyled';
import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 100vh;
	padding: 40px;
	gap: 32px;
	@media (max-width: 1024px) {
		flex-direction: column;
		padding: 16px;
	}
`;

export const ProductDetail = styled.div`
	flex: 1.5;
	padding: 40px;
	position: relative;
`;
export const ProductBox = styled.div`
	border-bottom: 1px solid ${Color.greyDarkest};
	padding: 16px 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
export const ProductName = styled.h2`
	font-weight: 500;
	font-size: 1.4rem;
`;
export const ProductPrice = styled.span`
	font-weight: 500;
`;
export const InfoPayment = styled.div`
	flex: 1;
	background-color: ${Color.app};
	border-radius: 8px;
	box-shadow: 0px 0px 5px 2px rgb(0 0 0 / 10%);
	color: ${Color.light};
	padding: 40px;
	position: relative;
	@media (max-width: 1024px) {
		padding: 16px;
	}
`;
export const PersonBox = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	height: 100%;
	margin-top: -48px;
	@media (max-width: 1024px) {
		margin-top: 0;
		height: 93%;
	}
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
	&:after {
		content: '';
		border-bottom: 2px solid ${Color.light};
		width: 25%;
		position: absolute;
		top: 66px;
		left: 40px;
		height: 3px;
	}

	@media (max-width: 1024px) {
		margin-bottom: 24px;
		&:after {
			top: 40px;
			left: 16px;
		}
	}
`;
export const BoxPrice = styled.div`
	border: 1px solid ${Color.greyLight};
	border-radius: 8px;
	padding: 12px;
	position: absolute;
	bottom: 0;
	right: 0;
	text-align: right;
	@media (max-width: 1024px) {
		position: relative;
		width: fit-content;
		float: right;
		top: 15px;
	}
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
