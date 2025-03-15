import React, { useState } from "react";
import {
	Box,
	Container,
	CardMedia,
	Typography,
	IconButton,
	Drawer,
	List,
	ListItem,
	ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Images } from "../../assets/Images";
import colors from "../../styles/colors";
import { Close } from "@mui/icons-material";

function Header() {
	const [drawerOpen, setDrawerOpen] = useState(false);

	const Navigation = [
		{ path: "#home", label: "Home" },
		{ path: "#skills", label: "Skills" },
		{ path: "#projects", label: "Projects" },
		{ path: "#testimonial", label: "Testimonials" },
		{ path: "#contactUs", label: "Contact Us" },
	];

	const toggleDrawer = (open) => (event) => {
		if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
			return;
		}
		setDrawerOpen(open);
	};

	return (
		<Box
			sx={{
				backgroundColor: colors.primary,
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

					{/* Desktop Navigation */}
					<Box sx={{ display: { xs: "none", md: "block" } }}>
						{Navigation.map((item, index) => (
							<Typography
								key={index}
								component="a"
								href={item.path}
								sx={{
									display: "inline-block",
									color: colors.white,
									fontWeight: 600,
									py: 2.5,
									ml: 3,
									"&:hover": {
										color: colors.secondary,
										animation: "rotateY 2s linear",
									},
								}}
							>
								{item.label}
							</Typography>
						))}
					</Box>

					{/* Mobile Menu Icon */}
					<IconButton
						sx={{ display: { xs: "block", md: "none" } }}
						onClick={toggleDrawer(true)}
					>
						{drawerOpen ? (
							<Close sx={{ color: colors.white }} />
						) : (
							<MenuIcon sx={{ color: colors.white }} />
						)}
					</IconButton>

					{/* Drawer for Mobile Navigation */}
					<Drawer
						anchor="left"
						open={drawerOpen}
						onClose={toggleDrawer(false)}
						PaperProps={{
							sx: {
								backdropFilter: "blur(5px)",
								boxShadow: `-1px 1px 20px 0 ${colors.secondary}`,
								backgroundColor: colors.primary,
								color: [colors.white],
								width: 200,
							},
						}}
					>
						<List>
							{Navigation.map((item, index) => (
								<ListItem
									button
									key={index}
									component="a"
									href={item.path}
									onClick={toggleDrawer(false)}
								>
									<ListItemText primary={item.label} />
								</ListItem>
							))}
						</List>
					</Drawer>
				</Box>
			</Container>
		</Box>
	);
}

export default Header;
