"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SocialMediaConnect } from "@/components/mint/social-media-connect";
import { CategorySelection } from "@/components/mint/category-selection";
import { NFTPreview } from "@/components/mint/nft-preview";
import { ConfirmMint } from "@/components/mint/confirm-mint";

const stepTabs = ["connect", "categories", "preview", "mint"];

export default function MintPage() {
  const [activeTab, setActiveTab] = useState("connect");
  
  const goToNextStep = () => {
    const currentIndex = stepTabs.indexOf(activeTab);
    if (currentIndex < stepTabs.length - 1) {
      setActiveTab(stepTabs[currentIndex + 1]);
    }
  };
  
  return (
    <div className="container align-top py-10 sm:py-12 lg:py-16 justify-self-center flex flex-col">

      <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Mint Your <span className="text-purple-400">Creator Presence</span>
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">
          Transform your social media accounts into NFTs and establish your on-chain creator identity.
          </p>
        </div>


      <Card>
        <CardHeader>
          <CardTitle>Creator NFT Minting</CardTitle>
          <CardDescription>
            Complete all steps to mint your Creator NFT
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="connect">Connect</TabsTrigger>
              <TabsTrigger value="categories">Categories</TabsTrigger>
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="mint">Mint</TabsTrigger>
            </TabsList>
            <TabsContent value="connect">
              <SocialMediaConnect goToNextStep={goToNextStep} />
            </TabsContent>
            <TabsContent value="categories">
              <CategorySelection goToNextStep={goToNextStep} />
            </TabsContent>
            <TabsContent value="preview">
              <NFTPreview goToNextStep={goToNextStep} />
            </TabsContent>
            <TabsContent value="mint">
              <ConfirmMint />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}