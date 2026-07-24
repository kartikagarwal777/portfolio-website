export const siteUrl = "https://kartik-agarwal.com";

export const contentSignal = "ai-train=no, search=yes, ai-input=yes";

export const discoveryLinkHeader = [
  '</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"',
  '</portfolio.md>; rel="alternate"; type="text/markdown"; title="Kartik Agarwal portfolio in Markdown"',
  '</.well-known/agent-skills/index.json>; rel="related"; type="application/json"; title="Agent Skills index"',
  '</Kartik_Agarwal.pdf>; rel="alternate"; type="application/pdf"; title="Kartik Agarwal resume"',
].join(", ");

export const portfolioMarkdown = `---
title: Kartik Agarwal | Alpha Quant Researcher
description: Kartik Agarwal is an alpha quant researcher specializing in systematic investing, macro signals, machine learning, portfolio construction, and research systems.
canonical: ${siteUrl}/
updated: 2026-07-24
---

# Kartik Agarwal

Alpha quant researcher and former engineering lead building research systems that turn economic intuition, data, and machine learning into scalable investment decisions.

## Professional summary

- Cross-asset research across foreign exchange, commodities, equities, and fixed income futures.
- Experience spanning alpha research, macro modelling, machine-learning signal design, portfolio construction, data pipelines, backtesting, transaction-cost modelling, performance attribution, and production monitoring.
- Produced 11 production-ready trading strategies in a $2B hedge-fund research context.
- Former software engineer and product lead who built Zoho ZeptoMail from inception to launch and led a cross-functional team of 12.

## Experience

### QMS Capital Management — Quant Researcher

July 2021 to October 2025, Durham, North Carolina.

- Directed cross-asset alpha research that resulted in 11 production-ready trading strategies.
- Built economic macro predictors using country fundamentals and alternative data.
- Researched machine-learning strategies using neural networks, XGBoost, affinity propagation, Kalman filters, and Lasso.
- Introduced Emerging Markets FX trading, including signal research, portfolio construction, regime modelling, and risk management.
- Designed a modular research and backtesting framework with data pipelines, transaction-cost modelling, performance attribution, and production monitoring.

### UCLA and Federal Reserve Bank of Philadelphia — Researcher

June 2020 to June 2021, Los Angeles, California.

- Applied natural-language processing to study the household effects of COVID-19 policies using state and local government documents.
- Analyzed how world events affected equity, debt, and real-estate trends.

### GIC — Quant Research

March 2020 to December 2020, San Francisco, California.

- Developed an NLP-driven U.S. equities strategy using 10-K filings to identify peer mispricings.

### WeInvest — Software Engineer

March 2019 to July 2019, Bangalore, India.

- Implemented and deployed a white-labelled robo-advisory platform for banks in Singapore and the Middle East.

### Zoho ManageEngine — Software Engineer and Product Lead

June 2017 to March 2019, Chennai, India.

- Built Zoho ZeptoMail from inception to launch; the product is now used by more than 2,500 organizations.
- Led a cross-functional team of 12 across development, design, testing, marketing, and content.

## Education

- Master of Financial Engineering, UCLA Anderson School of Management.
- Bachelor of Technology in Computer Science and Engineering, Vellore Institute of Technology.

## Technical expertise

- Programming and analytics: Python, Java, R, MATLAB, and SQL.
- Platforms and tools: Bloomberg Terminal, Kafka, Redis, Google Cloud Platform, and AWS.
- Domains: systematic trading, machine learning, quantitative analysis, statistical arbitrage, alpha research, risk management, financial engineering, and data-pipeline development.

## Selected project

### Automated Nifty Stocks Strategy

Researched, developed, and deployed a statistical-arbitrage strategy on the Nifty 50 and Nifty Next 50 using Google Cloud, with dynamic-universe backtesting to avoid survivorship bias. The reported result was a 3.52 Sharpe ratio on 10% daily turnover.

## Contact and authoritative profiles

- Website: ${siteUrl}/
- Email: kartikagarwal777@gmail.com
- Location: Raleigh, North Carolina, United States
- LinkedIn: https://www.linkedin.com/in/kartik-agarwal/
- Substack: https://kartikag.substack.com
- Resume: ${siteUrl}/Kartik_Agarwal.pdf

## Agent resources

- Public profile API: ${siteUrl}/api/portfolio
- OpenAPI description: ${siteUrl}/openapi.json
- API catalog: ${siteUrl}/.well-known/api-catalog
- Agent Skills index: ${siteUrl}/.well-known/agent-skills/index.json

The API and browser tools are read-only. The portfolio does not require authentication and does not expose an OAuth authorization server or an MCP server.
`;

export function markdownResponse(body = true) {
  return new Response(body ? portfolioMarkdown : null, {
    headers: {
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
      "Content-Language": "en-US",
      "Content-Signal": contentSignal,
      "Content-Type": "text/markdown; charset=utf-8",
      Link: discoveryLinkHeader,
      Vary: "Accept",
    },
  });
}
