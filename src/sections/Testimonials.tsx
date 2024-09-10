"use client";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import React from "react";

const testimonials = [
	{
		text: "Как дизайнер, я всегда ищу новые инструменты. Framer.com моментально привлек мое внимание.",
		imageSrc: avatar1.src,
		name: "Ivan Petrov",
		username: "ivan.petrov@gmail.com",
	},
	{
		text: "С того момента, как мы начали использовать этот инструмент, наша производительность просто взлетела.",
		imageSrc: avatar2.src,
		name: "Anna Smirnova",
		username: "anna.smirnova@gmail.com",
	},
	{
		text: "Это приложение кардинально изменило то, как я управляю проектами и соблюдаю сроки.",
		imageSrc: avatar3.src,
		name: "Dmitry Ivanov",
		username: "d.ivanov@gmail.com",
	},
	{
		text: "Меня поразило, насколько быстро мы смогли интегрировать это приложение в наш рабочий процесс.",
		imageSrc: avatar4.src,
		name: "Olga Kuznetsova",
		username: "olga.kuz@gmail.com",
	},
	{
		text: "Организация мероприятий стала намного проще. Это приложение помогает мне контролировать все детали, чтобы ничего не упустить.",
		imageSrc: avatar5.src,
		name: "Nikolay Sokolov",
		username: "n.sokolov@gmail.com",
	},
	{
		text: "Возможности кастомизации и интеграции этого приложения на высшем уровне.",
		imageSrc: avatar6.src,
		name: "Elena Vasileva",
		username: "elena.vasileva@gmail.com",
	},
	{
		text: "Использование этого приложения в нашей команде упростило управление проектами и улучшило коммуникацию.",
		imageSrc: avatar7.src,
		name: "Maxim Orlov",
		username: "maxim.orlov@gmail.com",
	},
	{
		text: "С этим приложением мы легко назначаем задачи, отслеживаем прогресс и управляем документами в одном месте.",
		imageSrc: avatar8.src,
		name: "Svetlana Makarova",
		username: "svetlana.makarova@gmail.com",
	},
	{
		text: "Интерфейс приложения удобен, а его возможности полностью удовлетворяют наши потребности.",
		imageSrc: avatar9.src,
		name: "Alexey Fedorov",
		username: "alexey.fedorov@gmail.com",
	},
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
	className?: string;
	testimonials: typeof testimonials;
	duration?: number;
}) => (
	<div className={props.className}>
		<motion.div
			animate={{
				translateY: "-50%",
			}}
			transition={{
				duration: props.duration || 10,
				repeat: Infinity,
				ease: "linear",
				repeatType: "loop",
			}}
			className="flex flex-col gap-6 pb-6"
		>
			{[...new Array(2)].fill(0).map((_, index) => (
				<React.Fragment key={index}>
					{props.testimonials.map(({ text, imageSrc, name, username }) => (
						<div className="card">
							<div>{text}</div>
							<div className="flex items-center gap-2 mt-5">
								<Image
									src={imageSrc}
									alt={name}
									width={40}
									height={40}
									className="h-10 w-10 rounded-full"
								/>
								<div className="flex flex-col">
									<div className="font-medium tracking-tight leading-5">
										{name}
									</div>
									<div className="leading-5 tracking-tight">{username}</div>
								</div>
							</div>
						</div>
					))}
				</React.Fragment>
			))}
		</motion.div>
	</div>
);

export const Testimonials = () => {
	return (
		<section id={"testimonials"} className="bg-white">
			<div className="container">
				<div className="section-heading">
					<div className="flex justify-center">
						<div className="tag">Отзывы</div>
					</div>
					<h2 className="section-title mt-5">Что говорят наши пользователи</h2>
					<p className="section-description mt-5">
						От интуитивного дизайна до мощных возможностей — наше приложение
						стало незаменимым инструментом для пользователей по всему миру.
					</p>
				</div>
				<div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
					<TestimonialsColumn testimonials={firstColumn} duration={15} />
					<TestimonialsColumn
						testimonials={secondColumn}
						className="hidden md:block"
						duration={19}
					/>
					<TestimonialsColumn
						testimonials={thirdColumn}
						className="hidden lg:block"
						duration={17}
					/>
				</div>
			</div>
		</section>
	);
};
