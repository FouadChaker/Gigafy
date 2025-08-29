import { Globe, Wifi, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Custom Gigabytes",
    description: "Pick exactly the amount of data you need. Flexible plans for every user."
  },
  {
    icon: Wifi,
    title: "No Expiry",
    description: "Your gigabytes never expire. Use them at your own pace."
  },
  {
    icon: ShieldCheck,
    title: "Best Prices",
    description: "Get the most competitive rates for global internet roaming."
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-12 bg-muted/40">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <div key={idx} className="flex flex-col items-center gap-4 p-6 rounded-lg shadow bg-white">
            <div className="text-primary mb-2">
              <feature.icon size={40} />
            </div>
            <h3 className="font-bold text-xl font-montserrat">{feature.title}</h3>
            <p className="text-open-sans text-base text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
