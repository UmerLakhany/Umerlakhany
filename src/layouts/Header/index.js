import React from "react";
import { Box, Container, CardMedia, Typography } from "@mui/material";
import { Images } from "../../assets/Images";
import colors from "../../styles/colors";

function Header() {
	const Navigation = [
		{
			path: "#home",
			label: "Home",
		},
		{
			path: "#skills",
			label: "Skills",
		},
		{
			path: "#projects",
			label: "Projects ",
		},
		{
			path: "#testimonial",
			label: "Testimonials",
		},
		{
			path: "#contactUs",
			label: "Contact Us",
		},
	];

	return (
		<Box
			sx={{
				backgroundColor: [colors.primary],
				py: 0.5,
				position: "sticky",
				top: 0,
				backdropFilter: "blur(5px)",
				boxShadow: `-1px 1px 20px 0 ${colors.secondary}`,
				zIndex: 99,
			}}
		>
			<Container>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<a href="#home">
						<CardMedia
							component="img"
							image={Images.logo}
							sx={{
								width: 150,
								height: 65,
								objectFit: "fill",
								animation: "rotateY 2s linear",
							}}
						/>
					</a>
					<Box>
						{Navigation.map((item, index) => (
							<Typography
								key={index}
								component="a"
								href={item.path}
								sx={{
									display: "inline-block",
									color: [colors.white],
									fontWeight: 600,
									py: 2.5,
									ml: 3,
									"&:hover": {
										color: [colors.secondary],
										animation: "rotateY 2s linear",
									},
								}}
							>
								{item.label}
							</Typography>
						))}
					</Box>
				</Box>
			</Container>
		</Box>
	);
}

export default Header;
