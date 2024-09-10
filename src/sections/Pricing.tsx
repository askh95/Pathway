"use client";
import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import React from "react";

const pricingTiers = [
	{
		title: "Free",
		monthlyPrice: 0,
		buttonText: "Начать бесплатно",
		popular: false,
		inverse: false,
		features: [
			"До 5 участников проекта",
			"Неограниченные задачи и проекты",
			"2 ГБ хранилища",
			"Интеграции",
			"Базовая поддержка",
		],
	},
	{
		title: "Pro",
		monthlyPrice: 390,
		buttonText: "Зарегистрироваться",
		popular: true,
		inverse: true,
		features: [
			"До 50 участников проекта",
			"Неограниченные задачи и проекты",
			"50 ГБ хранилища",
			"Интеграции",
			"Приоритетная поддержка",
			"Расширенная поддержка",
			"Поддержка экспорта данных",
		],
	},
	{
		title: "Business",
		monthlyPrice: 990,
		buttonText: "Зарегистрироваться",
		popular: false,
		inverse: false,
		features: [
			"До 5 участников проекта",
			"Неограниченные задачи и проекты",
			"200 ГБ хранилища",
			"Интеграции",
			"Персональный менеджер",
			"Настраиваемые поля",
			"Расширенная аналитика",
			"Возможности экспорта данных",
			"Доступ к API",
			"Расширенные функции безопасности",
		],
	},
];

export const Pricing = () => {
	return (
		<section id={"pricing"} className="py-24 bg-white">
			<div className="container">
				<div className="section-heading">
					<h2 className="section-title">Тарифы</h2>
					<p className="section-description mt-5">
						Бесплатно навсегда. Обновите тариф для получения неограниченных
						задач, повышенной безопасности и эксклюзивных возможностей.
					</p>
				</div>
				<div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
					{pricingTiers.map(
						({
							title,
							monthlyPrice,
							buttonText,
							popular,
							inverse,
							features,
						}) => (
							<div
								className={twMerge(
									"card",
									inverse === true && "border-black bg-black text-white"
								)}
							>
								<div className="flex justify-between">
									<h3
										className={twMerge(
											"text-lg font-bold text-black/50 hover:bg-gray-600",
											inverse === true && "text-white/60"
										)}
									>
										{title}
									</h3>
									{popular === true && (
										<div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
											<motion.span
												animate={{
													backgroundPositionX: "100%",
												}}
												transition={{
													duration: 1,
													repeat: Infinity,
													ease: "linear",
													repeatType: "loop",
												}}
												className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] [background-size:200%] text-transparent bg-clip-text font-medium"
											>
												Popular
											</motion.span>
										</div>
									)}
								</div>
								<div className="flex items-baseline gap-1 mt-[30px]">
									<span className="text-4xl font-bold tracking-tighter leading-none">
										{monthlyPrice}₽
									</span>
									<span
										className={twMerge(
											"tracking-tight font-bold",
											inverse === true ? "text-gray-500" : "text-black/50"
										)}
									>
										/в месяц
									</span>
								</div>
								<button
									className={twMerge(
										"btn btn-primary w-full mt-[30px] hover:bg-gray-700 hover:text-white transition-colors",
										inverse === true &&
											"bg-white text-black hover:bg-gray-400 hover:text-gray-200"
									)}
								>
									{buttonText}
								</button>

								<ul className="flex flex-col gap-5 mt-8">
									{features.map((feature) => (
										<li className="text-sm flex items-center gap-4">
											<CheckIcon className="h-6 w-6" />
											<span>{feature}</span>
										</li>
									))}
								</ul>
							</div>
						)
					)}
				</div>
			</div>
		</section>
	);
};
