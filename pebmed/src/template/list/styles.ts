import styled from 'styled-components';
import { Color } from 'src/assets/designerToken/_colorsStyled';
export const Container = styled.div`
	width: 100vw;
	height: 100vh;
`;
export const Header = styled.div`
	padding: 16px;
	background-color: ${Color.app};
	color: ${Color.light};
	border-bottom-left-radius: 16px;
	border-bottom-right-radius: 16px;
	min-height: 30%;
	display: flex;
	align-items: center;
`;
export const Title = styled.h1`
	margin: 0;
	padding: 0;
`;

export const Body = styled.div`
	margin-top: -72px;
	padding: 0 40px;
`;
