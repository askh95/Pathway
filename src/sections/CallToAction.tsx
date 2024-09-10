"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export const CallToAction = () => {
	const sectionRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start end", "end start"],
	});

	const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
	return (
		<section
			ref={sectionRef}
			className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip"
		>
			<div className="container">
				<div className="section-heading relative">
					<h2 className="section-title">
						Зарегистрируйтесь бесплатно уже сегодня
					</h2>
					<p className="section-description mt-5">
						Празднуйте радость достижения с приложением, созданным для
						отслеживания вашего прогресса и мотивации ваших усилий.
					</p>
					<motion.img
						src={starImage.src}
						alt="Изображение звезды"
						width={360}
						className="absolute -left-[350px] -top-[137px]"
						style={{
							translateY,
						}}
					/>
					<motion.img
						src={springImage.src}
						alt="Изображение пружины"
						width={360}
						className="absolute -right-[331px] -top-[19px]"
						style={{
							translateY,
						}}
					/>
				</div>
				<div className="flex gap-2 mt-10 justify-center">
					<button className="btn btn-primary hover:bg-gray-600 transition-colors">
						Получить бесплатно
					</button>
					<button className="btn btn-text gap-1 hover:text-gray-600 hover:underline transition-colors">
						<span>Узнать больше</span>
						<ArrowRight className="h-5 w-5" />
					</button>
				</div>
			</div>
		</section>
	);
};
