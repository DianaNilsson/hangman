import React, { useState } from 'react';
import WordDiv from '../components/WordDiv';
import Letters from '../components/letters/Letters.jsx';
import StartNewMultigameModal from '../components/StartNewMultigameModal';
import JoinGameModal from '../components/JoinGameModal';
import PlayersInfo from '../components/PlayersInfo';
import PlayBackground from '../components/PlayBackground';
import Cauldron from '../components/Cauldron';
import Skeleton from '../components/Skeleton';
import InfoModal from '../components/infoModal/InfoModal';
import OpponentsMoveOverlay from '../components/OpponentsMoveOverlay';
import Button from 'react-bootstrap/Button';

export const Multiplayer = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <PlayBackground />
      <main>
        <header>
          <h1
            className="font-butcher text-white position-relative"
            style={{ zIndex: 5 }}
          >
            Multiplayer Hangman
          </h1>
          <PlayersInfo />
        </header>
        <OpponentsMoveOverlay />
        <WordDiv />
        <Letters />
        <Button
          className="position-absolute"
          style={{ bottom: '2rem', right: '2rem', zIndex: 5 }}
          variant="info"
          onClick={() => setModalShow(true)}
        >
          Rules
        </Button>
        <Skeleton />
        <Cauldron />
      </main>
      <StartNewMultigameModal />
      <JoinGameModal />
      <InfoModal show={modalShow} handleClose={() => setModalShow(false)} />
    </>
  );
};
