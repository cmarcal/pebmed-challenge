import styled from 'styled-components';
import { Color } from 'src/assets/designerToken/_colorsStyled';
export const Container = styled.div`
	width: 100vw;
	height: 70vh;
	color: ${Color.darken};
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 3rem;

	&:before,
	:after,
	span {
		content: '';
		display: block;
		position: absolute;
		left: 31%;
		width: 10px;
		height: 30px;
		background-color: ${Color.app};
		-webkit-animation: grow 1.5s linear infinite;
		animation: grow 1.5s linear infinite;
	}

	:after {
		left: 33%;
		-webkit-animation: grow 1.5s linear -0.5s infinite;
		animation: grow 1.5s linear -0.5s infinite;
	}

	span {
		left: 35%;
		-webkit-animation: grow 1.5s linear -1s infinite;
		animation: grow 1.5s linear -1s infinite;
	}

	@-webkit-keyframes grow {
		0% {
			-webkit-transform: scaleY(0);
			transform: scaleY(0);
			opacity: 0;
		}
		50% {
			-webkit-transform: scaleY(1);
			transform: scaleY(1);
			opacity: 1;
		}
		100% {
			-webkit-transform: scaleY(0);
			transform: scaleY(0);
			opacity: 0;
		}
	}

	@keyframes grow {
		0% {
			-webkit-transform: scaleY(0);
			transform: scaleY(0);
			opacity: 0;
		}
		50% {
			-webkit-transform: scaleY(1);
			transform: scaleY(1);
			opacity: 1;
		}
		100% {
			-webkit-transform: scaleY(0);
			transform: scaleY(0);
			opacity: 0;
		}
	}

	@-webkit-keyframes spin {
		0% {
			-webkit-transform: rotate(0deg);
			tranform: rotate(0deg);
		}
		100% {
			-webkit-transform: rotate(360deg);
			tranform: rotate(360deg);
		}
	}

	@keyframes spin {
		0% {
			-webkit-transform: rotate(0deg);
			transform: rotate(0deg);
		}
		100% {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}

	@-webkit-keyframes spinreverse {
		0% {
			-webkit-transform: rotate(0deg);
			tranform: rotate(0deg);
		}
		100% {
			-webkit-transform: rotate(-360deg);
			tranform: rotate(-360deg);
		}
	}

	@keyframes spinreverse {
		0% {
			-webkit-transform: rotate(0deg);
			transform: rotate(0deg);
		}
		100% {
			-webkit-transform: rotate(-360deg);
			transform: rotate(-360deg);
		}
	}
`;
