import { useState } from "react"
import { TabValue } from "@fluentui/react-components"
import DashboardComponent from "@/components/dashboard"
import Jobs from "@/components/jobs"
import {
	StyledWrapper,
	StyledDynamicContentWrapper,
	StyledTabContentWrapper,
} from "./styles"
import { NavbarComponent } from "@/components/navbar"

const MainSection = () => {
	const [selectedValue, setSelectedValue] = useState<TabValue>("tab1")
	return (
		<StyledWrapper>
			<NavbarComponent setSelectedValue={setSelectedValue} />
			<StyledDynamicContentWrapper>
				<StyledTabContentWrapper>
					{selectedValue === "tab1" && <DashboardComponent />}
					{selectedValue === "tab2" && <div>Reports</div>}
					{selectedValue === "tab3" && <div>All jobs</div>}
					{selectedValue === "tab4" && <div>My jobs</div>}
				</StyledTabContentWrapper>
				<Jobs />
			</StyledDynamicContentWrapper>
		</StyledWrapper>
	)
}

export default MainSection
