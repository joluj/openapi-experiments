# Demo Server

This is an example configuration for a simple demo server with generated types.

## Load OpenApi Models

You can load an existing OpenApi model with `nx run demo-server:openapi:load`. This can be downloaded [here](https://raw.githubusercontent.com/openapitools/openapi-generator/master/modules/openapi-generator/src/test/resources/3_0/petstore.yaml). Only models are generated.

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

## Create OpenApi Models

You can create an OpenApi definition for this server by running `nx run demo-server:openapi:generate`. The setup also supports watch mode (i.e. always build models when the server configuration changes) with `nx run demo-server:serve:openapi`.
