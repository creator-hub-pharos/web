"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Twitter, Instagram, Youtube, Verified, Share2 } from "lucide-react";

type NFTPreviewProps = {
  goToNextStep: () => void;
};

export function NFTPreview({ goToNextStep }: NFTPreviewProps) {
  // This would normally come from context or state management
  const profileData = {
    name: "Alex Chen",
    handle: "@techcreator",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Tech enthusiast sharing insights on web3 developments and AI innovations.",
    verified: true,
    score: 92,
    followers: "45.2K",
    socials: [
      { platform: "Twitter", icon: Twitter, handle: "@techcreator", color: "text-sky-500" },
      { platform: "Instagram", icon: Instagram, handle: "@alex.tech", color: "text-pink-500" },
      { platform: "YouTube", icon: Youtube, handle: "TechWithAlex", color: "text-red-500" }
    ],
    categories: ["Technology", "Web3", "AI", "Cryptocurrency", "Education"]
  };

  return (
    <div className="space-y-6 py-4">
      <div>
        <h3 className="text-lg font-medium">Preview Your Creator NFT</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Review how your Creator NFT will appear on the blockchain.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2">
          <div className="relative aspect-square overflow-hidden rounded-xl border-2 border-purple-500/50 shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-background/80 to-blue-500/30"></div>
            <Image
              src={profileData.avatar}
              alt={profileData.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 p-4 flex flex-col justify-between">
              <div className="flex justify-end">
                <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                  Score: {profileData.score}
                </Badge>
              </div>
              <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-bold text-lg">{profileData.name}</h3>
                  {profileData.verified && <Verified className="h-5 w-5 text-blue-500" />}
                </div>
                <p className="text-sm mb-3">{profileData.handle}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {profileData.categories.map((category) => (
                    <Badge key={category} variant="outline" className="bg-purple-950/40">
                      {category}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  {profileData.socials.map((social) => {
                    const Icon = social.icon;
                    return (
                      <div key={social.platform} className="flex items-center gap-1">
                        <Icon className={`h-4 w-4 ${social.color}`} />
                        <span className="text-xs">{social.handle}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 space-y-4">
          <div className="space-y-2">
            <h4 className="text-sm font-medium">NFT Details</h4>
            <div className="space-y-2 border rounded-lg p-4">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Creator Name</span>
                <span className="text-sm font-medium">{profileData.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Initial Score</span>
                <span className="text-sm font-medium">{profileData.score}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Connected Accounts</span>
                <span className="text-sm font-medium">{profileData.socials.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Categories</span>
                <span className="text-sm font-medium">{profileData.categories.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Chain</span>
                <span className="text-sm font-medium">Ethereum</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Token Standard</span>
                <span className="text-sm font-medium">ERC-721</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-medium">Benefits</h4>
            <ul className="space-y-2 border rounded-lg p-4">
              <li className="text-sm flex items-start gap-2">
                <div className="h-5 w-5 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                </div>
                <span>Establish your verified on-chain creator identity</span>
              </li>
              <li className="text-sm flex items-start gap-2">
                <div className="h-5 w-5 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                </div>
                <span>Access collaboration opportunities with projects</span>
              </li>
              <li className="text-sm flex items-start gap-2">
                <div className="h-5 w-5 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                </div>
                <span>Build reputation through social credit scoring system</span>
              </li>
              <li className="text-sm flex items-start gap-2">
                <div className="h-5 w-5 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                </div>
                <span>Compete on leaderboards in your chosen categories</span>
              </li>
            </ul>
          </div>

          <Button variant="outline" className="w-full" disabled>
            <Share2 className="mr-2 h-4 w-4" />
            Customize (Coming Soon)
          </Button>
        </div>
      </div>

      <div className="flex justify-end space-x-2 pt-4">
        <Button variant="outline">Back</Button>
        <Button onClick={goToNextStep}>
          Continue to Mint
        </Button>
      </div>
    </div>
  );
}