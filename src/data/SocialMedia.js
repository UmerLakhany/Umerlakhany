import { Facebook, GitHub, Instagram, WhatsApp } from "@mui/icons-material";
import colors from "../styles/colors";

const SocialMedia = [
	{
		path: "https://github.com/UmerLakhany",
		icon: <GitHub sx={{ color: [colors.white] }} />,
	},
	{
		path: "https://www.facebook.com/share/15cEWekGDv/",
		icon: <Facebook sx={{ color: [colors.white] }} />,
	},
	{
		path: "https://www.instagram.com/lakhanyxx?igsh=cG9sYzc2dnppN2Ns",
		icon: <Instagram sx={{ color: [colors.white] }} />,
	},
	{
		path: "https://wa.me/qr/RUYVQW4LFBQXF1 ",
		icon: <WhatsApp sx={{ color: [colors.white] }} />,
	},
];

export default SocialMedia;
