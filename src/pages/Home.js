import React, { Fragment } from "react";
import { Box, Button, Container, Grid, Typography, CardMedia } from "@mui/material";
import colors from "../styles/colors";
import { Images } from "../assets/Images";
import SocialMedia from "../data/SocialMedia";
import { Link } from "react-router-dom";

function Home() {
	const Skills = [
		{
			icon: Images.html,
		},
		{
			icon: Images.css,
		},
		{
			icon: Images.javascript,
		},
		{
			icon: Images.react,
		},
		{
			icon: Images.next,
		},
		{
			icon: Images.angular,
		},
		{
			icon: Images.bootstrap,
		},
		{
			icon: Images.tailwindcss,
		},
		{
			icon: Images.node,
		},
		{
			icon: Images.express,
		},
		{
			icon: Images.mongodb,
		},
		{
			icon: Images.firebase,
		},
	];

	return (
		<Fragment>
			{/* ======= Hero Section ======= */}
			<Box
				sx={{
					py: 4,
				}}
			>
				<Container>
					<Grid
						container
						sx={{ justifyContent: "space-between", alignItems: "center", py: 4 }}
					>
						<Grid item md={6}>
							<Typography
								variant="h1"
								sx={{
									fontSize: 32,
									color: [colors.white],
									fontWeight: 700,
									mb: 2,
								}}
							>
								Hy! I'm Umer Lakhany
							</Typography>
							<Typography
								variant="h1"
								sx={{
									fontSize: 28,
									color: [colors.secondary],
									fontWeight: 700,
									mb: 2,
								}}
							>
								A full-time freelance website developer
							</Typography>
							<Typography
								component="p"
								sx={{
									color: [colors.white],
									fontSize: 16,
									mb: 2,
								}}
							>
								I have years of experience and experts who help me ensure that every
								project is completed on time and to the highest standard. I know
								that my clients want effective and flawless websites, so I take the
								time to understand their needs and deliver work that exceeds their
								expectations.
							</Typography>
							<Button
								component={Link}
								target="_blank"
								to="https://www.fiverr.com/s/8zYld8o"
								sx={{
									backgroundColor: [colors.secondary],
									color: [colors.white],
									borderRadius: 12,
									textTransform: "capitalize",
									fontWeight: 600,
									padding: "12px 18px",
									width: 200,
									mb: 2,
									"&:hover": {
										opacity: 0.6,
										transform: "scale(1.05)",
										transition: "0.2s",
									},
								}}
							>
								Order Now
							</Button>
							<Box
								sx={{
									display: "flex",
									flexDirection: "row",
									alignItems: "center",
									gap: "14px",
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
						</Grid>
						<Grid item md={5}>
							<CardMedia
								component="img"
								image={Images.pic}
								sx={{
									width: "70%",
									borderRadius: "50%",
									mx: "auto",
									boxShadow: `-1px 1px 20px 0 ${colors.secondary}`,
								}}
							/>
						</Grid>
					</Grid>
				</Container>
			</Box>

			{/* ======= Skills ========== */}
			<Box>
				<Container>
					<Typography variant="h2">Skills</Typography>
					<Box>
						{Skills.map((item, index) => (
							<Box
								key={index}
								sx={{
									width: 100,
									height: 100,
									padding: "10px 8px",
									border: `1px solid ${colors.border}`,
									borderRadius: "50%",
									background: [colors.white],
								}}
							>
								<CardMedia
									component="img"
									image={item.icon}
									sx={{
										width: "100%",
										my: "auto",
										display: "block",
									}}
								/>
							</Box>
						))}
					</Box>
				</Container>
			</Box>
		</Fragment>
	);
}

export default Home;
