import { Body2, Text } from "@fluentui/react-components"
import mockData from "../../mockData/dashboard.json"

import { CalendarMonthRegular } from "@fluentui/react-icons"
import {
	StyledGroupWrapper,
	StyledHeader,
	StyledTitleWrapper,
	StyledIconWrapper,
	StyledHeaderText,
	StyledTotalWrapper,
	StyledFlexWrapper,
	StyledCategoryWrapper,
	StyledCategoryRow,
	StyledChildrenRow,
	StyledText,
} from "./styles"

const renderGroup = (item: any) => {
	return (
		<StyledGroupWrapper>
			<StyledHeader>
				<StyledTitleWrapper>
					<StyledIconWrapper>
						<CalendarMonthRegular fontSize={28} />
					</StyledIconWrapper>

					<StyledHeaderText style={{ fontSize: "16px", fontWeight: "600" }}>
						{item.label}
					</StyledHeaderText>
					<StyledTotalWrapper>
						<StyledFlexWrapper>Total </StyledFlexWrapper>
						{item.total}
					</StyledTotalWrapper>
				</StyledTitleWrapper>
			</StyledHeader>
			<StyledCategoryWrapper>
				<StyledFlexWrapper>
					<StyledCategoryRow>
						{item.children1.map((item: any) => {
							return (
								<StyledChildrenRow>
									<CalendarMonthRegular fontSize={20} />
									<StyledText>{item.label}</StyledText>
									<StyledText>{item.total}</StyledText>
								</StyledChildrenRow>
							)
						})}
					</StyledCategoryRow>
					<StyledCategoryRow>
						{item.children2.map((item: any) => {
							return (
								<StyledChildrenRow>
									<CalendarMonthRegular fontSize={20} />
									<StyledText>{item.label}</StyledText>
									<StyledText>{item.total}</StyledText>
								</StyledChildrenRow>
							)
						})}
					</StyledCategoryRow>
				</StyledFlexWrapper>
				{/* <div>Filtered</div> */}
			</StyledCategoryWrapper>
		</StyledGroupWrapper>
	)
}

const DashboardComponent = () => {
	return (
		<div>
			<StyledHeader>
				<Body2>Management</Body2>
				<Text>Data synced: Today 12:30AM</Text>
			</StyledHeader>
			{mockData.map((item) => renderGroup(item))}
		</div>
	)
}

export default DashboardComponent
