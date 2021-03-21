import styled from 'styled-components';
import { Color } from 'src/assets/designerToken/_colorsStyled';
export const Container = styled.div`
	display: flex;
	padding: 16px 32px;
	border-radius: 8px;
	box-shadow: 0px 0px 5px 2px rgb(0 0 0 / 10%);
	margin-bottom: 24px;
	background-color: ${Color.light};

	flex-direction: column;
	@media (min-width: 1024px) {
		min-width: 300px;
		min-height: 400px;
		justify-content: space-around;
	} ;
`;

export const Title = styled.h2`
	margin: 8px 0 16px 0;
	position: relative;
	&:after {
		content: '';
		border-bottom: 2px solid ${Color.errorDarken};
		width: 25%;
		position: absolute;
		bottom: -4px;
		left: 0;
		height: 3px;
	}
`;
export const Price = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	margin-bottom: 8px;
	font-weight: 600;
	font-size: 1.2rem;
	color: ${Color.dark};
`;
export const InitialPrice = styled.span`
	text-decoration-line: line-through;
	text-decoration-color: ${Color.errorDarken};
	text-decoration-thickness: from-font;
	font-size: 1rem;
	font-weight: 500;
`;

export const Benefits = styled.ul`
	padding-left: 16px;
	margin-bottom: 24px;
`;
export const ItemBenefits = styled.li<{ highlight?: boolean }>`
	color: ${({ highlight }) => (highlight ? Color.appLight : Color.greyDarken)};
	font-weight: ${({ highlight }) => (highlight ? 600 : 500)};
	margin-bottom: 6px;
`;

export const ImageWrapper = styled.div`
	margin: auto;
`;
