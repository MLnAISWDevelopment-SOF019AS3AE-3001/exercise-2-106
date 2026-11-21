# Comparison of Baseline and Modified RAG Answers

## Overview

This document compares the **baseline answer** (`baseline-answer.md`) and the **modified answer** (`modified-answer.md`) for the question:

> "What does residual sugar measure, and is it the same thing as the quality score?"

## Key Differences

* **Wording and phrasing:** After updating `CUSTOM_RAG_PROMPT` in `api/routers/rag.py`, the modified answer uses a more structured, concise explanation distinguishing residual sugar (laboratory measurement of sugar remaining after fermentation in grams per litre) from the quality score (sensory score given by tasters rather than computed from laboratory variables).
* **Citation formatting and sources:** The modified answer includes explicit inline source references (`source: measurements, page 4`, `source: dataset, page 2`) alongside a trailing list of source tags (`[measurements, page 4]`, `[examples, page 3]`, `[examples, page 1]`, `[dataset, page 2]`), making it easier to trace each claim back to the retrieved corpus documents.