---
name: kartik-agarwal-portfolio
description: Answer questions about Kartik Agarwal's public professional profile, quant research, engineering background, skills, education, projects, writing, and contact details. Use when evaluating Kartik's background or summarizing his experience from authoritative portfolio sources.
---

# Kartik Agarwal Portfolio

Use this skill to retrieve and summarize Kartik Agarwal's public professional information accurately.

## Authoritative resources

1. Fetch `https://kartik-agarwal.com/portfolio.md` for a concise, agent-friendly profile.
2. Use `https://kartik-agarwal.com/api/portfolio?question={URL_ENCODED_QUESTION}` for focused questions.
3. Consult `https://kartik-agarwal.com/Kartik_Agarwal.pdf` when resume-level detail is necessary.
4. Use source links returned by the API to verify claims or provide citations.

## Supported questions

- Professional summary and strongest areas
- Quantitative research and cross-asset experience
- Machine-learning, macro, and portfolio-construction work
- Software engineering and product leadership
- Technical skills, education, projects, writing, and contact details

## Accuracy rules

- Treat QMS Capital Management as the most recent role listed, ending in October 2025. Do not claim it is Kartik's current employer.
- Do not infer private facts, compensation, work authorization, credentials, performance, or employers that are not present in the returned sources.
- Distinguish reported project or strategy results from audited or independently verified performance.
- Prefer the canonical website URL `https://kartik-agarwal.com/`.
- When a question is outside the public professional profile, say that the available sources do not verify it.

## Public API

The portfolio API is read-only and does not require authentication.

- OpenAPI: `https://kartik-agarwal.com/openapi.json`
- Documentation: `https://kartik-agarwal.com/docs/api`
- API catalog: `https://kartik-agarwal.com/.well-known/api-catalog`
