"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Verified, Trophy, Star, TrendingUp } from "lucide-react";

// Example top 3 creators
const topCreators = [
  {
    id: 1,
    rank: 1,
    name: "Alex Chen",
    handle: "@techcreator",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    categories: ["Tech", "Web3", "AI"],
    score: 92,
    verified: true,
    change: 3
  },
  {
    id: 2,
    rank: 2,
    name: "Maya Johnson",
    handle: "@cryptomaya",
    avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    categories: ["Crypto", "Finance", "Education"],
    score: 89,
    verified: true,
    change: 1
  },
  {
    id: 3,
    rank: 3,
    name: "Darius Webb",
    handle: "@gamingdarius",
    avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    categories: ["Gaming", "NFTs", "Entertainment"],
    score: 87,
    verified: true,
    change: 2
  }
];

export function LeaderboardFeatured() {
  return (
    <div className="bg-gradient-to-br from-purple-950/20 to-background rounded-xl overflow-hidden border border-purple-500/20">
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold inline-flex items-center gap-2">
            <Trophy className="h-6 w-6 text-yellow-500" />
            Featured Top Creators
          </h2>
          <p className="text-muted-foreground mt-1">
            The highest-ranked creators based on social credit score
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {topCreators.map((creator, index) => (
            <motion.div
              key={creator.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div 
                className={`
                  relative rounded-xl overflow-hidden border 
                  ${index === 0 
                    ? 'bg-gradient-to-b from-yellow-900/20 to-background border-yellow-500/30' 
                    : index === 1 
                    ? 'bg-gradient-to-b from-slate-400/20 to-background border-slate-400/30' 
                    : 'bg-gradient-to-b from-amber-800/20 to-background border-amber-700/30'
                  }
                `}
              >
                <div className="absolute top-0 left-0 w-full h-1/2 overflow-hidden">
                  <div 
                    className={`
                      w-40 h-40 rounded-full opacity-20 blur-3xl absolute -top-20 -right-20
                      ${index === 0 
                        ? 'bg-yellow-500' 
                        : index === 1 
                        ? 'bg-slate-400' 
                        : 'bg-amber-700'
                      }
                    `}
                  ></div>
                </div>
                
                <div className="relative p-6">
                  <div className="flex items-center gap-4">
                    <div 
                      className={`
                        flex h-12 w-12 items-center justify-center rounded-full text-xl font-bold
                        ${index === 0 
                          ? 'bg-yellow-500 text-yellow-950' 
                          : index === 1 
                          ? 'bg-slate-400 text-slate-950' 
                          : 'bg-amber-700 text-amber-100'
                        }
                      `}
                    >
                      {creator.rank}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1">
                        <h3 className="font-semibold truncate">{creator.name}</h3>
                        {creator.verified && <Verified className="h-4 w-4 text-blue-500 flex-shrink-0" />}
                      </div>
                      <p className="text-sm text-muted-foreground truncate">{creator.handle}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex justify-between items-center">
                    <div className="flex items-center gap-1">
                      <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                      <span className="font-bold text-lg">{creator.score}</span>
                      <span className="text-sm text-green-400 flex items-center ml-1">
                        <TrendingUp className="h-3 w-3 mr-0.5" />
                        {creator.change}
                      </span>
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      size="sm"
                      asChild
                      className={`
                        ${index === 0 
                          ? 'hover:bg-yellow-500/10' 
                          : index === 1 
                          ? 'hover:bg-slate-400/10' 
                          : 'hover:bg-amber-700/10'
                        }
                      `}
                    >
                      <Link href={`/creators/${creator.id}`}>
                        View Profile
                      </Link>
                    </Button>
                  </div>
                  
                  <div className="mt-4 flex flex-wrap gap-1">
                    {creator.categories.map((category) => (
                      <Badge 
                        key={category} 
                        variant="outline" 
                        className={`
                          ${index === 0 
                            ? 'bg-yellow-950/20 border-yellow-500/30' 
                            : index === 1 
                            ? 'bg-slate-800/20 border-slate-400/30' 
                            : 'bg-amber-950/20 border-amber-700/30'
                          }
                        `}
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}