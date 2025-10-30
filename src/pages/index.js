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
    <header className={styles.heroBanner}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              <Translate>Enterprise Web Application Firewall</Translate>
            </h1>
            <p className={styles.heroSubtitle}>
              <Translate>
                Protect your applications with advanced security. ModSecurity-compatible, powered by Casbin authorization and Casdoor authentication.
              </Translate>
            </p>
            <div className={styles.buttons}>
              <Link
                className={clsx("button button--primary button--lg", styles.ctaButton)}
                to="/docs/overview">
                <Translate>Get Started</Translate>
              </Link>
              <Link
                className={clsx("button button--outline button--lg", styles.secondaryButton)}
                to="https://github.com/casbin/caswaf">
                <Translate>View on GitHub</Translate>
              </Link>
            </div>
          </div>
          <div className={styles.heroStats}>
            <div className={styles.statItem}>
              <div className={styles.statValue}>100K+</div>
              <div className={styles.statLabel}><Translate>Requests Protected Daily</Translate></div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>99.9%</div>
              <div className={styles.statLabel}><Translate>Uptime Guarantee</Translate></div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>50+</div>
              <div className={styles.statLabel}><Translate>Enterprise Customers</Translate></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function Showcase() {
  return (
    <div className={styles.showcase}>
      <div className="container">
        <div className={styles.showcaseHeader}>
          <h2 className={styles.showcaseTitle}>
            <Translate>Trusted by Organizations Worldwide</Translate>
          </h2>
          <p className={styles.showcaseDescription}>
            <Translate>
              From Fortune 500 companies to innovative startups, organizations rely on CasWAF to protect their critical applications.
            </Translate>
          </p>
        </div>
        <UserList />
      </div>
    </div>
  );
}

function KeyBenefits() {
  return (
    <section className={styles.benefitsSection}>
      <div className="container">
        <div className={styles.benefitsSectionHeader}>
          <h2><Translate>Why Choose CasWAF</Translate></h2>
          <p><Translate>Built for security teams who need reliable, scalable protection</Translate></p>
        </div>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3><Translate>Enterprise Security</Translate></h3>
            <p>
              <Translate>
                Comprehensive protection against OWASP Top 10 and zero-day threats with ModSecurity rule compatibility.
              </Translate>
            </p>
          </div>
          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <line x1="9" y1="9" x2="15" y2="15" />
                <line x1="15" y1="9" x2="9" y2="15" />
              </svg>
            </div>
            <h3><Translate>Flexible Authorization</Translate></h3>
            <p>
              <Translate>
                Fine-grained access control powered by Casbin with support for RBAC, ABAC, and custom policies.
              </Translate>
            </p>
          </div>
          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3><Translate>SSO & Authentication</Translate></h3>
            <p>
              <Translate>
                Seamless integration with Casdoor for OAuth, SAML, LDAP, and multi-factor authentication.
              </Translate>
            </p>
          </div>
          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <h3><Translate>Real-time Analytics</Translate></h3>
            <p>
              <Translate>
                Monitor attacks and traffic patterns with comprehensive dashboards and instant alerting.
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
