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
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    description: (
      <>
        <Translate>
          Quick setup with Docker or Kubernetes. Start protecting your applications in under 10 minutes with comprehensive documentation and examples.
        </Translate>
      </>
    ),
  },
  {
    title: translate({
      message: "High Performance",
    }),
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    description: (
      <>
        <Translate>
          Built for scale with low latency and high throughput. Handles millions of requests per day without compromising on security or performance.
        </Translate>
      </>
    ),
  },
  {
    title: translate({
      message: "Developer Friendly",
    }),
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    description: (
      <>
        <Translate>
          Modern API, extensive documentation, and active community support. Integrate seamlessly with your existing infrastructure and workflows.
        </Translate>
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
