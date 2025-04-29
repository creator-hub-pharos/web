"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Card, 
  CardContent, 
  CardFooter 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Verified, Star, ExternalLink } from "lucide-react";

// Mock creator data
const creators = [
  {
    id: 1,
    name: "Alex Chen",
    handle: "@techcreator",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    categories: ["Tech", "Web3", "AI"],
    score: 92,
    verified: true,
    followers: "45.2K",
    bio: "Tech enthusiast sharing insights on the latest web3 developments and AI innovations."
  },
  {
    id: 2,
    name: "Maya Johnson",
    handle: "@cryptomaya",
    avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    categories: ["Crypto", "Finance", "Education"],
    score: 89,
    verified: true,
    followers: "38.7K",
    bio: "Demystifying cryptocurrency and decentralized finance for everyone. Financial education advocate."
  },
  {
    id: 3,
    name: "Darius Webb",
    handle: "@gamingdarius",
    avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    categories: ["Gaming", "NFTs", "Entertainment"],
    score: 87,
    verified: true,
    followers: "126K",
    bio: "Gaming content creator specializing in NFT gaming and blockchain entertainment."
  },
  {
    id: 4,
    name: "Sophie Taylor",
    handle: "@artbysophie",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    categories: ["Art", "Design", "NFTs"],
    score: 85,
    verified: false,
    followers: "92.1K",
    bio: "Digital artist creating unique NFT collections. Exploring the intersection of traditional art and blockchain."
  },
  {
    id: 5,
    name: "Marco Riviera",
    handle: "@marcotravels",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    categories: ["Travel", "Lifestyle", "Photography"],
    score: 83,
    verified: true,
    followers: "67.4K",
    bio: "Travel content creator documenting experiences around the world. Photography enthusiast."
  },
  {
    id: 6,
    name: "Layla Khan",
    handle: "@laylacodes",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    categories: ["Programming", "Education", "Web3"],
    score: 88,
    verified: true,
    followers: "104K",
    bio: "Software engineer teaching coding and web3 development. Building the future of tech education."
  },
  {
    id: 7,
    name: "Jordan Williams",
    handle: "@fitjordan",
    avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    categories: ["Fitness", "Health", "Lifestyle"],
    score: 82,
    verified: false,
    followers: "215K",
    bio: "Fitness coach and wellness advocate. Helping you achieve your health goals one step at a time."
  },
  {
    id: 8,
    name: "Elena Rodriguez",
    handle: "@elenacooks",
    avatar: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    categories: ["Food", "Cooking", "Lifestyle"],
    score: 79,
    verified: true,
    followers: "167K",
    bio: "Culinary creator sharing delicious recipes and cooking tips. Food is my love language."
  }
];

export function CreatorsGrid() {
  const [sortOption, setSortOption] = useState("score");

  // Sort creators based on selected option
  const sortedCreators = [...creators].sort((a, b) => {
    if (sortOption === "score") {
      return b.score - a.score;
    } else if (sortOption === "name") {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing <span className="font-medium text-foreground">{creators.length}</span> creators
        </p>
        <div className="flex items-center space-x-2">
          <p className="text-sm text-muted-foreground">Sort by:</p>
          <Select value={sortOption} onValueChange={setSortOption}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="score">Credit Score</SelectItem>
              <SelectItem value="name">Name</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {sortedCreators.map((creator) => (
          <Card key={creator.id} className="overflow-hidden hover:border-purple-500/50 transition-colors group">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={creator.avatar}
                alt={creator.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
              <div className="absolute bottom-3 left-3 flex items-center space-x-2">
                <Badge variant="secondary" className="flex gap-1 items-center bg-background/90 backdrop-blur-sm">
                  <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                  <span>{creator.score}</span>
                </Badge>
                <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                  {creator.followers} followers
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
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{creator.bio}</p>
              <div className="mt-3 flex flex-wrap gap-2">
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
        ))}
      </div>
    </div>
  );
}