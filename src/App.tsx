import { PartialTheme } from "@fluentui/react"
import LeftSection from "./sections/leftSection"
import MainSection from "./sections/mainSection"
import { StyledThemeProvider, Layout } from "./styles"

const appTheme: PartialTheme = {
	palette: {},
	defaultFontStyle: { fontFamily: "Segoe UI" },
}

function App() {
	return (
		<StyledThemeProvider theme={appTheme}>
			<Layout>
				<LeftSection />
				<MainSection />
			</Layout>
		</StyledThemeProvider>
	)
}

export default App
