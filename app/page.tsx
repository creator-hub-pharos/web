import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/home/hero-section";
import { FeaturesSection } from "@/components/home/features-section";
import { HowItWorks } from "@/components/home/how-it-works";
import { TrendingCreators } from "@/components/home/trending-creators";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <TrendingCreators />
      
      <section className="py-16 bg-gradient-to-br from-purple-900/20 to-background justify-center items-center flex flex-col gap-8">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Ready to join the creator economy?
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            Mint your social media presence as an NFT and unlock new opportunities
            for collaboration and growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button asChild size="lg" className="h-12 px-8">
              <Link href="/mint">Mint Your Presence</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-8">
              <Link href="/creators">Explore Creators</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}