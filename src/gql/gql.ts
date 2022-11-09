/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "fragment Profile_Person on Person {\n  id\n  name\n  gender\n}": types.Profile_PersonFragmentDoc,
    "query GetPeople {\n  allPeople {\n    edges {\n      node {\n        ...Profile_Person\n      }\n    }\n  }\n}": types.GetPeopleDocument,
};

export function graphql(source: "fragment Profile_Person on Person {\n  id\n  name\n  gender\n}"): (typeof documents)["fragment Profile_Person on Person {\n  id\n  name\n  gender\n}"];
export function graphql(source: "query GetPeople {\n  allPeople {\n    edges {\n      node {\n        ...Profile_Person\n      }\n    }\n  }\n}"): (typeof documents)["query GetPeople {\n  allPeople {\n    edges {\n      node {\n        ...Profile_Person\n      }\n    }\n  }\n}"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;