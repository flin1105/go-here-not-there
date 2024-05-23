import styled from "styled-components";

const Title = styled.h1`
	color: #bf4f74;
`;

function Navbar() {
	return (
		<div>
			<Title>Go here, not there! NYC</Title>
			<nav>
				<a>home</a>
				<a>about</a>
				<a>contact</a>
			</nav>
		</div>
	);
}

export default Navbar;
