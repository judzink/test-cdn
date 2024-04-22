import Navbar from "./sections/Navbar"
import Content from "./sections/Content"
import Jobs from "./sections/Jobs"
import Session from "./sections/Session"

import styled from "styled-components"

const Layout = styled.div`
	display: flex;
	gap: 20px;
	height: 100%;
`

const MainWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 20px;
`

const ContentWrapper = styled.div`
	display: flex;
	gap: 20px;
	height: 100%;
`

// TODO: add props when some of the components are done
function App(props: any) {
	const { name } = props
	console.log("PROPS - name", name)
	return (
		<Layout>
			<Session />

			<MainWrapper>
				<Navbar />
				<ContentWrapper>
					<Content />
					<Jobs />
				</ContentWrapper>
			</MainWrapper>
		</Layout>
	)
}

export default App
