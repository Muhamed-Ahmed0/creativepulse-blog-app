"use client";
import dynamic from "next/dynamic";

// Dynamically import components that rely on localStorage
const HeroSection = dynamic(() => import("./_components/HeroSection"), {
  ssr: false,
});
const WhyUs = dynamic(() => import("./_components/WhyUs"), { ssr: false });
const Benefits = dynamic(() => import("./_components/Benefits"), {
  ssr: false,
});
const UsersOpinions = dynamic(() => import("./_components/UsersOpinions"), {
  ssr: false,
});
const OtherThings = dynamic(() => import("./_components/OtherThings"), {
  ssr: false,
});
const Globe = dynamic(() => import("./_components/Globe"), { ssr: false });
const Complaints = dynamic(() => import("./_components/Complaints"), {
  ssr: false,
});
const Footer = dynamic(() => import("./_components/Footer"), { ssr: false });
const Header = dynamic(() => import("./_components/Header"), { ssr: false });

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <WhyUs />
      <Benefits />
      <UsersOpinions />
      <OtherThings />
      <Globe />
      <Complaints />
      <Footer />
    </>
  );
}
