import React from "react";
import { Box, CardMedia, Container } from "@mui/material";
import colors from "../../styles/colors";
import { Images } from "../../assets/Images";
import { Link } from "react-router-dom";
import SocialMedia from "../../data/SocialMedia";

function Footer() {
	return (
		<Box
			sx={{
				backgroundColor: [colors.primary],
				py: 0.5,
				boxShadow: `-1px 1px 20px 0 ${colors.secondary}`,
			}}
		>
			<Container>
				<Box
					sx={{
						display: {
							xs: "block",
							sm: "flex",
						},
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<Link to="/">
						<CardMedia
							component="img"
							image={Images.logo}
							sx={{
								width: 150,
								height: 65,
								objectFit: "fill",
								animation: "rotateY 2s linear",
								mx: "auto",
							}}
						/>
					</Link>
					<Box
						sx={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							gap: "14px",
							justifyContent: "space-around",
							my: {
								xs: 1,
								sm: 0,
							},
						}}
					>
						<Box
							component={Link}
							to="https://www.fiverr.com/s/8zYld8o"
							target="_blank"
							sx={{
								border: `1px solid ${colors.border}`,
								borderRadius: "50%",
								padding: "8px 10px",
								"&:hover img": {
									content: `url(${Images.fiverBlue})`,
									animation: "rotateY 2s linear",
								},
								"&:hover": {
									backgroundColor: [colors.gray],
								},
							}}
						>
							<CardMedia
								component="img"
								image={Images.fiver}
								sx={{
									width: 26,
									height: 26,
									objectFit: "contain",
								}}
							/>
						</Box>
						{SocialMedia.map((item, index) => (
							<Box
								key={index}
								component={Link}
								to={item.path}
								target="_blank"
								sx={{
									border: `1px solid ${colors.border}`,
									borderRadius: "50%",
									padding: "8px 10px",
									"&:hover svg": {
										color: [colors.secondary],
										animation: "rotateY 2s linear",
									},
									"&:hover": {
										backgroundColor: [colors.gray],
									},
								}}
							>
								{item.icon}
							</Box>
						))}
					</Box>
				</Box>
			</Container>
		</Box>
	);
}

export default Footer;
