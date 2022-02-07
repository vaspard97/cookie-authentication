import { Container, Box, Typography } from "@mui/material";

export default function LoadingPage() {
	return (
		<Container>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
				height={"100vh"}
			>
				<Typography textAlign={"center"}>Loading...</Typography>
			</Box>
		</Container>
	);
}
