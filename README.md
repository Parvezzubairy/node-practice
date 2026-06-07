"# node-practice" 

```markdown
### 🏗️ Architecture Flow

```text
       ┌───────────────┐
       │     Route     │  ──> Handles incoming HTTP requests & URL parsing
       └───────────────┘
               │
               ▼
       ┌───────────────┐
       │  Controller   │  ──> Validates input data payloads & handles HTTP responses
       └───────────────┘
               │
               ▼
       ┌───────────────┐
       │    Service    │  ──> Contains core business logic & rules computation
       └───────────────┘
               │
               ▼
       ┌───────────────┐
       │  Repository   │  ──> Manages direct data layer abstraction (Queries/ORMs)
       └───────────────┘
               │
               ▼
       ┌───────────────┐
       │   Database    │  ──> Persistent storage layer (MySQL Engine)
       └───────────────┘