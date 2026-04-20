import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  phone: z.string().trim().min(7, "Phone required").max(30),
  email: z.string().trim().email("Invalid email").max(255).or(z.literal("")),
  message: z.string().trim().min(1, "Message required").max(1000),
});

export function ContactForm() {
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Request received! We'll call you shortly.");
      form.reset();
    }, 600);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1 block text-sm font-semibold">Name</span>
          <input
            name="name"
            required
            maxLength={100}
            className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-semibold">Phone</span>
          <input
            name="phone"
            required
            maxLength={30}
            type="tel"
            className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </label>
      </div>
      <label className="block">
        <span className="mb-1 block text-sm font-semibold">Email (optional)</span>
        <input
          name="email"
          maxLength={255}
          type="email"
          className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </label>
      <label className="block">
        <span className="mb-1 block text-sm font-semibold">How can we help?</span>
        <textarea
          name="message"
          required
          rows={4}
          maxLength={1000}
          className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </label>
      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-dark disabled:opacity-60"
      >
        {loading ? "Sending..." : "Request Free Estimate"}
      </button>
    </form>
  );
}
