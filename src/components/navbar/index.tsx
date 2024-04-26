import {
	makeStyles,
	SelectTabData,
	SelectTabEvent,
	Tab,
	TabList,
} from "@fluentui/react-components"
import {
	CalendarMonthRegular,
	CalendarMonthFilled,
	bundleIcon,
} from "@fluentui/react-icons"

const CalendarMonth = bundleIcon(CalendarMonthFilled, CalendarMonthRegular)

const useStyles = makeStyles({
	root: {
		alignItems: "flex-start",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		rowGap: "5px",
	},
})

interface Props {
	setSelectedValue: (name: unknown) => void
}

export const NavbarComponent = ({ setSelectedValue }: Props) => {
	const styles = useStyles()

	const onTabSelect = (event: SelectTabEvent, data: SelectTabData) => {
		console.log(event)
		setSelectedValue(data.value)
	}

	return (
		<div className={styles.root}>
			<TabList
				defaultSelectedValue="tab1"
				style={{ gap: "12px" }}
				onTabSelect={onTabSelect}
			>
				<Tab icon={<CalendarMonth />} value="tab1" style={{ gap: "6px" }}>
					Dashboard
				</Tab>
				<Tab
					icon={<CalendarMonth />}
					value="tab2"
					disabled
					style={{ gap: "6px" }}
				>
					Reports
				</Tab>
				<Tab
					icon={<CalendarMonth />}
					value="tab3"
					disabled
					style={{ gap: "6px" }}
				>
					All jobs
				</Tab>
				<Tab icon={<CalendarMonth />} value="tab4" style={{ gap: "6px" }}>
					My Jobs
				</Tab>
			</TabList>
		</div>
	)
}
