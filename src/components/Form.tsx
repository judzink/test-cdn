// Page1.js
import { useState } from "react"

const FormTest = (props: any) => {
	const [formData, setFormData] = useState({
		username: "",
		password: "",
	})

	const handleChange = (event: { target: { name: any; value: any } }) => {
		const { name, value } = event.target
		setFormData({ ...formData, [name]: value })
	}

	const handleSubmit = (event: { preventDefault: () => void }) => {
		event.preventDefault()
		// Handle form submission, for now just log the data
		console.log(formData)
		// You can send this data to an API or perform any other operation here
	}

	return (
		<div className="home">
			<h2>Component 1 - test</h2>
			<h2>{props.title}</h2>
			<h3>{props.subtitle}</h3>
			<h5>{props.description}</h5>
			<form id="test-submit" onSubmit={handleSubmit}>
				<div>
					<label htmlFor="username">Username:</label>
					<input
						type="text"
						id="username"
						name="username"
						value={formData.username}
						onChange={handleChange}
						required
					/>
				</div>
				<div>
					<label htmlFor="password">Password:</label>
					<input
						type="password"
						id="password"
						name="password"
						value={formData.password}
						onChange={handleChange}
						required
					/>
				</div>
				<button type="submit">Submit</button>
			</form>
		</div>
	)
}

export default FormTest
