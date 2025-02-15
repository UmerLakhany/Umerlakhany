import React, { Fragment } from "react";
import { Box, Button, Container, Grid, Typography, CardMedia } from "@mui/material";
import colors from "../styles/colors";
import { Images } from "../assets/Images";
import SocialMedia from "../data/SocialMedia";
import { Link } from "react-router-dom";
import { OpenInNew } from "@mui/icons-material";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

function Home() {
	const Projects = [
		{
			img: Images.velvetCoin,
			heading: "Ecommerce (REACT JS)",
			content:
				"Fazshop is a sleek, responsive e-commerce site with a clean product grid, simple navigation, and smooth animations that enhance the user experience.",
			path: "#",
		},
		{
			img: Images.galaxy,
			heading: "Ecommerce (REACT JS)",
			content:
				"Fazshop is a sleek, responsive e-commerce site with a clean product grid, simple navigation, and smooth animations that enhance the user experience.",
			path: "#",
		},
		{
			img: Images.alegar,
			heading: "Ecommerce (REACT JS)",
			content:
				"Fazshop is a sleek, responsive e-commerce site with a clean product grid, simple navigation, and smooth animations that enhance the user experience.",
			path: "#",
		},
		{
			img: Images.easyFile,
			heading: "Ecommerce (REACT JS)",
			content:
				"Fazshop is a sleek, responsive e-commerce site with a clean product grid, simple navigation, and smooth animations that enhance the user experience.",
			path: "#",
		},
	];

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

	const Testimonial = [
		{
			img: Images.onomeapoe,
			name: "Onomeapoe (Nigeria)",
			content:
				"great job delivered. with Professionalism of work, Code expertise, Language fluency, and Delivery time. He had no reviews, at first i was skeptical... he said he just joined fiverr, and he proved himself. kudos to you bro. Will work with you again.",
		},
		{
			img: Images.onomeapoe,
			name: "Onomeapoe (Nigeria)",
			content:
				"great job delivered. with Professionalism of work, Code expertise, Language fluency, and Delivery time. He had no reviews, at first i was skeptical... he said he just joined fiverr, and he proved himself. kudos to you bro. Will work with you again.",
		},
	];

	return (
		<Fragment>
			{/* ======= Hero Section ======= */}
			<Box id="home" sx={{ pt: 4, pb: 6 }}>
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

			{/* ======= Skills ======= */}
			<Box
				id="skills"
				sx={{
					pb: 6,
				}}
			>
				<Container>
					<Typography
						variant="h2"
						sx={{
							fontSize: 32,
							fontWeight: 600,
							color: [colors.white],
							textAlign: "center",
							textTransform: "uppercase",
							mb: 6,
						}}
					>
						Skills
					</Typography>
					<Grid
						container
						sx={{
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						{Skills.map((item, index) => (
							<Grid item md={2} key={index}>
								<Box
									sx={{
										width: 120,
										height: 120,
										mx: "auto",
										mb: 3,
										padding: "10px 8px",
										border: `1px solid ${colors.border}`,
										borderRadius: "50%",
										background: [colors.white],
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									<CardMedia
										component="img"
										image={item.icon}
										sx={{
											width: "80%",
										}}
									/>
								</Box>
							</Grid>
						))}
					</Grid>
				</Container>
			</Box>

			{/* ======= Projects ======= */}
			<Box
				id="projects"
				sx={{
					pb: 10,
				}}
			>
				<Container>
					<Typography
						variant="h2"
						sx={{
							fontSize: 32,
							fontWeight: 600,
							color: [colors.white],
							textAlign: "center",
							textTransform: "uppercase",
							mb: 3,
						}}
					>
						projects
					</Typography>
					<Typography
						component="p"
						sx={{
							color: [colors.white],
							mx: 10,
							textAlign: "center",
							fontSize: 20,
						}}
					>
						I have completed many projects in the marketplace and out of marketplace.
						Here are a few past design projects I've worked on.
					</Typography>
					{Projects.map((item, index) => (
						<Grid
							key={index}
							container
							sx={{
								justifyContent: "space-between",
								alignItems: "center",
								pt: 8,
								flexDirection: index % 2 === 0 ? "row" : "row-reverse",
							}}
						>
							<Grid item md={6}>
								<CardMedia
									component="img"
									image={item.img}
									sx={{
										width: "100%",
									}}
								/>
							</Grid>
							<Grid md={5.5}>
								<Typography
									variant="h3"
									sx={{
										color: [colors.white],
										fontSize: 24,
										fontWeight: 600,
										mb: 3,
									}}
								>
									Ecommerce (REACT JS)
								</Typography>
								<Typography
									component="p"
									sx={{
										fontSize: 18,
										color: [colors.white],
										mb: 3,
									}}
								>
									Fazshop is a sleek, responsive e-commerce site with a clean
									product grid, simple navigation, and smooth animations that
									enhance the user experience.
								</Typography>
								<Typography
									component={Link}
									to="https://multi-vendor-ecommerce-app-eosin.vercel.app"
									target="_blank"
									sx={{
										color: [colors.secondary],
										display: "flex",
										flexDirection: "row",
										alignItems: "center",
										gap: 1,
										width: "fit-content",
									}}
								>
									<OpenInNew />
									<span>Live Link</span>
								</Typography>
							</Grid>
						</Grid>
					))}
				</Container>
			</Box>

			{/* ======= Testimonial ======= */}
			<Box
				id="testimonial"
				sx={{
					pb: 10,
				}}
			>
				<Container>
					<Typography
						variant="h2"
						sx={{
							fontSize: 32,
							fontWeight: 600,
							color: [colors.white],
							textAlign: "center",
							textTransform: "uppercase",
							mb: 2,
						}}
					>
						testimonial
					</Typography>
					<Typography
						component="p"
						sx={{
							color: [colors.white],
							textAlign: "center",
							fontSize: 20,
							mb: 3,
						}}
					>
						What client say
					</Typography>
					<Swiper
						slidesPerView={1}
						spaceBetween={30}
						loop={true}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						pagination={{
							clickable: true,
						}}
						navigation={true}
						modules={[Autoplay, Pagination, Navigation]}
						className="mySwiper"
					>
						{Testimonial.map((item, index) => (
							<SwiperSlide key={index}>
								<CardMedia
									component="img"
									image={item.img}
									sx={{
										width: 92,
										height: 92,
										borderRadius: "50%",
										mx: "auto",
										border: `3px solid ${colors.secondary}`,
										mb: 2,
									}}
								/>
								<Typography
									variant="h3"
									sx={{
										fontSize: 20,
										fontWeight: 600,
										color: [colors.white],
										textAlign: "center",
										mb: 2,
									}}
								>
									{item.name}
								</Typography>
								<Typography
									component="p"
									sx={{
										color: [colors.white],
										textAlign: "center",
										fontSize: 16,
										mx: 6,
									}}
								>
									{item.content}
								</Typography>
								<CardMedia
									component="img"
									image={Images.star}
									sx={{
										width: 120,
										mx: "auto",
										mb: 4,
									}}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</Container>
			</Box>

			{/* ======= Contact Us ========= */}
			<Box
				id="contactUs"
				sx={{
					pb: 6,
				}}
			>
				<Container>
					<Typography
						variant="h2"
						sx={{
							fontSize: 32,
							fontWeight: 600,
							color: [colors.white],
							textAlign: "center",
							textTransform: "uppercase",
							mb: 2,
						}}
					>
						Get In Touch
					</Typography>
					<Box
						sx={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							gap: "14px",
							justifyContent: "center",
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
					<form
						style={{
							width: "50%",
							margin: "40px auto",
							textAlign: "center",
						}}
					>
						<input
							type="text"
							placeholder="Name"
							required
							style={{
								border: "none",
								padding: "12px",
								backgroundColor: "transparent",
								color: "#fff",
								borderBottom: "1px solid #fff",
								marginBottom: "24px",
								outline: "none",
								fontSize: "18px",
								fontStyle: "italic",
								width: "100%",
							}}
						/>
						<input
							type="email"
							placeholder="Email"
							required
							style={{
								border: "none",
								padding: "12px",
								backgroundColor: "transparent",
								color: "#fff",
								borderBottom: "1px solid #fff",
								marginBottom: "24px",
								outline: "none",
								fontSize: "18px",
								fontStyle: "italic",
								width: "100%",
							}}
						/>
						<textarea
							type="text"
							placeholder="Type Your Message"
							rows={6}
							style={{
								border: "1px solid #fff",
								padding: "12px",
								backgroundColor: "transparent",
								color: "#fff",
								marginBottom: "24px",
								outline: "none",
								fontSize: "18px",
								fontStyle: "italic",
								width: "100%",
								borderRadius: "10px",
							}}
						/>
						<Button
							type="submit"
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
							Submit
						</Button>
					</form>
				</Container>
			</Box>
		</Fragment>
	);
}

export default Home;
