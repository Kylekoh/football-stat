import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 100vw;
	display: flex;
	justify-content: center;
`;

const Text = styled.span`
	color: ${(props) => props.color};
`;

interface Props {
	text: Error | string;
	color?: string;
}

const Message: React.FunctionComponent<Props> = ({ text, color }) => (
	<Container>
		<Text color={color}>{text}</Text>
	</Container>
);

export default Message;
