"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Mint Your Social Media",
    description: "Connect your social accounts and mint them as verified NFTs on the blockchain.",
    imageSrc: "https://images.pexels.com/photos/8090137/pexels-photo-8090137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    number: "02",
    title: "Define Your Categories",
    description: "Specify your areas of expertise and the topics you create content about.",
    imageSrc: "https://images.pexels.com/photos/7149165/pexels-photo-7149165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    number: "03",
    title: "Collaborate & Grow",
    description: "Find projects to collaborate with and mint proof of collaboration NFTs.",
    imageSrc: "https://images.pexels.com/photos/8358144/pexels-photo-8358144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    number: "04",
    title: "Build Your Reputation",
    description: "Increase your social credit score and climb the creator leaderboard.",
    imageSrc: "https://images.pexels.com/photos/7567444/pexels-photo-7567444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-purple-950/10 justify-center items-center flex flex-col">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            How CreatorHub <span className="text-purple-400">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Follow these simple steps to establish your presence and grow your creator reputation.
          </p>
        </div>

        <div className="space-y-16 mt-12">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`grid gap-8 items-center ${index % 2 === 0 ? 'lg:grid-cols-[1fr_1.5fr]' : 'lg:grid-cols-[1.5fr_1fr] lg:flex-row-reverse'}`}
            >
              <div className={`space-y-6 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <div className="inline-flex items-center text-sm font-medium text-purple-400">
                  <span className="mr-2 text-xl font-bold">{step.number}</span>
                  <div className="h-px w-12 bg-purple-500/60"></div>
                </div>
                <h3 className="text-2xl font-bold sm:text-3xl">{step.title}</h3>
                <p className="text-muted-foreground text-lg">{step.description}</p>
                
                {index === 0 && (
                  <Button asChild className="mt-4">
                    <Link href="/mint">Start Minting</Link>
                  </Button>
                )}
              </div>

              <div className={`relative rounded-xl overflow-hidden ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <div className="aspect-video relative overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/80 via-transparent to-background/40 z-10"></div>
                  <Image 
                    src={step.imageSrc}
                    alt={step.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}