import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SubscriptionFormSection({ onSubmit }: { onSubmit: (data: any) => void }) {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    setLoading(false);
    onSubmit(form);
  }

  return (
    <section className="py-12 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4 font-montserrat">Subscribe Now</h2>
      <form className="flex flex-col gap-4 w-full max-w-md" onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Your Name"
          className="font-open-sans"
          value={form.name}
          onChange={handleChange}
          required
        />
        <Input
          type="tel"
          name="phone"
          id="phone"
          placeholder="Your Phone Number"
          className="font-open-sans"
          value={form.phone}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
          className="font-open-sans"
          value={form.email}
          onChange={handleChange}
          required
        />
        <Button type="submit" size="lg" disabled={loading}>
          {loading ? "Submitting..." : "Subscribe"}
        </Button>
      </form>
    </section>
  );
}
