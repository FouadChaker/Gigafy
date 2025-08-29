"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const questions = [
	{
		question: "How likely are you to recommend Gigafy to a friend?",
		type: "scale",
		options: ["1", "2", "3", "4", "5"],
	},
	{
		question: "What feature excites you most?",
		type: "text",
	},
];

export default function SurveySection({
	phone,
	onSubmit,
}: {
	phone: string;
	onSubmit: (answers: any) => void;
}) {
	const [answers, setAnswers] = useState<{ [key: string]: string }>({});
	const [submitted, setSubmitted] = useState(false);

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		setAnswers({ ...answers, [e.target.name]: e.target.value });
	}

	function handleScaleChange(q: string, value: string) {
		setAnswers({ ...answers, [q]: value });
	}

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		await onSubmit({ ...answers, phone });
		setSubmitted(true);
	}

	if (submitted) {
		return (
			<section className="py-12 text-center">
				<h2 className="text-2xl font-bold mb-4 font-montserrat">
					Thank you for your feedback!
				</h2>
				<p className="font-open-sans">
					We appreciate your input and will use it to improve Gigafy.
				</p>
			</section>
		);
	}

	return (
		<section className="py-12 flex flex-col items-center">
			<h2 className="text-2xl font-bold mb-4 font-montserrat">Quick Survey</h2>
			<form
				className="flex flex-col gap-6 w-full max-w-md"
				onSubmit={handleSubmit}
			>
				{questions.map((q, idx) => (
					<div key={idx} className="flex flex-col gap-2">
						<Label
							className="font-montserrat font-semibold mb-1"
							htmlFor={q.question}
						>
							{q.question}
						</Label>
						{q.type === "scale" ? (
							<div className="flex gap-2 justify-center">
								{q.options!.map((opt) => (
									<Button
										key={opt}
										type="button"
										variant={
											answers[q.question] === opt
												? "default"
												: "outline"
										}
										onClick={() => handleScaleChange(q.question, opt)}
									>
										{opt}
									</Button>
								))}
							</div>
						) : (
							<Input
								type="text"
								name={q.question}
								id={q.question}
								className="font-open-sans border rounded p-3"
								value={answers[q.question] || ""}
								onChange={handleChange}
								required
							/>
						)}
					</div>
				))}
				<Button type="submit" size="lg">
					Submit Survey
				</Button>
			</form>
		</section>
	);
}
