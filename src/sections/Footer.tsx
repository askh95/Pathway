import Image from "next/image";
import logo from "@/assets/logosaas.png";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";
import React from "react";

export const Footer = () => {
	return (
		<footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
			<div className="container">
				<div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
					<Image
						src={logo}
						height={40}
						alt="Логотип SaaS"
						className="relative"
					/>
				</div>
				<nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
					<a
						href="#hero"
						className="hover:text-gray-200 hover:underline transition-colors"
					>
						О нас
					</a>
					<a
						href="#productshowcase"
						className="hover:text-gray-200 hover:underline transition-colors"
					>
						Функции
					</a>
					<a
						href="#testimonials"
						className="hover:text-gray-200 hover:underline transition-colors"
					>
						Клиенты
					</a>
					<a
						href="#pricing"
						className="hover:text-gray-200 hover:underline transition-colors"
					>
						Цены
					</a>
					<a
						href="#"
						className="hover:text-gray-200 hover:underline transition-colors"
					>
						Помощь
					</a>
					<a
						href="#"
						className="hover:text-gray-200 hover:underline transition-colors"
					>
						Карьера
					</a>
				</nav>
				<div className="flex justify-center gap-6 mt-6 cursor-pointer">
					<SocialX />
					<SocialInsta />
					<SocialLinkedIn />
					<SocialPin />
					<SocialYoutube />
				</div>
				<p className="mt-6">
					&copy; 2024 Ваша компания, Inc. Все права защищены.
				</p>
			</div>
		</footer>
	);
};
