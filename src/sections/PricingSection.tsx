"use client";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const plans = [
	{ gb: 5, price: "$10" },
	{ gb: 10, price: "$18" },
	{ gb: 15, price: "$24" },
	{ gb: 20, price: "$32" },
	{ gb: 30, price: "$48" },
	{ gb: 50, price: "$75" },
	{ gb: 100, price: "$140" }
];


type PricingSectionProps = {
	onSubscribe?: () => void;
};

export default function PricingSection({ onSubscribe }: PricingSectionProps) {
	const carouselApiRef = useRef<CarouselApi | null>(null);
	const autoplayPlugin = useRef(Autoplay({ delay: 3000 }));

	function handleCardClick(idx: number) {
		carouselApiRef.current?.scrollTo(idx);
		if (onSubscribe) {
			onSubscribe();
		}
	}

	return (
		<section className="py-12">
			<h2 className="text-3xl font-bold text-center mb-8 font-montserrat">
				Gigabyte Options
			</h2>
			<div className="flex justify-center relative">
				<Carousel
					className="w-full max-w-5xl"
					opts={{ slidesToScroll: 1, align: "start" }}
					plugins={[autoplayPlugin.current]}
					setApi={(api) => (carouselApiRef.current = api)}
				>
					<CarouselContent className="flex">
						{plans.map((plan, idx) => (
							<CarouselItem key={idx} className="flex justify-center basis-1/5">
								<div
									className="p-10 rounded-2xl shadow-xl border border-primary bg-white flex flex-col items-center w-64 h-56 gap-4 cursor-pointer"
									onClick={() => handleCardClick(idx)}
								>
									<div className="text-4xl font-bold font-montserrat">
										{plan.gb}
										<br />
										GB
									</div>
									<div className="text-2xl font-open-sans">
										{plan.price}
									</div>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>
		</section>
	);
}
