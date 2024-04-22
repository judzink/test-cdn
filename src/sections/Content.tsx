import { PrimaryButton } from "@fluentui/react"
import FormTest from "../components/Form"

import styled from "styled-components"

const ContentWrapper = styled.div`
	width: 100%;
	background: white;
	border-radius: 8px;
	padding: 12px;
	height: 100%;
`

// example of changing a styled component
const StyledPrimaryButton = styled(PrimaryButton)`
	margin: 20px;
`

const Content = () => {
	return (
		<ContentWrapper>
			Management
			<div>
				With fluent ui
				<StyledPrimaryButton>Fluent UI</StyledPrimaryButton>
				<FormTest />
			</div>
		</ContentWrapper>
	)
}

export default Content
