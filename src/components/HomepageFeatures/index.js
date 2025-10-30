import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Translate, {translate} from "@docusaurus/Translate";
import {useColorMode} from "@docusaurus/theme-common";

const FeatureList = [
  {
    title: translate({
      message: "Enterprise-Grade Protection",
    }),
    path: "/img/model",
    icon: "🛡️",
    description: (
      <>
        <Translate>
          Deploy robust web application security in minutes. CasWAF provides comprehensive protection against OWASP Top 10 threats and sophisticated attack patterns.
        </Translate>
      </>
    ),
  },
  {
    title: translate({
      message: "Modern Architecture",
    }),
    path: "/img/storage",
    icon: "⚡",
    description: (
      <>
        <Translate>
          Built with a modern frontend-backend separation architecture. Features an intuitive web UI and handles high-concurrency workloads with ease.
        </Translate>
      </>
    ),
  },
  {
    title: translate({
      message: "Global & Accessible",
    }),
    path: "/img/language",
    icon: "🌍",
    description: (
      <>
        <Translate>CasWAF supports multiple languages through i18n, making it accessible to teams worldwide. Join</Translate> <a href="https://github.com/casbin/caswaf/" className={styles.featureLink}><Translate>our community</Translate></a> <Translate>to contribute translations</Translate>.
      </>
    ),
  },
];

function Feature({title, path, description, icon}) {
  const {colorMode} = useColorMode();
  return (
    <div className={clsx("col col--4")}>
      <div className={clsx("text--center", styles.featureCard)}>
        <div className={styles.featureIcon}>{icon}</div>
        <img src={colorMode === "light" ? path + ".png" : path + "-dark.png"} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3 className={styles.featureTitle}>{title}</h3>
        <p className={styles.featureDescription}>{description}</p>
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
