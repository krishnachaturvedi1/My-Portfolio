import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Linkedin, Github, Send, MapPin, Code2, Globe } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "chaturvedikrishna7652@gmail.com",
    href: "mailto:chaturvedikrishna7652@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 76520 28953",
    href: "tel:+917652028953",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Gorakhpur, U.P., India",
    href: "https://maps.google.com/?q=Gorakhpur,+Uttar+Pradesh",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "krishnachaturvedi1",
    href: "https://www.linkedin.com/in/krishnachaturvedi1/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "krishnachaturvedi1",
    href: "https://github.com/krishnachaturvedi1",
  },
  {
    icon: Code2,
    label: "Coding Profiles",
    value: "LeetCode & CodeChef",
    href: "https://github.com/krishnachaturvedi1",
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        "service_3lw8fsq",
        "template_62lt67r",
        form,
        "gOlqmRimQj4FsIqLm"
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I will get back to you promptly!",
      });
      form.reset();
    } catch (error) {
      console.error(error);
      toast({
        title: "Could not send message automatically",
        description: "Please write directly to chaturvedikrishna7652@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
              Direct Communication
            </span>
            <h2 className="section-heading">Get In Touch</h2>
            <p className="section-subheading mx-auto">
              Interested in collaborating, discussing technical projects, or hiring for development & AI roles? Let's connect!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="glass-card rounded-2xl p-6 sm:p-8 border border-border/80 space-y-4">
                <h3 className="text-xl font-bold text-foreground">
                  Let's build something impactful
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I'm actively looking for software development, full-stack, machine learning, and data engineering opportunities. I'm always open to discussing new ideas, tech stacks, or engineering challenges.
                </p>

                {/* Contact Links */}
                <div className="space-y-3 pt-2">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      target={info.label !== "Email" && info.label !== "Phone" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -15 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: 0.25 + index * 0.05 }}
                      className="flex items-center gap-3.5 p-3.5 rounded-xl bg-background/60 hover:bg-primary/10 border border-border/60 hover:border-primary/40 transition-all group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-105 transition-transform shrink-0">
                        <info.icon className="w-5 h-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{info.label}</p>
                        <p className="text-sm font-medium text-foreground truncate">{info.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-7"
            >
              <form
                onSubmit={handleSubmit}
                className="glass-card rounded-2xl p-6 sm:p-8 space-y-5 border border-border/80"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-foreground">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="e.g. Alex Johnson"
                      required
                      className="bg-background/70 border-border h-11"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-foreground">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="alex@example.com"
                      required
                      className="bg-background/70 border-border h-11"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-wider text-foreground">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Project Inquiry / Job Opportunity / Collaboration"
                    required
                    className="bg-background/70 border-border h-11"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-foreground">
                    Your Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Share your goals, ideas, or questions here..."
                    rows={5}
                    required
                    className="bg-background/70 border-border resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full btn-primary h-12 text-base font-semibold shadow-md"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Sending Message...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

