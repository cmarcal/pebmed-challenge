import styled from 'styled-components';
import { Color } from 'src/assets/designerToken/_colorsStyled';
export const Container = styled.div`
	width: 100vw;
	height: 100vh;
`;
export const Header = styled.div`
	padding: 16px;
	color: ${Color.light};

	min-height: 35%;
	display: flex;
	align-items: center;
	position: relative;
	background: linear-gradient(175deg, ${Color.app} 70%, #f7f7f7 calc(70% + 2px));
	@media (max-width: 1024px) {
		background: linear-gradient(166deg, ${Color.app} 70%, #f7f7f7 calc(70% + 2px));
	} ;
`;
export const Title = styled.h1`
	margin: 0;
	padding: 0;
`;

export const Body = styled.div`
	margin-top: -72px;
	padding: 0 40px;
	position: relative;
	z-index: 1;
	@media (min-width: 1024px) {
		display: flex;
		gap: 48px;
		justify-content: center;
	} ;
`;

export const ImageWrapper = styled.div`
	position: absolute;
	bottom: -10%;
	right: 0;
`;
