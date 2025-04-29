"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Verified, TrendingUp, TrendingDown, Minus, ExternalLink } from "lucide-react";

// Mock leaderboard data
import { getLeaderboardData } from "@/lib/leaderboard-data";

type LeaderboardTableProps = {
  timeRange: string;
  category: string;
};

export function LeaderboardTable({ timeRange, category }: LeaderboardTableProps) {
  const creators = getLeaderboardData(category, timeRange);
  
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12 text-center">Rank</TableHead>
            <TableHead>Creator</TableHead>
            <TableHead>Categories</TableHead>
            <TableHead className="text-right">Score</TableHead>
            <TableHead className="text-right">Change</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {creators.map((creator) => (
            <TableRow key={creator.id}>
              <TableCell className="text-center font-medium">
                {creator.rank}
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden">
                    <Image
                      src={creator.avatar}
                      alt={creator.name}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="font-medium">{creator.name}</span>
                      {creator.verified && <Verified className="h-4 w-4 text-blue-500" />}
                    </div>
                    <div className="text-sm text-muted-foreground">{creator.handle}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
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
              </TableCell>
              <TableCell className="text-right font-medium">
                {creator.score}
              </TableCell>
              <TableCell className="text-right">
                <div className="flex items-center justify-end gap-1">
                  {creator.change > 0 ? (
                    <>
                      <TrendingUp className="h-4 w-4 text-green-500" />
                      <span className="text-green-500">+{creator.change}</span>
                    </>
                  ) : creator.change < 0 ? (
                    <>
                      <TrendingDown className="h-4 w-4 text-red-500" />
                      <span className="text-red-500">{creator.change}</span>
                    </>
                  ) : (
                    <>
                      <Minus className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">0</span>
                    </>
                  )}
                </div>
              </TableCell>
              <TableCell className="text-right">
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
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}