import styled from "styled-components";

const Title = styled.h1``;

const Exclamation = styled.span`
	color: #e8021d;
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: #fff900;
`;

function Navbar() {
	return (
		<Wrapper>
			<Title>
				Go Here, <Exclamation>Not There!</Exclamation> NYC
			</Title>
			<nav>
				<a>home</a>
				<a>about</a>
				<a>contact</a>
			</nav>
		</Wrapper>
	);
}

export default Navbar;
