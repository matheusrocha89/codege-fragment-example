import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: ["https://swapi-graphql.netlify.app/.netlify/functions/index"],
  ignoreNoDocuments: true,
  documents: "src/**/*.gql",
  overwrite: true,
  generates: {
    "src/graphql.types.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
    "src/gql/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
