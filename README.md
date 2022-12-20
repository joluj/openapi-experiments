# Openapi

The server created an OpenApi-Spec `./dist/openapi/demo-server.json`. Each client can consume it to generate data from it.

```mermaid
flowchart

subgraph S [Server]
  s[demo-server]
end

subgraph D [Configuration]
  d>demo-server.json]
end

subgraph C2 [Client 2]
  c2[showcase-react]
  c2wip[WIP]
  style c2wip fill:transparent,stroke-dasharray: 0,stroke: gray
end

subgraph C [Client]
  c[showcase-ng]
end

s -- nx run demo-server:openapi:generate --> D

C -- nx run showcase-ng:openapi --> D -.-> C

C2 -- nx run showcase-react:openapi --> D -.-> C2

```
