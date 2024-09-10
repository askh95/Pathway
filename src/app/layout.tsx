"use client";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import Lenis from "lenis";
import React, { useEffect } from "react";

const dmSans = DM_Sans({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	useEffect(() => {
		const lenis = new Lenis();

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		return () => {
			lenis.destroy();
			// @ts-ignore
			cancelAnimationFrame(raf);
		};
	}, []);

	return (
		<html lang="ru" className="relative">
			<body className={twMerge(dmSans.className, "antialiased bg-[#EAEEFE]")}>
				{children}
			</body>
		</html>
	);
}
