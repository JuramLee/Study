// const { css, default: styled } = require("styled-components");		// export를 안썻을때 나옴
import styled, { css } from "styled-components";

const variantCSS = {
	primary: css`
		background: ${(theme) => theme.PALETTE.primary[300]};
		color: ${({theme}) => theme.PALETTE.fontColor };
	`,
	"primary-reverse": css`
		border: 1px solid ${({theme}) => theme.PALETTE.primary[300]};
		color: ${({theme}) => theme.PALETTE.primary[300]};
	`,
	"primary-text": css`
		border: none;
		color: ${({theme}) => theme.PALETTE.primary[300]};
		`,
};

const shapeCSS = {
	default: css``,
	shape: css`
		border-radius: 8px;
	`,
	round: css`
		border-radius: 50%;
	`,
};

const sizeCSS = {
	small: css`
		width: 100px;
		height: 30px;
		padding: 10px 0;
		font-size: ${({theme}) => theme.FONT_SIZE.medium};
	`,
	medium: css`
		width: 80px;
		height: 50px;
		padding: 10px 0;
		font-size: ${({theme}) => theme.FONT_SIZE.medium};
	`,
	large: css`
		width: 100px;
		height: 30px;
		padding: 10px 0;
		font-size: ${({theme}) => theme.FONT_SIZE.medium};
	`,
	full: css`
		width: 100%;
		aspect-ratio: 8 / 1;  // 종횡비 유지
		font-size: ${({theme}) => theme.FONT_SIZE.medium};
	`,
};

export const Button = styled.button`
	${(variant) => variantCSS[variant] }
	${(shape) => shapeCSS[shape] }
	${(size) => sizeCSS[size]}
	cursor: pointer;
	border: none;
	:hover {
		opacity: 0.8;
	}
`;

const S = {
	Button,
	variantCSS,
	shapeCSS,
	sizeCSS,
};

export default S;