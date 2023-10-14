import React, { useState } from "react";
import Head from "next/head";
import type { NextPage } from "next";
import * as chains from "wagmi/chains";
import { AddressCard, ButtonsCard, Navbar, NetworkCard, QRCodeCard } from "~~/components/address-vision/";

const Home: NextPage = () => {
  const [searchedAddress, setSearchedAddress] = useState("");

  return (
    <>
      <Head>
        <title>address.vision</title>
        <meta name="description" content="address vision" />
        <script defer data-domain="address.vision" src="https://plausible.io/js/script.js"></script>
      </Head>
      <Navbar searchedAddress={searchedAddress} setSearchedAddress={setSearchedAddress} />

      {searchedAddress ? (
        <div className="flex w-full flex-grow flex-col items-center justify-center gap-4 p-4 md:mt-4">
          <div className="flex flex-wrap">
            <div className="w-full flex-wrap space-y-4 p-4 sm:w-1/2 lg:w-1/3">
              <AddressCard address={searchedAddress} />
              <div className="w-[370px] md:hidden lg:hidden">
                <QRCodeCard address={searchedAddress} />
              </div>
              <ButtonsCard address={searchedAddress} />

              <NetworkCard address={searchedAddress} chain={chains.arbitrum} />
              <div className="lg:hidden">
                <NetworkCard address={searchedAddress} chain={chains.polygon} />
              </div>
              <NetworkCard address={searchedAddress} chain={chains.base} />
              <div className="space-y-4 md:hidden lg:hidden">
                <NetworkCard address={searchedAddress} chain={chains.mainnet} />
                <NetworkCard address={searchedAddress} chain={chains.optimism} />
              </div>
            </div>

            <div className="w-full space-y-4 p-4 hidden sm:w-1/2 md:block lg:block lg:w-1/3">
              <QRCodeCard address={searchedAddress} />
              <div className="lg:hidden">
                <NetworkCard address={searchedAddress} chain={chains.mainnet} />
              </div>
              <NetworkCard address={searchedAddress} chain={chains.optimism} />
            </div>

            <div className="w-full space-y-4 p-4 hidden sm:w-1/2 md:hidden lg:block lg:w-1/3">
              <NetworkCard address={searchedAddress} chain={chains.mainnet} />

              <NetworkCard address={searchedAddress} chain={chains.polygon} />
            </div>
          </div>
        </div>
      ) : (
        <div className="relative flex flex-grow flex-col items-center justify-center">
          <div className="mb-4 text-9xl">👀</div>
          <h1 className="mb-4 text-center text-4xl font-bold">Welcome to address.vision!</h1>
          <p className="mb-4 text-center text-xl">
            To get started, enter an Ethereum address or ENS name in the search bar above.
          </p>
        </div>
      )}
    </>
  );
};

export default Home;