import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Translate, {translate} from "@docusaurus/Translate";

const FeatureList = [
  {
    title: translate({
      message: "Deploy in Minutes",
    }),
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    description: (
      <>
        <Translate>
          Quick setup with Docker or Kubernetes. Start protecting your applications in under 10 minutes with our comprehensive documentation.
        </Translate>
      </>
    ),
  },
  {
    title: translate({
      message: "High Performance",
    }),
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    description: (
      <>
        <Translate>
          Built for scale with low latency and high throughput. Handles millions of requests per day without compromising security.
        </Translate>
      </>
    ),
  },
  {
    title: translate({
      message: "Open Source",
    }),
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    ),
    description: (
      <>
        <Translate>Community-driven development with transparent security practices. Audit the code, contribute features, and customize for your needs.</Translate>
      </>
    ),
  },
];

function Feature({title, description, icon}) {
  return (
    <div className={clsx("col col--4")}>
      <div className={styles.featureCard}>
        <div className={styles.featureIcon}>{icon}</div>
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
