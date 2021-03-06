import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import InfoModal from '../components/infoModal/InfoModal';
import Background from '../components/Background';
import NewMultiGameButton from '../components/NewMultiGameButton';

export const Home = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Background />
      <main
        style={{ height: '100vh' }}
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <h1 className="text-center font-butcher text-white">
          Super Guardians Hangman
        </h1>
        <div className="my-5">
          <NewMultiGameButton />{' '}
          <Button href="/singleplayer" variant="primary">
            New Singlegame
          </Button>
        </div>
        <Button variant="info" onClick={() => setModalShow(true)}>
          Rules
        </Button>
      </main>

      <InfoModal show={modalShow} handleClose={() => setModalShow(false)} />
    </>
  );
};
