"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Building2, Users2, ShieldCheck, HeartHandshake, Phone, Mail, MapPin } from "lucide-react";


const FORM_ENDPOINT = "/api/form";

async function handleSubmit(e: React.FormEvent<HTMLFormElement>, formName: string) {
  e.preventDefault();
  const form = e.currentTarget;
  const data = new FormData(form);
  data.append("formName", formName);
  if (!data.get("to")) data.append("to", "talent@mytranscendence.org");

  try {
    const res = await fetch(FORM_ENDPOINT, { method: "POST", body: data });
    if (!res.ok) throw new Error("Network response was not ok");
    alert("Thanks! Your submission was received.");
    form.reset();
  } catch (err) {
    console.error(err);
    alert("Sorry, something went wrong submitting the form.");
  }
}

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll(); // set initial state
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-white/80 backdrop-blur transition-all ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6">
        <a href="#home" className="flex items-center gap-3">
          <div className="relative">
            <img
              src="/transcendence-logo-dark.png"
              alt="Transcendence Logo"
              className={`w-auto transition-all ${
                scrolled ? "h-10 md:h-12" : "h-12 md:h-14"
              } dark:hidden`}
            />
            <img
              src="/transcendence-logo-light.png"
              alt="Transcendence Logo"
              className={`hidden w-auto transition-all ${
                scrolled ? "h-10 md:h-12" : "h-12 md:h-14"
              } dark:block`}
            />
          </div>

          <div className="leading-tight">
            <p
              className={`font-semibold tracking-tight transition-all ${
                scrolled ? "text-lg md:text-xl" : "text-xl md:text-2xl"
              }`}
            >
              Transcendence
            </p>
            <p
              className={`text-gray-600 transition-all ${
                scrolled ? "text-xs md:text-sm" : "text-sm md:text-base"
              }`}
            >
              Personal Growth & Development Services
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          <a className="text-sm text-gray-700 hover:text-teal-700" href="#services">Services</a>
          <a className="text-sm text-gray-700 hover:text-teal-700" href="#providers">For Providers</a>
          <a className="text-sm text-gray-700 hover:text-teal-700" href="#dcs">For DCS</a>
          <a className="text-sm text-gray-700 hover:text-teal-700" href="#about">About</a>
          <a className="text-sm text-gray-700 hover:text-teal-700" href="#contact">Contact</a>
          <a className="text-sm text-gray-700 hover:text-teal-700" href="#packages">Packages</a>
          <a
            href="#apply"
            className="inline-flex items-center justify-center rounded-2xl border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
          >
            Apply
          </a>
        </nav>
      </div>
    </header>
  );
};


