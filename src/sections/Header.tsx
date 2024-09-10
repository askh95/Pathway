import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import React from "react";

export const Header = () => {
	return (
		<header className="sticky top-0 backdrop-blur-sm z-20">
			<div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
				<p className="text-white/60 hidden md:block">
					Проект коммерческий с открытым исходным кодом. Копирование без
					разрешения нарушает права и вредит репутации.
				</p>
			</div>
			<div className="py-5">
				<div className="container">
					<div className="flex items-center justify-between">
						<Image src={Logo} alt="Логотип SaaS" height={40} width={40} />
						<MenuIcon className="h-5 w-5 md:hidden" />
						<nav className="hidden md:flex gap-6 text-black/60 items-center">
							<a
								href="#hero"
								className="hover:text-gray-800 hover:underline transition-colors"
							>
								О нас
							</a>
							<a
								href="#productshowcase"
								className="hover:text-gray-800 hover:underline transition-colors"
							>
								Функции
							</a>
							<a
								href="#testimonials"
								className="hover:text-gray-800 hover:underline transition-colors"
							>
								Клиенты
							</a>
							<a
								href="#"
								className="hover:text-gray-800 hover:underline transition-colors"
							>
								Обновления
							</a>
							<a
								href="#"
								className="hover:text-gray-800 hover:underline transition-colors"
							>
								Помощь
							</a>
							<button className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tigh transition-colors">
								Получить бесплатно
							</button>
						</nav>
					</div>
				</div>
			</div>
		</header>
	);
};
