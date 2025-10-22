import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const CTABanner = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    visit: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.message.trim()) {
      alert("Please share your prayer request before submitting 🙏");
      return;
    }

    console.log("Prayer Request Submitted:", form);
    alert("🙏 Your prayer request has been received. Thank you!");
    setOpen(false);
    setForm({ name: "", phone: "", email: "", message: "", visit: false });
  };

  return (
    <section className="container py-12 md:py-16 fade-in-up">
      <div className="rounded-xl border bg-gradient-brand p-8 md:p-12 text-primary-foreground shadow-elegant transition-transform duration-700 hover:scale-[1.02] hover:shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2 fade-in-up">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Join the Mission
            </h2>
            <p className="opacity-90">
              Serve, give, and pray with us as we share Christ in Nairobi.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 fade-in-up">
            <a
              href="https://www.youtube.com/@cornerstonesdanairobi"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                variant="outline"
                className="bg-background/10 hover:scale-105 transition-transform duration-300"
              >
                Join Us
              </Button>
            </a>

            <a
              href="https://advent.blissteq.com/self_service?i=1095"
              target="_blank"
              rel="noreferrer"
              aria-label="Give now"
            >
              <Button
                variant="hero"
                className="pulse-glow hover:scale-105 transition-transform duration-300"
              >
                Give Now
              </Button>
            </a>

            <Button
              variant="cta"
              className="hover:scale-105 transition-transform duration-300"
              onClick={() => setOpen(true)}
            >
              Request Prayer
            </Button>
          </div>
        </div>
      </div>

      {/* Prayer Request Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>🙏 Share a Prayer Request</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <Input
              name="name"
              placeholder="Your Name (optional)"
              value={form.name}
              onChange={handleChange}
            />
            <Input
              name="phone"
              placeholder="Phone Number (optional)"
              value={form.phone}
              onChange={handleChange}
            />
            <Input
              name="email"
              type="email"
              placeholder="Email (optional)"
              value={form.email}
              onChange={handleChange}
            />
            <Textarea
              name="message"
              placeholder="Your Prayer Request (required)"
              value={form.message}
              onChange={handleChange}
              required
            />

            <div className="flex items-center space-x-2">
              <Checkbox
                id="visit"
                checked={form.visit}
                onCheckedChange={(checked) => setForm({ ...form, visit: !!checked })}
              />
              <Label htmlFor="visit" className="text-sm">
                I would like a visit from the eldership team
              </Label>
            </div>

            <DialogFooter>
              <Button type="submit" className="w-full">
                Submit Request
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CTABanner;
