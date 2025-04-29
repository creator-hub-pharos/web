"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2 } from "lucide-react";
import { 
  Twitter, 
  Instagram, 
  Youtube, 
  Twitch, 
  Linkedin, 
  CheckCircle 
} from "lucide-react";

type SocialPlatform = {
  id: string;
  name: string;
  icon: any;
  color: string;
  connected: boolean;
  handle?: string;
};

type SocialMediaConnectProps = {
  goToNextStep: () => void;
};

export function SocialMediaConnect({ goToNextStep }: SocialMediaConnectProps) {
  const [platforms, setPlatforms] = useState<SocialPlatform[]>([
    { id: "twitter", name: "Twitter", icon: Twitter, color: "text-sky-500", connected: false },
    { id: "instagram", name: "Instagram", icon: Instagram, color: "text-pink-500", connected: false },
    { id: "youtube", name: "YouTube", icon: Youtube, color: "text-red-500", connected: false },
    { id: "twitch", name: "Twitch", icon: Twitch, color: "text-purple-500", connected: false },
    { id: "linkedin", name: "LinkedIn", icon: Linkedin, color: "text-blue-500", connected: false },
  ]);

  const [currentHandle, setCurrentHandle] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);

  const connectPlatform = (platformId: string) => {
    setPlatforms(platforms.map(platform => 
      platform.id === platformId 
        ? { ...platform, connected: true, handle: currentHandle } 
        : platform
    ));
    setCurrentHandle("");
    setSelectedPlatform(null);
  };

  const disconnectPlatform = (platformId: string) => {
    setPlatforms(platforms.map(platform => 
      platform.id === platformId 
        ? { ...platform, connected: false, handle: undefined } 
        : platform
    ));
  };

  const hasConnectedPlatforms = platforms.some(platform => platform.connected);

  return (
    <div className="space-y-6 py-4">
      <div>
        <h3 className="text-lg font-medium">Connect Social Media Accounts</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Link your social media accounts to establish your creator identity.
        </p>
      </div>

      <div className="grid gap-6">
        {platforms.map((platform) => (
          <div key={platform.id} className="flex items-center justify-between p-4 rounded-lg border">
            <div className="flex items-center gap-3">
              <platform.icon className={`h-6 w-6 ${platform.color}`} />
              <div>
                <p className="font-medium">{platform.name}</p>
                {platform.connected && platform.handle && (
                  <p className="text-sm text-muted-foreground">{platform.handle}</p>
                )}
              </div>
            </div>
            
            {platform.connected ? (
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => disconnectPlatform(platform.id)}
                >
                  Disconnect
                </Button>
              </div>
            ) : selectedPlatform === platform.id ? (
              <div className="flex items-center gap-2">
                <Input
                  placeholder={`Enter ${platform.name} handle`}
                  value={currentHandle}
                  onChange={(e) => setCurrentHandle(e.target.value)}
                  className="w-48 h-9"
                />
                <Button 
                  size="sm"
                  onClick={() => connectPlatform(platform.id)}
                  disabled={!currentHandle}
                >
                  Connect
                </Button>
              </div>
            ) : (
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setSelectedPlatform(platform.id)}
              >
                Connect
              </Button>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-end space-x-2 pt-4">
        <Button
          onClick={goToNextStep}
          disabled={!hasConnectedPlatforms}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}