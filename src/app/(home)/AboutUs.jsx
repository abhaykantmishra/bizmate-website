import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { image_url } from "@/constant/image";
import { HoverButton } from "@/components/hover-button";
import Link from "next/link";

// Assign a pastel background for each tab
const tabBg = [
	"bg-[#E3F2FD]", // Mission - light blue
	"bg-[#FFF8E1]", // Vision - light yellow
	"bg-[#E8F5E9]", // Idea - light green
];

const tabs = [
	{
		label: "Mission",
		content:
			"To help organizations unlock the power of people through tailored HR strategies, leadership coaching, compliance frameworks, and culture-first advisory — driving long-term growth and resilience.",
		image: "/assets/mission.jpeg", 
	},
	{
		label: "Vision",
		content:
			"To become the most trusted partner for businesses seeking to build empowered, purpose-driven teams — by delivering transformational HR solutions rooted in empathy, expertise, and execution.",
		image: "/assets/vision.jpeg", 
	},
	{
		label: "Idea",
		content:
			"We believe that people are the true differentiators of any business. BizMate was born out of the need to align human potential with strategic growth — creating workplaces where both people and profits thrive.",
		image: "/assets/image2.jpeg", 
	},
];

const tabUnderlineVariants = {
	initial: { width: 0, left: 0 },
	animate: (custom) => ({
		width: custom.width,
		left: custom.left,
		transition: { type: "spring", stiffness: 300, damping: 30 },
	}),
};

export function AboutUs() {
	const [activeTab, setActiveTab] = useState(0);
	const [tabRects, setTabRects] = useState([]);
	const tabRefs = React.useRef([]);

	React.useEffect(() => {
		setTabRects(tabRefs.current.map((ref) => ref?.getBoundingClientRect()));
	}, [activeTab]);

	// For underline animation
	const tabListRef = React.useRef(null);
	const [tabListRect, setTabListRect] = useState(null);
	React.useEffect(() => {
		if (tabListRef.current) {
			setTabListRect(tabListRef.current.getBoundingClientRect());
		}
	}, []);

	// Calculate underline position and width
	let underlineProps = { width: 0, left: 0 };
	if (tabRects[activeTab] && tabListRect) {
		underlineProps = {
			width: tabRects[activeTab].width,
			left: tabRects[activeTab].left - tabListRect.left,
		};
	}

	return (
		<section id="idea-vision-mission" className="mt-40 mb-32 mx-5 md:mx-0 z-20">
			<h1 className="relative z-20 text-center text-xl md:text-5xl font-bold my-10 md:my-20 md:mt-40">
				About Us
			</h1>
			<div className="relative flex justify-center mb-8 z-20">
				<div
					ref={tabListRef}
					className="inline-flex bg-white rounded-full overflow-hidden shadow-md"
				>
					{tabs.map((tab, idx) => (
						<button
							key={tab.label}
							ref={(el) => (tabRefs.current[idx] = el)}
							className={cn(
								"px-6 py-2 md:px-12 md:py-3 rounded-none font-semibold transition-all duration-200 relative",
								idx === activeTab
									? "bg-primary text-primary-foreground shadow"
									: "text-primary hover:bg-primary/20"
							)}
							onClick={() => setActiveTab(idx)}
						>
							{tab.label}
						</button>
					))}
				</div>
			</div>
			<div
				className={cn(
					"relative z-20 flex flex-col bg-gradient-to-br from-yellow-100 to-green-500 md:flex-row items-center gap-8 md:gap-16 md:max-w-7xl mx-auto rounded-xl shadow-xl p-6 md:p-16 transition-all duration-300",
					"bg-opacity-90 dark:bg-opacity-60"
				)}
			>
				<AnimatePresence mode="wait" className="bg-[#8da13d]">
					<motion.div
						key={activeTab}
						initial={{ opacity: 0, x: 60, scale: 0.95 }}
						animate={{ opacity: 1, x: 0, scale: 1 }}
						exit={{ opacity: 0, x: -60, scale: 0.95 }}
						transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
						className="md:w-1/2 flex justify-center"
					>
						<img
							src={tabs[activeTab].image}
							alt={tabs[activeTab].label}
							width={440}
							height={320}
							className="rounded-xl object-cover shadow-xl border-4 border-primary/20"
							style={{ maxHeight: 320, background: "#f3f4f6" }}
						/>
					</motion.div>
				</AnimatePresence>
				<motion.div
					key={tabs[activeTab].label + "-content"}
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
					className=" md:w-1/2"
				>
					<h2 className="text-2xl md:text-4xl font-bold mb-4 text-primary drop-shadow">
						{tabs[activeTab].label}
					</h2>
					<p className="text-sm md:text-lg text-gray-700 dark:text-gray-200 leading-relaxed relative z-20">
						{tabs[activeTab].content}
					</p>
					<Link href="/about" className="my-2">
						<HoverButton isPrimary={true} hoverColor="#fff" className={"hover:border-white hover:text-primary text-xs md:text-sm py-2 md:py-[11px] my-10"}>
							Read More
						</HoverButton>
					</Link>
				</motion.div>
				
			</div>
		</section>
	);
}