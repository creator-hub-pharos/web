// Mock leaderboard data generator
export function getLeaderboardData(category: string, timeRange: string) {
  // This would normally come from an API or database
  // For demo purposes, we'll generate mock data
  
  const baseCreators = [
    {
      id: 1,
      name: "Alex Chen",
      handle: "@techcreator",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      categories: ["Technology", "Web3", "AI"],
      score: 92,
      verified: true,
      change: 3
    },
    {
      id: 2,
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
      name: "Darius Webb",
      handle: "@gamingdarius",
      avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      categories: ["Gaming", "NFTs", "Entertainment"],
      score: 87,
      verified: true,
      change: 2
    },
    {
      id: 4,
      name: "Sophie Taylor",
      handle: "@artbysophie",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      categories: ["Art", "Design", "NFTs"],
      score: 85,
      verified: false,
      change: 0
    },
    {
      id: 5,
      name: "Marco Riviera",
      handle: "@marcotravels",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      categories: ["Travel", "Lifestyle", "Photography"],
      score: 83,
      verified: true,
      change: -1
    },
    {
      id: 6,
      name: "Layla Khan",
      handle: "@laylacodes",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      categories: ["Programming", "Education", "Web3"],
      score: 88,
      verified: true,
      change: 4
    },
    {
      id: 7,
      name: "Jordan Williams",
      handle: "@fitjordan",
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      categories: ["Fitness", "Health", "Lifestyle"],
      score: 82,
      verified: false,
      change: 2
    },
    {
      id: 8,
      name: "Elena Rodriguez",
      handle: "@elenacooks",
      avatar: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      categories: ["Food", "Cooking", "Lifestyle"],
      score: 79,
      verified: true,
      change: -2
    },
    {
      id: 9,
      name: "David Kim",
      handle: "@davidmusic",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      categories: ["Music", "Entertainment", "Art"],
      score: 84,
      verified: true,
      change: 1
    },
    {
      id: 10,
      name: "Olivia Chen",
      handle: "@oliviafinance",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      categories: ["Finance", "Crypto", "Education"],
      score: 86,
      verified: true,
      change: 3
    }
  ];
  
  let filteredCreators = [...baseCreators];
  
  // Filter by category if not "overall"
  if (category !== "overall") {
    const categoryMap: Record<string, string[]> = {
      tech: ["Technology", "Programming", "AI", "Web3"],
      crypto: ["Crypto", "Finance", "DeFi"],
      art: ["Art", "Design", "Photography"],
      gaming: ["Gaming", "Entertainment"],
      education: ["Education", "Finance", "Programming"]
    };
    
    const relevantCategories = categoryMap[category] || [];
    
    filteredCreators = baseCreators.filter(creator => 
      creator.categories.some(cat => 
        relevantCategories.includes(cat)
      )
    );
  }
  
  // Sort by score and add rank
  const sortedCreators = filteredCreators
    .sort((a, b) => b.score - a.score)
    .map((creator, index) => ({
      ...creator,
      rank: index + 1
    }));
  
  return sortedCreators;
}