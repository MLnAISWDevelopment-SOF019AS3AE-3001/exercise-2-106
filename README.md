# Wine quality study assistant

Course copy of the GAIK demo, reduced to conversational RAG. The full demo in `toolkit_demo_app` is unchanged.

The assistant answers questions from the Markdown notes in `api/corpus/`. Those notes describe the wine-quality measurements used in Exercise 1, including residual sugar and the sensory quality score. The chat cites a note. It does not estimate a quality score.

Models, both pinned in `api/routers/rag.py`:

- Chat: `google/gemma-4-31b-it`
- Embeddings: `lightonai/modernbert-embed-large`
- API: `https://aitta-api.csc.fi/openai/v1`

## Run locally

Put the class API token in `.env.local` (see `.env.example`). This term the cloud vendor AI API service is CSC Aitta. From this directory:

```bash
bun install
bun run dev:all
```

The site is on port 3000. The API is on port 8000 and is proxied at `/api`. Open the site, enter `COURSE_PASSWORD`, then open `/rag`. `/api/health` stays open. The chat does not.

The first question can wait while the cloud vendor AI API service loads the chat model. `/api/health` only means the API process is up.

## Deploy

See [openshift/README.md](openshift/README.md). Apply those manifests in your own Rahti project. Do not use the `gaik` project or `gaik-demo.2.rahtiapp.fi`.

## What students change

After a baseline answer is saved, add the required paragraph from the exercise page to `CUSTOM_RAG_PROMPT` in `api/routers/rag.py`. Leave both model ids as they are.
