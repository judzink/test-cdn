import { NavbarComponent } from "@/components/NavbarComponent"
import styled from "styled-components"

const NavbarWrapper = styled.div`
	background: white;
	border-radius: 8px;
	padding: 12px;
`

const Navbar = () => {
	return (
		<NavbarWrapper>
			<NavbarComponent />
		</NavbarWrapper>
	)
}

export default Navbar
