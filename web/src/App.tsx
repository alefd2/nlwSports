import './styles/main.css';

import * as Dialog from '@radix-ui/react-dialog';

import logoImg from './assets/logo-nlw.svg'
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import { useEffect, useState } from 'react';
import { CreateAdModal } from './components/CreatAdModal';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number
  }

}

function App() {

  const [games, setGames] = useState<Game[]>([])
  
  useEffect(()=>{
    fetch('http://localhost:3005/games')
    .then(res => res.json())
    .then(data => {
      setGames(data);
    })
  },[])

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} />

      <h1 className="text-6xl text-white font-black mt-20 ">
        Seu <span className="bg-nlw-gradient text-transparent bg-clip-text">duo</span> está aqui.</h1>
      <div className="grid grid-cols-6 gap-6 mt-16">

      { 
        games.map(game => {
          return(
              <GameBanner
                key={game.id}
                adsCount={game._count.ads}
                title={game.title}
                bannerUrl={game.bannerUrl}
              />
            )
        })
      }
        
      </div>

      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>

    </div>
  )
}

export default App
