# Demo Server

This is an example configuration for a simple demo server with generated types.

## Setup

Create models with `nx run demo-server:openapi`.

<u>Explanation</u>:
```shell
# clear types dir
rimraf apps/demo-server/src/app/types
# run generator
# - input: petstore.yaml from the openapi webseite
# - generator: typescript
# - output: output directory /types
# - "--global-property models": Generate only models. See https://openapi-generator.tech/docs/customization/
openapi-generator-cli generate -i petstore.yaml -g typescript -o apps/demo-server/src/app/types --global-property models
# Fix linter errors there
eslint apps/demo-server/src/app/types --fix
```

<u>Why fix linter errors?</u>:
The generator tries to import `import { HttpFile } from '../http/http';`, but this file does not exist. We can solve this by either creating a dummy file or remove the unused import by fixing all eslint problems. All existing eslint problems like "Unexpected empty constructor" must be disabled for this directory.
