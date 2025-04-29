"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Verified, TrendingUp, TrendingDown, Minus, ExternalLink } from "lucide-react";

// Mock leaderboard data
import { getLeaderboardData } from "@/lib/leaderboard-data";

type LeaderboardCardsProps = {
  timeRange: string;
  category: string;
};

export function LeaderboardCards({ timeRange, category }: LeaderboardCardsProps) {
  const creators = getLeaderboardData(category, timeRange);
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {creators.map((creator) => (
        <Card key={creator.id} className="hover:border-purple-500/30 transition-colors">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-950/50 text-xl font-bold">
                {creator.rank}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1">
                  <span className="font-medium truncate">{creator.name}</span>
                  {creator.verified && <Verified className="h-4 w-4 text-blue-500 flex-shrink-0" />}
                </div>
                <div className="text-sm text-muted-foreground truncate">{creator.handle}</div>
              </div>
              <div className="flex items-center gap-1">
                <span className="font-bold">{creator.score}</span>
                {creator.change > 0 ? (
                  <TrendingUp className="h-4 w-4 text-green-500" />
                ) : creator.change < 0 ? (
                  <TrendingDown className="h-4 w-4 text-red-500" />
                ) : (
                  <Minus className="h-4 w-4 text-muted-foreground" />
                )}
              </div>
            </div>
            
            <div className="mt-4 flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                {creator.categories.slice(0, 2).map((category) => (
                  <Badge key={category} variant="outline" className="bg-purple-900/20">
                    {category}
                  </Badge>
                ))}
                {creator.categories.length > 2 && (
                  <Badge variant="outline">+{creator.categories.length - 2}</Badge>
                )}
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
                asChild
              >
                <Link href={`/creators/${creator.id}`}>
                  <ExternalLink className="h-4 w-4" />
                  <span className="sr-only">View profile</span>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}