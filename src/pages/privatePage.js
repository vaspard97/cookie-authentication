import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoadingPage from "./loadingPage";
import { Button, Container, Typography } from "@mui/material";
import { signOut } from "../redux/action/authAction";
export default function PrivatePage() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const currentUserSelector = useSelector(
		(state) => state.authenticationReducer
	);
	const handleLogOut = () => {
		dispatch(signOut(navigate));
	};
	return currentUserSelector.loading ||
		currentUserSelector.data === null ||
		undefined ? (
		<LoadingPage />
	) : (
		<Container>
			<Typography>{currentUserSelector.data.firstName}</Typography>
			<Typography>{currentUserSelector.data.lastName}</Typography>
			<Typography>{currentUserSelector.data.email}</Typography>
			<Button onClick={handleLogOut}>Log Out</Button>
		</Container>
	);
}
