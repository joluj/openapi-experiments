# Openapi Experiments

This repo contains some snippets to generate and consume OpenApi Specifications.

The server uses classes from the external definition from `petstore.yml` to specify its own types.

Information about the realization is in the [Server Readme](./apps/demo-server/README.md) and [Client Readme](./apps/showcase-ng/README.md).

## Workflow

The server created an OpenApi-Spec `./dist/openapi/demo-server.json`. Each client can consume it to generate data from it.

```mermaid
flowchart

subgraph S [Server]
  s[demo-server]
end

subgraph D [Configuration]
  d>demo-server.json]
end

subgraph D_external [External Configuration]
  d_external>petstore.yml]
end

subgraph C2 [Client 2]
  c2[showcase-react]
  c2wip[WIP]
  style c2wip fill:transparent,stroke-dasharray: 0,stroke: gray
end

subgraph C [Client]
  c[showcase-ng]
end

S -- nx run demo-server:openapi:load --> D_external -.-> S

S -- nx run demo-server:openapi:generate --> D

C -- nx run showcase-ng:openapi --> D -.-> C

C2 -- nx run showcase-react:openapi --> D -.-> C2

```

## Try it out

```shell
# Load OpenApi definitions for demo-server
nx run demo-server:openapi:load
# Create OpenApi definitions that can be reused by others
nx run demo-server:openapi:generate
# Load OpenApi definitions for showcase app
nx run showcase-ng:openapi

# Run Server
nx run demo-server:serve
# Run Frontend
nx run showcase-ng:serve
```