const Hero = () => (
  <section id="home" aria-label="Hero" className="bg-gray-50">
    <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
          Supporting Providers. Strengthening Families. Serving Communities.
        </h1>
        <p className="mt-4 text-gray-600 md:text-lg">
          We partner with Indiana providers to deliver trauma‑informed, outcomes‑focused services for children, youth, and families—aligned with DCS standards and DMHA programs.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
  href="#apply"
  className="inline-flex items-center gap-2 rounded-2xl border border-transparent bg-teal-600 px-5 py-3 text-sm font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
>
  Join as a Provider <ArrowRight className="h-4 w-4" />
</a>
          <Button variant="outline" className="rounded-2xl">
            <a href="#dcs" className="flex items-center gap-2">Refer or Partner <ArrowRight className="h-4 w-4" /></a>
          </Button>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-teal-600"/> Compliance‑driven</div>
          <div className="flex items-center gap-2"><HeartHandshake className="h-4 w-4 text-teal-600"/> Trauma‑informed</div>
          <div className="flex items-center gap-2"><Users2 className="h-4 w-4 text-teal-600"/> Provider‑centered</div>
        </div>
      </div>
      <div>
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-teal-700">What we offer</p>
          <ul className="mt-3 space-y-3 text-sm text-gray-700">
            <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-4 w-4 text-teal-600"/> CMHW Youth Services (DMHA HCBS programs)</li>
            <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-4 w-4 text-teal-600"/> Home‑based case management & supervised visitation</li>
            <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-4 w-4 text-teal-600"/> Provider enablement: CatalystOS, compliance, trainings</li>
            <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-4 w-4 text-teal-600"/> Founders pricing on Provider Packages</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="services" aria-label="Services" className="border-t bg-white">
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Services</h2>
      <p className="mt-2 max-w-3xl text-gray-600">We deliver evidence‑aligned, family‑centered supports in partnership with DCS and DMHA. Our network of trained providers serves children and youth with consistency, compassion, and measurable outcomes.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-4">
        {[{
          icon: <Users2 className="h-5 w-5"/>,
          title: "Home‑Based Case Management",
          blurb: "Strengths‑based guidance, goal setting, and community linkage for families."},
        { icon: <ShieldCheck className="h-5 w-5"/>, title: "Supervised Visitation", blurb: "Safe, structured parent‑child contact with progress reporting."},
        { icon: <Building2 className="h-5 w-5"/>, title: "CMHW Youth Services", blurb: "DMHA HCBS: skills training, family support, respite coordination."},
        { icon: <HeartHandshake className="h-5 w-5"/>, title: "Therapy Services", blurb: "Outpatient therapy with trauma‑informed, evidence‑aligned approaches."},
        { icon: <Users2 className="h-5 w-5"/>, title: "Paraprofessional Services", blurb: "Trained paraprofessionals supporting skill‑building and daily progress."}
        ].map((s:any,i:number)=> (
          <Card key={i} className="rounded-2xl">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 text-teal-700">{s.icon}<span className="font-medium">{s.title}</span></div>
              <p className="mt-3 text-sm text-gray-600">{s.blurb}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const ForProviders = () => (
  <section id="providers" aria-label="For Providers" className="border-t bg-gray-50">
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <div className="grid items-start gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Grow with Transcendence</h2>
          <p className="mt-2 text-gray-600">We’re provider‑centered by design. Access CatalystOS, live supervision, compliance support, and tiered Provider Packages to match your goals.</p>
          <ul className="mt-4 space-y-3 text-sm text-gray-700">
            <li className="flex gap-2"><CheckCircle className="mt-0.5 h-4 w-4 text-teal-600"/> CatalystOS: documentation, referrals, billing, analytics</li>
            <li className="flex gap-2"><CheckCircle className="mt-0.5 h-4 w-4 text-teal-600"/> Onboarding & compliance trainings built around DCS standards</li>
            <li className="flex gap-2"><CheckCircle className="mt-0.5 h-4 w-4 text-teal-600"/> Founders Pricing on Basic • Enhanced • Comprehensive packages</li>
            <li className="flex gap-2"><CheckCircle className="mt-0.5 h-4 w-4 text-teal-600"/> Quarterly recognition & professional growth pathways</li>
          </ul>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
  href="#apply"
  className="inline-flex items-center justify-center rounded-2xl border border-transparent bg-teal-600 px-5 py-3 text-sm font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
>
  Apply to Provide
</a>

            <Button variant="outline" className="rounded-2xl"><a href="#packages">View Packages</a></Button>
          </div>
        </div>
        <div>
          <Card id="apply" className="rounded-2xl scroll-mt-28">
            <CardContent className="p-6">
              <p className="text-sm font-medium text-teal-700">Fast Application</p>
              <p className="mt-2 text-sm text-gray-600">Share your background and service interests. We’ll follow up with next steps within 2 business days.</p>
              <form
  onSubmit={handleSubmit}
  encType="multipart/form-data"
  className="grid grid-cols-1 gap-4"
>
  <div className="grid gap-2">
    <label htmlFor="fullName" className="text-sm font-medium">Full name</label>
    <input
      id="fullName"
      name="fullName"
      required
      className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
    />
  </div>

  <div className="grid gap-2">
    <label htmlFor="email" className="text-sm font-medium">Email</label>
    <input
      id="email"
      name="email"
      type="email"
      required
      className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
    />
  </div>

  <div className="grid gap-2">
    <label htmlFor="phone" className="text-sm font-medium">Phone</label>
    <input
      id="phone"
      name="phone"
      className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
    />
  </div>

  <div className="grid gap-2">
    <label htmlFor="serviceInterest" className="text-sm font-medium">Service interest</label>
    <select
      id="serviceInterest"
      name="serviceInterest"
      required
      className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
    >
      <option value="">Select a service</option>
      <option value="Paraprofessional">Paraprofessional</option>
      <option value="Home Based Case Management">Home Based Case Management</option>
      <option value="Father Engagement">Father Engagement</option>
      <option value="Supervised Visitation">Supervised Visitation</option>
      <option value="CMHW">CMHW</option>
      <option value="Therapy">Therapy</option>
    </select>
  </div>

  <div className="grid gap-2">
    <label htmlFor="resume" className="text-sm font-medium">Resume (PDF/DOC/DOCX)</label>
    <input
      id="resume"
      name="resume"
      type="file"
      accept=".pdf,.doc,.docx"
      className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
    />
  </div>

  <button type="submit" className="w-full rounded-md bg-emerald-700 px-4 py-2 text-white hover:bg-emerald-800">
    Submit
  </button>
</form>


              <p className="mt-3 text-xs text-gray-500">By submitting, you agree to be contacted about provider opportunities.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </section>
);

const ForDCS = () => (
  <section id="dcs" aria-label="For DCS & Referral Partners" className="border-t bg-white">
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <div className="grid items-start gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">For DCS & Referral Partners</h2>
          <p className="mt-2 text-gray-600">We align to Indiana DCS service standards with timely documentation, clear reporting, and responsive communication. Our provider network is trained on trauma‑informed, family‑centered practice.</p>
          <ul className="mt-4 space-y-3 text-sm text-gray-700">
            <li className="flex gap-2"><CheckCircle className="mt-0.5 h-4 w-4 text-teal-600"/> Consistent reporting cadence via CatalystOS</li>
            <li className="flex gap-2"><CheckCircle className="mt-0.5 h-4 w-4 text-teal-600"/> Court‑ready documentation and measurable goals</li>
            <li className="flex gap-2"><CheckCircle className="mt-0.5 h-4 w-4 text-teal-600"/> Flexible scheduling across regions</li>
            <li className="flex gap-2"><CheckCircle className="mt-0.5 h-4 w-4 text-teal-600"/> Dedicated point of contact for escalations</li>
          </ul>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button className="rounded-2xl bg-teal-600 text-white hover:bg-teal-700"><a href="#contact">Contact Us</a></Button>
            <Button variant="outline" className="rounded-2xl"><a href="#packages">Download Agency One‑Pager</a></Button>
          </div>
        </div>
        <div>
          <div id="apply" className="h-0"></div>

          <Card className="rounded-2xl">
            <CardContent className="p-6">
              <p className="text-sm font-medium text-teal-700">Request Services / Make a Referral</p>
              <form className="mt-4 grid gap-4" onSubmit={(e)=>handleSubmit(e as any, "dcs-referral")} encType="multipart/form-data">
                <input name="name" aria-label="Your name" className="w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-teal-600" placeholder="Your name" required />
                <input name="email" aria-label="Email" type="email" className="w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-teal-600" placeholder="Email" required />
                <input name="phone" aria-label="Phone" className="w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-teal-600" placeholder="Phone" />
                <textarea name="notes" aria-label="Notes" className="min-h-[90px] w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-teal-600" placeholder="Brief service need or question"></textarea>
                <input type="hidden" name="to" value="talent@mytranscendence.org" />
                <input name="company" className="hidden" tabIndex={-1} autoComplete="off" />
                <Button type="submit" className="rounded-2xl bg-teal-600 text-white hover:bg-teal-700">Send</Button>
              </form>
              <p className="mt-3 text-xs text-gray-500">We respond within 1–2 business days.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </section>
);

const Packages = () => (
  <section id="packages" aria-label="Provider Packages" className="border-t bg-gray-50">
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <div className="grid items-start gap-10 md:grid-cols-2">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Introducing Provider Packages</h2>
            <span className="rounded-full bg-teal-600/10 px-3 py-1 text-xs font-medium text-teal-700">Founders Pricing</span>
          </div>
          <p className="mt-2 text-gray-600">A tiered <span className="font-medium">provider enablement</span> system designed to help you do your best work. These are <span className="font-medium">supports for providers</span> (tools, supervision, training, tech)—not client service bundles. Choose the level of support that fits your goals and let us handle the admin, compliance, and tech so you can focus on outcomes for families.</p>
          <ul className="mt-4 space-y-3 text-sm text-gray-700">
            <li className="flex gap-2"><CheckCircle className="mt-0.5 h-4 w-4 text-teal-600"/> CatalystOS access for documentation, referrals, and billing</li>
            <li className="flex gap-2"><CheckCircle className="mt-0.5 h-4 w-4 text-teal-600"/> Onboarding & compliance trainings aligned to DCS standards</li>
            <li className="flex gap-2"><CheckCircle className="mt-0.5 h-4 w-4 text-teal-600"/> Supervision, recognition, and provider success supports</li>
          </ul>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
  href="#apply"
  className="inline-flex items-center justify-center rounded-2xl border border-transparent bg-teal-600 px-5 py-3 text-sm font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
>
  Apply to Provide
</a>

            <Button variant="outline" className="rounded-2xl"><a href="#contact">Ask a Question</a></Button>
          </div>
          <p className="mt-3 text-xs text-gray-500">*Founders Pricing is a limited‑time discount for providers onboarding during the CatalystOS implementation period. Eligibility and duration may vary by service area.</p>
          <div className="mt-4">
            <a href="#packages-compare" className="text-sm font-medium text-teal-700 underline underline-offset-4">See full comparison table →</a>
          </div>
        </div>
        <div className="grid gap-4">
          {[{tier:"Basic", desc:"Core tools and compliance essentials for getting started."},
            {tier:"Enhanced", desc:"Everything in Basic plus added supervision, training, and support."},
            {tier:"Comprehensive", desc:"Premium enablement, priority supports, and expanded resources."}].map((p:any,i:number)=> (
            <Card key={i} className="relative overflow-hidden rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold text-teal-700">{p.tier}</p>
                  <span className="rounded-full bg-teal-600/10 px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-teal-700">Founders Pricing</span>
                </div>
                <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
                <div className="mt-3 grid gap-2 text-sm text-gray-700">
                  <div className="flex gap-2"><CheckCircle className="mt-0.5 h-4 w-4 text-teal-600"/> CatalystOS dashboard</div>
                  <div className="flex gap-2"><CheckCircle className="mt-0.5 h-4 w-4 text-teal-600"/> Onboarding & compliance checklist</div>
                  <div className="flex gap-2"><CheckCircle className="mt-0.5 h-4 w-4 text-teal-600"/> Provider email (@mytranscendence.org)</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const PackagesCompare = () => (
  <section id="packages-compare" aria-label="Provider Packages Comparison" className="border-t bg-white">
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <h3 className="text-xl font-semibold tracking-tight md:text-2xl">Provider Packages — Comparison Table</h3>
      <div className="mt-2 text-sm text-gray-600">Focus areas providers care about most: <span className="font-medium">referrals</span>, <span className="font-medium">billing</span>, <span className="font-medium">compliance</span>, <span className="font-medium">admin support</span>, and <span className="font-medium">marketing presence</span>.</div>
      <div className="mt-4 overflow-x-auto rounded-2xl border">
        <table className="w-full min-w-[820px] text-left text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3">Feature</th>
              <th className="px-4 py-3">Basic</th>
              <th className="px-4 py-3">Enhanced</th>
              <th className="px-4 py-3">Comprehensive</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {[
              {f:"Referral access", b:"Standard referrals in service area", e:"Expanded referrals across additional regions", c:"Priority routing & first‑look referrals"},
              {f:"Referral geography", b:"Primary region", e:"Primary + adjacent regions", c:"Multi‑region with priority"},
              {f:"Billing support", b:"Guides & templates", e:"Claim review & troubleshooting", c:"Concierge support incl. submission assist"},
              {f:"Compliance support", b:"Checklist & training links", e:"Automated reminders & file nudges", c:"1:1 compliance coaching & quarterly mini‑audit"},
              {f:"Admin support", b:"Email & core forms", e:"Scheduling templates & document review", c:"Dedicated admin hours for setup & updates"},
              {f:"Marketing kit", b:"Starter kit (logo usage, templates)", e:"Branded materials pack (flyer, letterhead, social)", c:"Premium kit + customizations"},
              {f:"Provider ID badge", b:"Standard badge (B/W)", e:"Color badge + digital ID", c:"Premium badge + replacement coverage"},
              {f:"Provider fairs & events", b:"Event invitations", e:"Fair attendance support (shared table)", c:"Featured placement + booth inclusion where available"},
              {f:"Spotlight/recognition", b:"Directory listing", e:"Monthly shout‑outs eligible", c:"Spotlight features & priority nominations"},
              {f:"Analytics & coaching", b:"Basic metrics in CatalystOS", e:"Quarterly performance snapshot", c:"Monthly coaching consult + advanced analytics"}
            ].map((row:any,i:number)=> (
              <tr key={i}>
                <td className="px-4 py-3 font-medium text-gray-700">{row.f}</td>
                <td className="px-4 py-3">{row.b}</td>
                <td className="px-4 py-3">{row.e}</td>
                <td className="px-4 py-3">{row.c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-gray-500">Availability of certain features (e.g., priority referrals, booth inclusion) may vary by region, demand, and eligibility. Details subject to change.</p>
    </div>
  </section>
);

const About = () => (
  <section id="about" aria-label="About Transcendence" className="border-t bg-gray-50">
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">About Transcendence</h2>
      <div className="mt-4 grid gap-8 md:grid-cols-2">
        <p className="text-gray-600">Transcendence Personal Growth & Development Services is an Indiana provider organization built around one promise: when we support providers well, families thrive. We invest in enablement tools (CatalystOS), rigorous compliance, and a culture of recognition so providers can deliver excellent care without the administrative burden.</p>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-2"><CheckCircle className="mt-0.5 h-4 w-4 text-teal-600"/> Trauma‑informed, family‑centered practice</li>
          <li className="flex gap-2"><CheckCircle className="mt-0.5 h-4 w-4 text-teal-600"/> Alignment with DCS service standards & DMHA HCBS programs</li>
          <li className="flex gap-2"><CheckCircle className="mt-0.5 h-4 w-4 text-teal-600"/> Data‑informed decisions and outcomes tracking</li>
        </ul>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" aria-label="Contact" className="border-t bg-white">
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Contact</h2>
      <div className="mt-6 grid gap-8 md:grid-cols-3">
        <div className="space-y-3 text-gray-700">
          <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-teal-600"/><span>Phone: 317-660-1616</span></div>
          <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-teal-600"/><span>Email: talent@mytranscendence.org</span></div>
          <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-teal-600"/><span>Indiana (statewide service areas)</span></div>
        </div>
        <div className="md:col-span-2">
          <Card className="rounded-2xl">
            <CardContent className="p-6">
              <form className="grid gap-4" onSubmit={(e)=>handleSubmit(e as any, "contact")} encType="multipart/form-data">
                <div className="grid gap-4 md:grid-cols-2">
                  <input name="name" aria-label="Name" className="w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-teal-600" placeholder="Name" />
                  <input name="email" aria-label="Email" type="email" className="w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-teal-600" placeholder="Email" />
                </div>
                <input name="subject" aria-label="Subject" className="w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-teal-600" placeholder="Subject" />
                <textarea name="notes" aria-label="Message" className="min-h-[120px] w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-teal-600" placeholder="Message"></textarea>
                <input name="company" className="hidden" tabIndex={-1} autoComplete="off" />
                <Button type="submit" className="rounded-2xl bg-teal-600 text-white hover:bg-teal-700">Send Message</Button>
              </form>
              <p className="mt-3 text-xs text-gray-500">We typically reply within 1–2 business days.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t bg-gray-50">
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <p className="font-medium">Transcendence</p>
          <p className="text-sm text-gray-600">Supporting Providers. Strengthening Families. Serving Communities.</p>
        </div>
        <div className="text-xs text-gray-500">© {new Date().getFullYear()} Transcendence Personal Growth & Development Services, LLC. All rights reserved.</div>
      </div>
    </div>
  </footer>
);

export default function Page() {
  return (
    <main className="bg-white text-gray-900">
      <Nav />
      <Hero />
      <Services />
      <ForProviders />
      <ForDCS />
      <Packages />
      <PackagesCompare />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
