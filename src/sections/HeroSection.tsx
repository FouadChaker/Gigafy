import { Button } from "@/components/ui/button";

export default function HeroSection({ onSubscribe }: { onSubscribe: () => void }) {
  return (
    <section className="py-16 text-center flex flex-col items-center gap-6">
      <h1 className="text-4xl font-bold font-montserrat">Unlimited Internet, One Price</h1>
      <p className="text-lg font-open-sans max-w-xl mx-auto">
        Gigafy offers you a selectable number of gigabytes of internet connection with no time limit. Join our campaign and be the first to experience true internet roaming freedom!
      </p>
      <Button size="lg" className="mt-4" onClick={onSubscribe}>
        Get Started
      </Button>
    </section>
  );
}
