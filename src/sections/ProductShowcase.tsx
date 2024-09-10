"use client";
import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export const ProductShowcase = () => {
	const sectionRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start end", "end start"],
	});
	const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
	return (
		<section
			id={"productshowcase"}
			ref={sectionRef}
			className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip"
		>
			<div className="container">
				<div className="section-heading">
					<div className="flex justify-center">
						<div className="tag">Увеличьте свою продуктивность</div>
					</div>
					<h2 className="section-title mt-5">
						Более эффективный способ отслеживания прогресса
					</h2>
					<p className="section-description mt-5">
						Легко превратите свои идеи в полностью функциональный, адаптивный
						сайт SaaS за считанные минуты с помощью этого шаблона.
					</p>
				</div>
				<div className="relative">
					<Image
						src={productImage}
						alt="Изображение продукта"
						className="mt-10"
					/>
					<motion.img
						src={pyramidImage.src}
						alt="Изображение пирамиды"
						height={262}
						width={262}
						className="hidden md:block absolute -right-36 -top-32"
						style={{
							translateY,
						}}
					/>
					<motion.img
						src={tubeImage.src}
						alt="Изображение трубы"
						height={248}
						width={248}
						className="hidden md:block absolute bottom-24 -left-36"
						style={{
							translateY,
						}}
					/>
				</div>
			</div>
		</section>
	);
};
