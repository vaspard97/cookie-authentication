import { Button, Typography, Box } from "@mui/material";

export default function Banner() {
	return (
		<Box>
			<Typography
				color={"white"}
				variant="h4"
				textAlign={"center"}
				gutterBottom
			>
				The Bug Tracker
			</Typography>
			<Typography color={"white"} variant="h6" textAlign={"center"}>
				Submit and Manage your bug.
			</Typography>
			<Typography color={"white"} variant="subtitle2" textAlign={"center"}>
				A Collaborative platform for Devs.
			</Typography>
			<Box
				display={"flex"}
				justifyContent={"center"}
				alignItems={"center"}
				marginTop={8}
			>
				<Button variant="contained" color="info" fullWidth>
					LEARN MORE
				</Button>
			</Box>
		</Box>
	);
}
