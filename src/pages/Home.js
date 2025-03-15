import React, { Fragment, useEffect } from "react";
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
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
	const Projects = [
		{
			img: Images.velvetCoin,
			heading: "Ecommerce (REACT JS)",
			content:
				"VelVet coin is a sleek, responsive e-commerce site with a clean product grid, simple navigation, and smooth animations that enhance the user experience.",
			path: "https://multi-vendor-ecommerce-app-eosin.vercel.app/",
		},
		{
			img: Images.galaxy,
			heading: "Ecommerce (Next JS)",
			content:
				"Galaxy worldwide is a sleek, responsive shipping site with a clean product grid, simple navigation, and smooth animations that enhance the user experience.",
			path: "https://www.gwwshipping.com/",
		},
		{
			img: Images.alegar,
			heading: "Ecommerce (HTML CSS)",
			content:
				"Aleger is a sleek, responsive Digital work flows site with a clean product grid, simple navigation, and smooth animations that enhance the user experience.",
			path: "https://alegerofficial.com/",
		},
		{
			img: Images.easyFile,
			heading: "Ecommerce (REACT JS)",
			content:
				"Easyfile is a sleek, responsive e-commerce site with a clean product grid, simple navigation, and smooth animations that enhance the user experience.",
			path: "https://easyfilerenamer.com/",
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
			img: Images.profile2,
			name: "decklan_dawson (United Kingdom)",
			content:
				"I have worked with Umer several times, he nailed it eveytime. His attention to details are amazing. He understand the idea really quickly and have excellent Domain Expertise in Dashboard Design and Web app Design.",
		},
		{
			img: Images.profile3,
			name: "josephdavid (United States)",
			content:
				"Amazing work by Umer! The Admin Panel dashboard design was clean, professional, and exactly what I needed. Excellent attention to detail and fast delivery.",
		},
	];

	useEffect(() => {
		AOS.init({
			duration: 1000, // animation duration in milliseconds
			once: true, // whether animation should happen only once
		});
	}, []);

	return (
		<Fragment>
			{/* ======= Hero Section ======= */}
			<Box id="home" sx={{ pt: 4, pb: 6 }}>
				<Container>
					<Grid
						container
						sx={{
							justifyContent: "space-between",
							alignItems: "center",
							py: 4,
						}}
					>
						<Grid
							data-aos="fade-right"
							item
							md={6}
							xs={12}
							sx={{ order: { xs: 2, md: 1 } }}
						>
							<Typography
								variant="h1"
								sx={{
									fontSize: {
										xs: 26,
										sm: 32,
									},
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
									fontSize: {
										xs: 22,
										sm: 28,
									},
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
								A full-time freelance website developer with expertise in React.js,
								Next.js, Angular, Node.js, and more. I specialize in building
								responsive, high-performance websites and fixing complex bugs to
								help businesses achieve smooth and efficient digital experiences.
								With a passion for clean code and modern design, I aim to deliver
								top-notch solutions that meet your goals.
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
									border: `2px solid ${colors.secondary}`,
									"&:hover": {
										backgroundColor: [colors.white],
										color: [colors.secondary],
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
						<Grid
							item
							md={5}
							xs={12}
							sx={{ order: { xs: 1, md: 2 } }}
							data-aos="fade-left"
						>
							<CardMedia
								component="img"
								image={Images.pic}
								sx={{
									width: {
										xs: "50%",
										md: "70%",
									},
									borderRadius: "50%",
									mx: "auto",
									boxShadow: `-1px 1px 20px 0 ${colors.secondary}`,
									mb: {
										xs: 6,
										md: 0,
									},
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
							fontSize: {
								xs: 26,
								sm: 32,
							},
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
							<Grid item md={2} sm={3} xs={6} key={index} data-aos="zoom-in-up">
								<Box
									sx={{
										width: {
											md: 100,
											xs: 80,
										},
										height: {
											md: 100,
											xs: 80,
										},
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
							fontSize: {
								xs: 26,
								sm: 32,
							},
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
							mx: {
								xs: 0,
								md: 10,
							},
							textAlign: "center",
							fontSize: {
								xs: 16,
								sm: 20,
							},
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
							<Grid item md={6} xs={12} data-aos="zoom-in">
								<CardMedia
									component="img"
									image={item.img}
									sx={{
										width: {
											xs: "50%",
											md: "100%",
										},
										mx: "auto",
										mb: {
											xs: 4,
										},
									}}
								/>
							</Grid>
							<Grid md={5.5} xs={12} data-aos="zoom-in">
								<Typography
									variant="h3"
									sx={{
										color: [colors.white],
										fontSize: {
											xs: 22,
											sm: 24,
										},
										fontWeight: 600,
										mb: 3,
									}}
								>
									{item.heading}
								</Typography>
								<Typography
									component="p"
									sx={{
										fontSize: {
											xs: 16,
											sm: 18,
										},
										color: [colors.white],
										mb: 3,
									}}
								>
									{item.content}
								</Typography>
								<Typography
									component={Link}
									to={item.path}
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
							fontSize: {
								xs: 26,
								sm: 32,
							},
							fontWeight: 600,
							color: [colors.white],
							textAlign: "center",
							textTransform: "uppercase",
							mb: 2,
						}}
					>
						testimonial
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
									data-aos="zoom-in"
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
									data-aos="zoom-in"
									variant="h3"
									sx={{
										fontSize: {
											xs: 18,
											sm: 20,
										},
										fontWeight: 600,
										color: [colors.white],
										textAlign: "center",
										mb: 2,
									}}
								>
									{item.name}
								</Typography>
								<Typography
									data-aos="zoom-in"
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
									data-aos="zoom-in"
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
				data-aos="fade-right"
				id="contactUs"
				sx={{
					pb: 6,
				}}
			>
				<Container>
					<Typography
						variant="h2"
						sx={{
							fontSize: {
								xs: 26,
								sm: 32,
							},
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
					<Box
						sx={{
							width: {
								xs: "89%",
								md: "60%",
							},
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
								width: "80%",
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
								width: "80%",
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
								width: "80%",
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
								border: `2px solid ${colors.secondary}`,
								"&:hover": {
									backgroundColor: [colors.white],
									color: [colors.secondary],
								},
							}}
						>
							Submit
						</Button>
					</Box>
				</Container>
			</Box>
		</Fragment>
	);
}

export default Home;
