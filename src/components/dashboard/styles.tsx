import styled from "styled-components"
import { Text } from "@fluentui/react-components"

export const StyledFlexWrapper = styled.div`
	display: flex;
`

export const StyledHeader = styled.div`
	display: flex;
	justify-content: space-between;
`

export const StyledGroupWrapper = styled.div`
	border: 1px solid #e0e0e0;
	margin: 12px 0;
	border-radius: 4px;
`

export const StyledIconWrapper = styled.div`
	padding: 0 18px;
	background: #fafafa;
	height: 100%;
	display: flex;
	align-items: center;
`

export const StyledTitleWrapper = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
`

export const StyledHeaderText = styled(Text)`
	padding: 18px 8px;
	font-size: 16px;
	width: 100%;
	border-bottom: 1px solid #e0e0e0;
	border-left: 1px solid #e0e0e0;
	border-right: 1px solid #e0e0e0;
`

export const StyledTotalWrapper = styled.div`
	display: flex;
	align-items: center;
	padding: 16px;
	gap: 4px;
	font-size: 16px;
	font-weight: 600;
	height: 100%;
	border-bottom: 1px solid #e0e0e0;
`

export const StyledCategoryWrapper = styled.div`
	background-color: #fafafa;
	display: flex;
	flex-direction: column;
`

export const StyledCategoryRow = styled.div`
	padding: 23px;
	display: flex;
	flex-direction: column;
	gap: 16px;
`

export const StyledText = styled(Text)`
	font-size: 14px;
	font-weight: 600 !important;
`

export const StyledChildrenRow = styled.div`
	display: flex;
	flex-direction: row;
	gap: 4px;
`
