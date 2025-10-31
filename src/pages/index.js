import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./index.module.scss";
import HomepageFeatures from "../components/HomepageFeatures";
import Translate, {translate} from "@docusaurus/Translate";
import {UserList} from "@site/src/components/UserList";

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroTextContent}>
            <div className={styles.heroTopLine}>
              <span className={styles.badge}>
                <span className={styles.badgeDot}></span>
                <Translate>Open Source WAF</Translate>
              </span>
            </div>
            <h1 className={styles.heroTitle}>
              <Translate>Build</Translate>{" "}
              <span className={styles.gradientText}>
                <Translate>Enterprise-Grade</Translate>
              </span>{" "}
              <Translate>Web Application Security</Translate>
            </h1>
            <p className={styles.heroSubtitle}>
              <Translate>
                ModSecurity-compatible firewall with advanced authorization and authentication. Protect your applications from modern threats with unmatched flexibility.
              </Translate>
            </p>
            <div className={styles.heroButtons}>
              <Link
                className={clsx("button", styles.primaryButton)}
                to="/docs/overview">
                <Translate>Get Started</Translate>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                className={clsx("button", styles.secondaryButton)}
                to="https://github.com/casbin/caswaf">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.137 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z" />
                </svg>
                <Translate>Star on GitHub</Translate>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.heroGradientBg}></div>
    </header>
  );
}

function Showcase() {
  return (
    <section className={styles.showcase}>
      <div className="container">
        <div className={styles.showcaseContent}>
          <div className={styles.showcaseHeader}>
            <h2 className={styles.showcaseTitle}>
              <Translate>Trusted by</Translate>{" "}
              <span className={styles.gradientText}>
                <Translate>Industry Leaders</Translate>
              </span>
            </h2>
            <p className={styles.showcaseDescription}>
              <Translate>
                From Fortune 500 companies to innovative startups, organizations worldwide rely on CasWAF to secure their critical applications.
              </Translate>
            </p>
          </div>
          <UserList />
        </div>
      </div>
    </section>
  );
}

function KeyBenefits() {
  const benefits = [
    {
      title: translate({message: "ModSecurity Compatible"}),
      description: translate({
        message: "Seamlessly integrate with existing ModSecurity rules and configurations. Leverage the vast ecosystem while benefiting from modern architecture.",
      }),
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      title: translate({message: "Powered by Casbin"}),
      description: translate({
        message: "Built on Casbin's robust authorization framework with fine-grained access control and flexible policy management.",
      }),
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
    },
    {
      title: translate({message: "Casdoor Authentication"}),
      description: translate({
        message: "Enterprise-grade authentication with SSO, OAuth, SAML, LDAP, and multi-factor authentication support.",
      }),
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: translate({message: "Real-time Monitoring"}),
      description: translate({
        message: "Monitor attacks and traffic patterns with comprehensive dashboards, analytics, and instant alerting.",
      }),
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
    },
  ];

  return (
    <section className={styles.benefitsSection}>
      <div className="container">
        <div className={styles.benefitsHeader}>
          <h2 className={styles.benefitsTitle}>
            <Translate>Why Choose</Translate>{" "}
            <span className={styles.gradientText}>CasWAF</span>
          </h2>
          <p className={styles.benefitsDescription}>
            <Translate>
              Everything you need to build secure, scalable web applications
            </Translate>
          </p>
        </div>
        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, idx) => (
            <div key={idx} className={styles.benefitCard}>
              <div className={styles.benefitIcon}>{benefit.icon}</div>
              <h3 className={styles.benefitTitle}>{benefit.title}</h3>
              <p className={styles.benefitDescription}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title={"CasWAF"}
      description="Enterprise-grade Web Application Firewall with ModSecurity compatibility">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <KeyBenefits />
        <Showcase />
      </main>
    </Layout>
  );
}
