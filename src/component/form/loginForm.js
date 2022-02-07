import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../redux/action/authAction";

import { Button, TextField, Box, Typography } from "@mui/material";

let initialState = { email: "", password: "" };
export default function SignIn() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const currentUserSelector = useSelector(
		(state) => state.authenticationReducer
	);
	const [formData, setFormData] = useState(initialState);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(signIn(formData, navigate));
	};
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const cleanUpcurrentUserSelector = () => {
		currentUserSelector.data = null;
		currentUserSelector.success = false;
		currentUserSelector.loading = false;
	};

	return (
		<Box
			marginTop={6}
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Typography variant="h4">Sign In</Typography>

			<Box component="form" onSubmit={handleSubmit} marginTop={1}>
				<TextField
					fullWidth
					required
					label="Email"
					name="email"
					margin="normal"
					type="email"
					autoComplete="current-email"
					onChange={handleChange}
				/>
				<TextField
					fullWidth
					required
					label="Password"
					name="password"
					margin="normal"
					type="password"
					autoComplete="new-password"
					onChange={handleChange}
				/>

				<Button
					disabled={currentUserSelector.loading}
					type="submit"
					fullWidth
					variant="contained"
					sx={{ mt: 1, mb: 1 }}
				>
					Sign In
				</Button>
			</Box>
		</Box>
	);
}
