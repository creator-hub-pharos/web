"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Flame, 
  TrendingUp, 
  Users, 
  Award, 
  Zap
} from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-background to-purple-950/20 justify-center items-center flex flex-col">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_40%_60%,rgba(120,40,200,0.1),transparent_50%)]"></div>
      <div className="container relative z-10 px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center rounded-full bg-purple-900/20 px-3 py-1 text-sm font-medium text-purple-400 ring-1 ring-inset ring-purple-700/20">
              <Flame className="mr-1 h-3 w-3" />
              <span>Redefining the Creator Economy</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Social Credit Scoring
              <span className="block text-purple-400">for Creators</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-[600px]">
              Mint your social media presence as NFTs, collaborate with projects,
              and climb the creator leaderboard in the decentralized ecosystem.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="h-12 px-8">
                <Link href="/mint">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-8">
                <Link href="/creators">Explore Creators</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-auto"
          >
            <div className="relative h-[400px] w-full">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full bg-purple-500/10 p-1">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-20 blur-2xl"></div>
                  
                  <div className="relative h-full w-full rounded-full border border-purple-500/20 bg-background/80 backdrop-blur flex items-center justify-center">
                    <Flame className="h-24 w-24 text-purple-500" />
                  </div>
                  
                  {/* Orbiting elements */}
                  {[TrendingUp, Users, Award, Zap].map((Icon, i) => (
                    <motion.div
                      key={i}
                      className="absolute rounded-full bg-background/90 border border-purple-500/20 p-2 shadow-lg"
                      style={{
                        height: "50px",
                        width: "50px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      animate={{
                        x: Math.cos(i * (Math.PI / 2) + Date.now() / 2000) * 120,
                        y: Math.sin(i * (Math.PI / 2) + Date.now() / 2000) * 120,
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 10,
                        ease: "linear",
                        delay: i * 0.5,
                      }}
                    >
                      <Icon className="h-6 w-6 text-purple-400" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}