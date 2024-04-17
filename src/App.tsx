function App() {
	return (
		<div style={{ display: "flex", gap: "20px", height: "100%" }}>
			{/* Section 1 */}
			<div
				style={{
					background: "white",
					width: "320px",
					borderRadius: "8px",
					padding: "12px",
				}}
			>
				Active Session
			</div>

			<div
				style={{
					display: "flex",
					flexDirection: "column",
					width: "100%",
					gap: "20px",
				}}
			>
				{/* Navbar */}
				<div
					style={{ background: "white", borderRadius: "8px", padding: "12px" }}
				>
					Header
				</div>
				{/* content wrapper  */}
				<div style={{ display: "flex", gap: "20px", height: "100%" }}>
					{/* content */}
					<div
						style={{
							width: "100%",
							background: "white",
							borderRadius: "8px",
							padding: "12px",
							height: "100%",
						}}
					>
						Management
					</div>
					{/* jobs */}
					<div
						style={{
							width: "320px",
							background: "white",
							borderRadius: "8px",
							padding: "12px",
							height: "100%",
						}}
					>
						Schedules Jobs
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
