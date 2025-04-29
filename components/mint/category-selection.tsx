"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

type CategorySelectionProps = {
  goToNextStep: () => void;
};

// Predefined categories
const allCategories = [
  { id: "tech", name: "Technology", popular: true },
  { id: "crypto", name: "Cryptocurrency", popular: true },
  { id: "web3", name: "Web3", popular: true },
  { id: "nft", name: "NFTs", popular: true },
  { id: "art", name: "Art & Design", popular: true },
  { id: "gaming", name: "Gaming", popular: true },
  { id: "finance", name: "Finance", popular: false },
  { id: "education", name: "Education", popular: false },
  { id: "music", name: "Music", popular: false },
  { id: "fashion", name: "Fashion", popular: false },
  { id: "health", name: "Health & Fitness", popular: false },
  { id: "travel", name: "Travel", popular: false },
  { id: "food", name: "Food & Cooking", popular: false },
  { id: "photography", name: "Photography", popular: false },
  { id: "beauty", name: "Beauty", popular: false },
  { id: "lifestyle", name: "Lifestyle", popular: false },
  { id: "business", name: "Business", popular: false },
  { id: "entertainment", name: "Entertainment", popular: false },
  { id: "sports", name: "Sports", popular: false },
  { id: "science", name: "Science", popular: false }
];

export function CategorySelection({ goToNextStep }: CategorySelectionProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleCategory = (categoryId: string) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
    } else {
      // Limit to maximum 5 categories
      if (selectedCategories.length < 5) {
        setSelectedCategories([...selectedCategories, categoryId]);
      }
    }
  };

  const filteredCategories = allCategories.filter(category => 
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const popularCategories = allCategories.filter(category => category.popular);

  return (
    <div className="space-y-6 py-4">
      <div>
        <h3 className="text-lg font-medium">Select Your Content Categories</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Choose up to 5 categories that best describe your content focus.
        </p>
      </div>

      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search categories..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {searchTerm === "" && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Popular Categories</h4>
            <div className="flex flex-wrap gap-2">
              {popularCategories.map((category) => (
                <Badge
                  key={category.id}
                  variant={selectedCategories.includes(category.id) ? "default" : "outline"}
                  className={`
                    cursor-pointer py-1.5 px-3 text-sm
                    ${selectedCategories.includes(category.id) 
                      ? "bg-purple-600 hover:bg-purple-700" 
                      : "hover:bg-purple-900/20"
                    }
                  `}
                  onClick={() => toggleCategory(category.id)}
                >
                  {category.name}
                </Badge>
              ))}
            </div>
          </div>
        )}

        <div className="space-y-2">
          <h4 className="text-sm font-medium">
            {searchTerm === "" ? "All Categories" : "Search Results"}
          </h4>
          <div className="flex flex-wrap gap-2">
            {filteredCategories.map((category) => (
              <Badge
                key={category.id}
                variant={selectedCategories.includes(category.id) ? "default" : "outline"}
                className={`
                  cursor-pointer py-1.5 px-3 text-sm
                  ${selectedCategories.includes(category.id) 
                    ? "bg-purple-600 hover:bg-purple-700" 
                    : "hover:bg-purple-900/20"
                  }
                `}
                onClick={() => toggleCategory(category.id)}
              >
                {category.name}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-4">
        <div className="mb-4">
          <h4 className="text-sm font-medium">Selected Categories ({selectedCategories.length}/5)</h4>
          <div className="flex flex-wrap gap-2 mt-2">
            {selectedCategories.length > 0 ? (
              selectedCategories.map((categoryId) => {
                const category = allCategories.find(c => c.id === categoryId);
                return (
                  <Badge
                    key={categoryId}
                    variant="secondary"
                    className="bg-purple-900/40 text-sm"
                  >
                    {category?.name}
                  </Badge>
                );
              })
            ) : (
              <p className="text-sm text-muted-foreground">No categories selected</p>
            )}
          </div>
        </div>

        <div className="flex justify-end space-x-2">
          <Button variant="outline">Back</Button>
          <Button
            onClick={goToNextStep}
            disabled={selectedCategories.length === 0}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}