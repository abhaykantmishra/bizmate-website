import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { User, Mail, Building2, Briefcase, ShieldCheck, Users, GraduationCap, Calendar, UserCheck, UserCheck2, BriefcaseBusiness, ClipboardCheck, MoreHorizontal } from "lucide-react";
import { useState } from "react";

export function CTABookDemo({className1, className2}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    role: "",
    interests: [],
  });

  const interestOptions = [
    { label: "Talent Acquisition", icon: <Users className="w-5 h-5 mr-2 text-blue-600" /> },
    { label: "Leadership Training", icon: <GraduationCap className="w-5 h-5 mr-2 text-blue-600" /> },
    { label: "Executive Coaching", icon: <UserCheck2 className="w-5 h-5 mr-2 text-blue-600" /> },
    { label: "Strategic HR Consulting & OD Intervention", icon: <BriefcaseBusiness className="w-5 h-5 mr-2 text-blue-600" /> },
    { label: "HR Process & Compliance", icon: <ClipboardCheck className="w-5 h-5 mr-2 text-blue-600" /> },
    { label: "Other", icon: <MoreHorizontal className="w-5 h-5 mr-2 text-blue-600" /> },
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleInterestChange = (label) => {
    setForm((prev) => ({
      ...prev,
      interests: prev.interests.includes(label)
        ? prev.interests.filter((i) => i !== label)
        : [...prev.interests, label],
    }));
  };

  // Placeholder for scheduling logic
  const handleSubmit = (e) => {
    e.preventDefault();
    // Integrate with your backend or calendar API here
    alert("Thank you! We'll reach out to schedule your demo call.");
  };

  return (
    <section id="demo" className={cn("md:mt-20 md:mb-60 my-10 md:mx-10", className1="")}>
      <div className="max-w-[1700px] mx-auto flex flex-col justify-center">
        <div className={cn("flex md:flex-row flex-col dark:bg-white bg-black shadow-2xl shadow-blue-700 p-3 rounded-none md:rounded-xl z-20 md:px-10 mx-2 md:mx-0 text-white",
            className2
        )}>
          {/* Left: Headline & Bio */}
          <div className="md:w-1/2 w-full space-y-12 z-20 md:mx-0 my-10 md:my-5 flex flex-col justify-center">
            <div className="mb-0 md:mb-5">
              <h2 className=" text-3xl md:text-4xl font-bold mb-10 text-blue-500">
                Let&apos;s Accelerate Your HR Success 
              </h2>

              <p className="text-sm md:text-base dark:text-neutral-300 mb-4 text-white">
                <span className="font-semibold text-base md:text-lg">Book a Free 30-min Strategy Call</span> <br /> with our Founder - Prashant Prem
              </p>

              <div className="flex items-start gap-3  dark:bg-blue-950 rounded-none p-4 border-1 mt-10">
                <User className="w-10 h-10 text-blue-500" />
                <div>
                  <span className="font-semibold text-blue-500">CF-PCC Coach | Certified Corporate Trainer | Certified POSH Trainer | Certified OD  Practioner | 35+ Years of HR Leadership</span>
                  <p className="text-sm text-white dark:text-neutral-600 mt-1">
                    Prashant has led HR for top Indian and global firms, mentoring leaders, revamping culture, and building future-ready teams.
                  </p>
                </div>
              </div>

            </div>

            <div className="hidden md:flex flex-col gap-4 mt-6">
              <h1 className="text-blue-500 text-base md:text-lg font-bold ">What would you'd like to explore: </h1>
              {
                interestOptions?.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      {item.icon}
                      <span className="font-semibold text-blue-500">{item.label}</span>
                    </div>
                ))
              }
            </div>
          </div>

          {/* Divider for mobile */}
          <div className="md:hidden block w-full h-[1px] bg-blue-200 my-5"></div>

          {/* Right: Form */}
          <div className="md:w-1/2 w-full space-y-8 z-20 md:mx-10 my-10 md:my-5">
            <form className="space-y-6 text-inherit" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label className="md:text-lg" htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="md:text-lg rounded-none bg-white/5 border-blue-200 dark:text-black text-white placeholder:text-neutral-400"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label className="md:text-lg" htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="md:text-lg rounded-none bg-white/5 border-blue-200 dark:text-black text-white placeholder:text-neutral-400"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label className="md:text-lg" htmlFor="organization">Organization</Label>
                <Input
                  id="organization"
                  name="organization"
                  value={form.organization}
                  onChange={handleChange}
                  placeholder="Your organization"
                  className="md:text-lg rounded-none bg-white/5 border-blue-200 dark:text-black text-white placeholder:text-neutral-400"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label className="md:text-lg" htmlFor="role">Role</Label>
                <Input
                  id="role"
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  placeholder="Your role"
                  className="md:text-lg rounded-none bg-white/5 border-blue-200 dark:text-black text-white placeholder:text-neutral-400"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label className="md:text-lg">Interest Areas</Label>
                <div className="flex flex-col gap-2">
                  {interestOptions.map((opt) => (
                    <label key={opt.label} className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={form.interests.includes(opt.label)}
                        onChange={() => handleInterestChange(opt.label)}
                        className="accent-blue-600 w-5 h-5 mr-2"
                      />
                      {opt.icon}
                      <span className="font-semibold text-white">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>
              <Button
                type="submit"
                className="w-full rounded-none bg-blue-700 text-white hover:bg-white hover:text-primary transition-colors border border-blue-700 flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Schedule Now
              </Button>
              <p className="text-sm text-semibold text-neutral-100 mt-2 text-center">
                You&apos;ll receive a calendar invite after submitting your details.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}