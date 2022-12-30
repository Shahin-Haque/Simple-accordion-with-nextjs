import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import illustration from '../public//web_devices.svg';
import data from '../components/data';

import Accordion from '../components/Accordion';

const Home = () => {
  return (
    <>
      <Head>
        <title>Next Accordion</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Next Accordion with NextJs without any Library"
        />
      </Head>
      <main>
        <Image className="illustration" src={illustration} alt="illustration" />
        <section>
          <h1> FAQ</h1>
          {data.map((items) => (
            <Accordion key={items.id} data={items} />
          ))}
        </section>
      </main>
    </>
  );
};

export default Home;
