
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const gamesTrending = [
  { title: "Assassin's Creed: Mirage", price: "$60.99", img: "assassins_creed.jpg" },
  { title: "Valorant", price: "Free to Play", img: "valorant.jpg" },
  { title: "Red Dead Redemption II", price: "$29.99", img: "rdr2.jpg" },
  { title: "The Last Of Us: Part II", price: "$50.99", img: "last_of_us.jpg" },
  { title: "Call Of Duty: MW II", price: "$39.99", img: "cod_mw2.jpg" },
  { title: "Genshin Impact", price: "Free to Play", img: "genshin.jpg" }
];

const gamesPopular = [
  { title: "Star Wars: Jedi Fallen Order", price: "$25.99", img: "jedi.jpg" },
  { title: "Forza Horizon 5", price: "$30.99", img: "forza.jpg" },
  { title: "Fall Guys", price: "Free to Play", img: "fall_guys.jpg" }
];

export default function GameStore() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-4">
      <header className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">OASIS</h1>
        <Input placeholder="Search games..." className="w-1/3" />
        <Button>Install Oasis</Button>
      </header>

      <section className="my-8">
        <h2 className="text-xl font-semibold mb-4">Trending</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {gamesTrending.map((game, index) => (
            <Card key={index} className="bg-gray-800">
              <CardContent>
                <img src={game.img} alt={game.title} className="rounded-xl mb-2" />
                <h3 className="text-lg font-bold">{game.title}</h3>
                <p>{game.price}</p>
                <Button className="mt-2">Buy Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="my-8">
        <h2 className="text-xl font-semibold mb-4">Popular</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {gamesPopular.map((game, index) => (
            <Card key={index} className="bg-gray-800">
              <CardContent>
                <img src={game.img} alt={game.title} className="rounded-xl mb-2" />
                <h3 className="text-lg font-bold">{game.title}</h3>
                <p>{game.price}</p>
                <Button className="mt-2">Buy Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <footer className="text-center mt-8">
        <p>&copy; 2025 OASIS. All rights reserved.</p>
      </footer>
    </div>
  );
}
