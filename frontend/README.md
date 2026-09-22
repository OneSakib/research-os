# ResearchOS — Next.js UI Theme

A responsive frontend-only theme for a multi-agent AI research/report generator.

## Pages
- `/login` — authentication screen
- `/register` — registration screen
- `/dashboard` — research dashboard + token usage
- `/research/new` — research prompt + agent configuration
- `/reports/demo` — generated report view

## Run
```bash
npm install
npm run dev
```

This is intentionally frontend-only. Forms currently navigate to dashboard and research progress is mocked. Replace those handlers with your FastAPI/LangGraph APIs.

## Suggested API integration
- POST `/auth/login`
- POST `/auth/register`
- POST `/research`
- GET `/research/{id}`
- GET `/research/{id}/stream` (SSE)
- GET `/reports/{id}`
- GET `/usage`
- GET `/reports/{id}/pdf`
