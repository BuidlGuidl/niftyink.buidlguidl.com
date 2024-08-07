import React from "react";
import Link from "next/link";
import type { NextPage } from "next";
import { StreamContractInfo } from "~~/components/StreamContractInfo";

const Home: NextPage = () => {
  return (
    <>
      <div className="max-w-3xl px-4 py-8">
        {/* <h1 className="text-4xl font-bold mb-8 text-primary-content bg-primary inline-block p-2">NiftyInk</h1> */}
        <div>
          <p className="mt-0">
            Funding the{" "}
            <Link href="/members" className="link link-primary">
              NiftyInk BuidlGuidl Cohort
            </Link>{" "}
            with ETH streams.
          </p>
          {/* <p>
            <
              Members
            </Link>{" "}
          </p> */}
        </div>
        <div className="mb-10">
          <StreamContractInfo />
        </div>
      </div>
    </>
  );
};

export default Home;
