import { Exo_2 } from "next/font/google";
import { Providers } from "./providers";
import "./styles.css";

const exo_2 = Exo_2({
	subsets: ["latin"],
	display: "swap",
	weight: ["400", "500", "600", "700", "800"],
	variable: "--font-exo2",
});

export const metadata = {
	title: "Bashable",
	description: "Social media platform",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${exo_2.variable} h-full`}>
			<body className="h-full">
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
