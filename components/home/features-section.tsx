"use client";

import { motion } from "framer-motion";
import { 
  Medal, 
  Users, 
  Sparkles, 
  Flame, 
  BarChart, 
  Zap, 
  UserPlus, 
  Lock 
} from "lucide-react";

const features = [
  {
    icon: Flame,
    title: "Mint Social Media",
    description: "Transform your social media accounts into verified NFTs that showcase your digital presence."
  },
  {
    icon: Sparkles,
    title: "Category Focus",
    description: "Establish your expertise in specific categories to build your audience and reputation."
  },
  {
    icon: UserPlus,
    title: "Creator Collaboration",
    description: "Connect with projects and other creators through NFT-backed collaborations."
  },
  {
    icon: BarChart,
    title: "Credit Scoring",
    description: "Build and grow your creator credit score based on engagement, collaborations, and credibility."
  },
  {
    icon: Medal,
    title: "Leaderboards",
    description: "Compete for top positions in creator rankings across different categories and metrics."
  },
  {
    icon: Lock,
    title: "Proof of Work",
    description: "Document collaborations and partnerships with immutable blockchain verification."
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-background justify-center items-center flex flex-col">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Empowering <span className="text-purple-400">Creator Growth</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform combines social media presence with Web3 technology to create
            new opportunities for creators.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group rounded-xl border border-border/50 bg-card/30 p-6 hover:bg-card/80 hover:border-purple-500/30 transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-purple-950/30 p-2 text-purple-400 group-hover:bg-purple-950/50 group-hover:text-purple-300 transition-colors">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}