import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Translate, {translate} from "@docusaurus/Translate";
import {useColorMode} from "@docusaurus/theme-common";

const FeatureList = [
  {
    title: translate({
      message: "Easy to Use",
    }),
    path: "/img/model",
    description: (
      <>
        <Translate>
          Within a few steps, we can setup a CasWAF app and protect our websites.
        </Translate>
      </>
    ),
  },
  {
    title: translate({
      message: "Frontend Backend Separation",
    }),
    path: "/img/storage",
    description: (
      <>
        <Translate>
          CasWAF has a front-end back-end separation architecture, with maneuverable web UI and supporting high concurrency.
        </Translate>
      </>
    ),
  },
  {
    title: translate({
      message: "Supporting Multi-Language",
    }),
    path: "/img/language",
    description: (
      <>
        <Translate> CasWAF is supporting multi-languages, using i18n to support multi-languages UI. For more languages support, welcome to propose in</Translate> <a href="https://github.com/casbin/caswaf/"><Translate> our community</Translate></a>.
      </>
    ),
  },
];

function Feature({title, path, description}) {
  const {colorMode} = useColorMode();
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={colorMode === "light" ? path + ".png" : path + "-dark.png"} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
