import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 100%;
	@media (max-width: 1024px) {
		width: 100%;
		margin-top: 16px;
	}
`;
export const PaymentBy = styled.span`
	color: #999999;
	font-weight: 500;
	font-size: 14px;
	line-height: 17px;
	margin-bottom: 16px;
`;
export const CardsWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	& svg:not(:last-child) {
		margin-right: 10px;
	}
`;
