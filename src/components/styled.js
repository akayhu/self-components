import styled, { css } from 'styled-components/';

export const Li = styled.li`
	margin-bottom: 5px;

	&:hover {
		color: blue;
	}
`;

export const Input = styled.input`
	margin-right: 6px;
`;

export const CreateButton = styled.button`
	border-radius: 3px;
	padding: 5px 10px;
	margin-left: 10px;
	background: transparent;
	color: #000;
	border: 1px solid #d0d0d0;
	cursor: pointer;
`;

export const DelButton = styled.button`
	border-radius: 3px;
	padding: 5px 10px;
	margin-left: 6px;
	background: red;
	color: #fff;
	border: 1px solid red;
	cursor: pointer;
`;

export const Ul = styled.ul`
	margin: 0;
	padding: 0;
	list-style-type: none;
`;

export const NavDiv = styled.div`
	margin: 15px 0;
`;

export const Button = styled.button`
  border-radius: 3px;
  padding: 5px 10px;
  margin: 0 1em;
  background: transparent;
  color: #000;
  border: 1px solid #d0d0d0;
  cursor: pointer;

  ${props =>
		props.all &&
		css`
			margin-left: 0;
		`}

  ${props =>
		props.completed &&
		css`
			background: #34abca;
			color: #fff;
			border: 1px solid #34abca;
		`}

  ${props =>
		props.unCompleted &&
		css`
			background: red;
			color: #fff;
			border: 1px solid red;
		`}
`;

export const Hr = styled.hr`
	margin: 14px 0;
`;

export const EditInput = styled.input`
	border-radius: 3px;
	padding: 6px 3px;
	background: transparent;
	color: #000;
	border: 1px solid #d0d0d0;
	cursor: pointer;
`;
