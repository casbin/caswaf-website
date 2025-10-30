import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./index.module.scss";
import HomepageFeatures from "../components/HomepageFeatures";
// eslint-disable-next-line unused-imports/no-unused-imports
import Translate, {translate} from "@docusaurus/Translate";
import {UserList} from "@site/src/components/UserList";
import {useWindowSize} from "@docusaurus/theme-common";

function HomepageHeader() {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <h1 className={clsx("hero__title", styles.heroTitle)}>
            <Translate>Secure Your Web Applications</Translate>
          </h1>
          <p className={clsx("hero__subtitle", styles.heroSubtitle)}>
            <Translate>
              CasWAF is a powerful, enterprise-grade Web Application Firewall that protects your applications from modern threats. Built with ModSecurity compatibility and powered by Casbin and Casdoor.
            </Translate>
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx("button button--secondary button--lg", styles.ctaButton)}
              to="/docs/overview">
              <Translate>Get Started</Translate>
              <span className={styles.arrow}>→</span>
            </Link>
            <Link
              className={clsx("button button--outline button--lg", styles.secondaryButton)}
              to="https://github.com/casbin/caswaf">
              <Translate>View on GitHub</Translate>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.heroBackground}></div>
    </header>
  );
}

function Showcase() {
  return (
    <div className={clsx("hero text--center", styles.showcase)}>
      <div className="container">
        <h2 className={styles.showcaseTitle}>
          <Translate>Trusted by Industry Leaders</Translate>
        </h2>
        <p className={styles.showcaseDescription}>
          <Translate values={{
            UsersPage: (
              <Link to="/users" className={styles.showcaseLink}>
                <Translate>explore all use cases</Translate>
              </Link>
            ),
          }}>
            {"CasWAF protects hundreds of applications worldwide, from Fortune 500 companies to innovative startups. Want to see what's possible? {UsersPage}"}
          </Translate>
        </p>
        <UserList />
      </div>
    </div>
  );
}

function KeyBenefits() {
  return (
    <section className={styles.benefitsSection}>
      <div className="container">
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitItem}>
            <div className={styles.benefitNumber}>01</div>
            <h3><Translate>ModSecurity Compatible</Translate></h3>
            <p>
              <Translate>
                Seamlessly integrate with existing ModSecurity rules and configurations. Leverage the vast ecosystem of security rules while benefiting from modern architecture.
              </Translate>
            </p>
          </div>
          <div className={styles.benefitItem}>
            <div className={styles.benefitNumber}>02</div>
            <h3><Translate>Powered by Casbin</Translate></h3>
            <p>
              <Translate>
                Built on top of Casbin&apos;s robust authorization framework, ensuring fine-grained access control and flexible policy management for your security rules.
              </Translate>
            </p>
          </div>
          <div className={styles.benefitItem}>
            <div className={styles.benefitNumber}>03</div>
            <h3><Translate>Casdoor Integration</Translate></h3>
            <p>
              <Translate>
                Integrated with Casdoor for enterprise-grade authentication and user management. Secure your WAF management interface with SSO and multi-factor authentication.
              </Translate>
            </p>
          </div>
          <div className={styles.benefitItem}>
            <div className={styles.benefitNumber}>04</div>
            <h3><Translate>Real-time Monitoring</Translate></h3>
            <p>
              <Translate>
                Monitor threats in real-time with comprehensive dashboards and analytics. Get instant visibility into attack patterns and security events across your applications.
              </Translate>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function OpenCollective() {
  if (useWindowSize() === "mobile") {
    return (
      <iframe title="Sponsors" src="https://opencollective.com/casbin/banner.html" style={{width: "100%", height: "1100px", display: "block"}}></iframe>
    );
  } else {
    return (
      <iframe title="Sponsors" src="https://opencollective.com/casbin/banner.html" style={{width: "100%", height: "650px", display: "block"}}></iframe>
    );
  }
}

export default function Home() {
  return (
    <Layout
      title={"CasWAF"}
      description="Web Application Firewall (WAF), aligned with ModSecurity, powered by Casbin and Casdoor">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <KeyBenefits />
        <Showcase />
        {false && <OpenCollective />}
      </main>
    </Layout>
  );
}
