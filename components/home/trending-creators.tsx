"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Verified, Star, TrendingUp, ExternalLink } from "lucide-react";

// Example creator data
const trendingCreators = [
  {
    id: 1,
    name: "Alex Chen",
    handle: "@techcreator",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    categories: ["Tech", "Web3", "AI"],
    score: 92,
    verified: true,
  },
  {
    id: 2,
    name: "Maya Johnson",
    handle: "@cryptomaya",
    avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    categories: ["Crypto", "Finance", "Education"],
    score: 89,
    verified: true,
  },
  {
    id: 3,
    name: "Darius Webb",
    handle: "@gamingdarius",
    avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    categories: ["Gaming", "NFTs", "Entertainment"],
    score: 87,
    verified: true,
  },
  {
    id: 4,
    name: "Sophie Taylor",
    handle: "@artbysophie",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    categories: ["Art", "Design", "NFTs"],
    score: 85,
    verified: false,
  }
];

export function TrendingCreators() {
  return (
    <section className="py-20 bg-background justify-center items-center flex flex-col">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center rounded-full bg-purple-900/20 px-3 py-1 text-sm font-medium text-purple-400 ring-1 ring-inset ring-purple-700/20 mb-4">
              <TrendingUp className="mr-1 h-3 w-3" />
              <span>Trending Now</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
              Top <span className="text-purple-400">Creators</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Discover the most influential creators making waves in the CreatorHub ecosystem.
            </p>
          </div>
          <Button asChild className="mt-4 md:mt-0">
            <Link href="/creators">View All Creators</Link>
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trendingCreators.map((creator, index) => (
            <motion.div
              key={creator.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden hover:border-purple-500/50 transition-colors group">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={creator.avatar}
                    alt={creator.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                  <div className="absolute bottom-3 left-3 flex items-center space-x-1">
                    <Badge variant="secondary" className="flex gap-1 items-center bg-background/90 backdrop-blur-sm">
                      <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                      <span>{creator.score}</span>
                    </Badge>
                  </div>
                </div>
                <CardContent className="pt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <h3 className="font-semibold">{creator.name}</h3>
                      {creator.verified && (
                        <Verified className="h-4 w-4 text-blue-500" />
                      )}
                    </div>
                    <span className="text-sm text-muted-foreground">{creator.handle}</span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {creator.categories.map((category) => (
                      <Badge key={category} variant="outline" className="bg-purple-950/30 hover:bg-purple-950/50">
                        {category}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="ghost" size="sm" className="w-full gap-1" asChild>
                    <Link href={`/creators/${creator.id}`}>
                      View Profile
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}