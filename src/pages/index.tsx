import Head from "@docusaurus/Head";
import clsx from "clsx";
import React from "react";

import { CommonLayout } from "../refine-theme/common-layout";
import { LandingFooter } from "../refine-theme/landing-footer";
import { LandingCommunity } from "../refine-theme/landing-community";
import { LandingTrustedByDevelopers } from "../refine-theme/landing-trusted-by-developers";
import { LandingPackages } from "../refine-theme/landing-packages";
import { LandingSweetSpot } from "../refine-theme/landing-sweet-spot";
import { LandingHeroSection } from "../refine-theme/landing-hero-section";
import { CommonHeader } from "../refine-theme/common-header";
import { LandingAiHeroSection } from "../refine-theme/landing-ai-hero-section";

function Home() {
  const title = "CasWAF | Enterprise Web Application Firewall";
  return (
    <>
      <Head>
        <html data-active-page="index" />
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:description" content="ModSecurity-compatible WAF powered by Casbin and Casdoor" />
      </Head>
      <CommonLayout description="Enterprise-grade Web Application Firewall with ModSecurity compatibility, powered by Casbin authorization and Casdoor authentication.">
        <div className={clsx()}>
          <CommonHeader />
          <div
            className={clsx(
              "flex flex-col",
              "gap-16 landing-sm:gap-20 landing-md:gap-28 landing-lg:gap-40",
              "w-full max-w-[592px] landing-sm:max-w-[656px] landing-md:max-w-[896px] landing-lg:max-w-[1200px]",
              "px-2 landing-sm:px-0",
              "pb-12 landing-sm:pb-16 landing-md:pb-20 landing-lg:pb-40",
              "mx-auto",
            )}
          >
            <div
              className={clsx("mt-0", "landing-sm:mt-8", "landing-lg:mt-20")}
            >
              <LandingAiHeroSection />
              <LandingHeroSection className={clsx("mt-8")} />
              <LandingTrustedByDevelopers
                className={clsx(
                  "mt-12",
                  "landing-sm:mt-20",
                  "landing-md:mt-28",
                  "landing-lg:mt-10",
                )}
              />
            </div>
            <LandingSweetSpot />
            <LandingPackages />
            <LandingCommunity />
          </div>
          <LandingFooter />
        </div>
      </CommonLayout>
    </>
  );
}

export default Home;
