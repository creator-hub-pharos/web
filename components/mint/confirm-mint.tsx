"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Loader2, CheckCircle2, AlertTriangle } from "lucide-react";
import { useRouter } from "next/navigation";

enum MintStatus {
  READY = "ready",
  PROCESSING = "processing",
  SUCCESS = "success",
  ERROR = "error"
}

export function ConfirmMint() {
  const [status, setStatus] = useState<MintStatus>(MintStatus.READY);
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  const handleMint = async () => {
    setStatus(MintStatus.PROCESSING);
    
    // Simulate minting process
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 10;
      setProgress(currentProgress);
      
      if (currentProgress >= 100) {
        clearInterval(interval);
        setStatus(MintStatus.SUCCESS);
      }
    }, 500);
  };

  const renderStatusContent = () => {
    switch (status) {
      case MintStatus.PROCESSING:
        return (
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <Loader2 className="h-12 w-12 animate-spin text-purple-500" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Minting Your Creator NFT</h3>
              <p className="text-sm text-muted-foreground">
                Please wait while we mint your Creator NFT on the blockchain
              </p>
            </div>
            <div className="space-y-1">
              <Progress value={progress} className="h-2" />
              <p className="text-xs text-muted-foreground">{progress}% complete</p>
            </div>
          </div>
        );
        
      case MintStatus.SUCCESS:
        return (
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <CheckCircle2 className="h-12 w-12 text-green-500" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Success!</h3>
              <p className="text-sm text-muted-foreground">
                Your Creator NFT has been successfully minted on the blockchain
              </p>
            </div>
            <Card className="bg-muted/50">
              <CardContent className="px-4 py-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Transaction Hash:</span>
                  <span className="font-mono">0x71c...8fe3</span>
                </div>
              </CardContent>
            </Card>
            <div className="flex gap-2 justify-center">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open('https://etherscan.io', '_blank')}
              >
                View on Etherscan
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open('https://opensea.io', '_blank')}
              >
                View on OpenSea
              </Button>
            </div>
            <div className="pt-4">
              <Button onClick={() => router.push("/creators")}>
                Explore Creators
              </Button>
            </div>
          </div>
        );
        
      case MintStatus.ERROR:
        return (
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <AlertTriangle className="h-12 w-12 text-red-500" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Minting Failed</h3>
              <p className="text-sm text-muted-foreground">
                There was an error while minting your Creator NFT
              </p>
            </div>
            <Button onClick={() => setStatus(MintStatus.READY)}>
              Try Again
            </Button>
          </div>
        );
        
      default:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium">Ready to Mint</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Confirm the details and mint your Creator NFT
              </p>
            </div>
            
            <div className="space-y-4">
              <Card className="bg-muted/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Gas Fee Estimate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Gas Fee</span>
                    <span className="text-sm font-medium">0.005 ETH</span>
                  </div>
                </CardContent>
              </Card>
              
              <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                <div className="flex gap-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium text-yellow-500 mb-1">Important</h4>
                    <p className="text-xs text-muted-foreground">
                      Make sure your wallet is connected and has sufficient funds for gas fees.
                      This transaction cannot be reversed once confirmed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-4 space-y-4">
              <Button onClick={handleMint} className="w-full">
                Mint Creator NFT
              </Button>
              <Button variant="outline" className="w-full">
                Back to Preview
              </Button>
            </div>
          </div>
        );
    }
  };

  return <div className="py-4">{renderStatusContent()}</div>;
}