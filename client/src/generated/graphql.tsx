import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any;
};

export type Author = Node & {
  __typename?: 'Author';
  id: Scalars['Int'];
  name: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads and enables pagination through a set of `Post`. */
  postsByAuthorId: PostsConnection;
};


export type AuthorPostsByAuthorIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PostCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PostsOrderBy>>;
};

/** A condition to be used against `Author` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type AuthorCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
};

/** An input for mutations affecting `Author` */
export type AuthorInput = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Represents an update to a `Author`. Fields that are set will be updated. */
export type AuthorPatch = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `Author` values. */
export type AuthorsConnection = {
  __typename?: 'AuthorsConnection';
  /** A list of edges which contains the `Author` and cursor to aid in pagination. */
  edges: Array<AuthorsEdge>;
  /** A list of `Author` objects. */
  nodes: Array<Maybe<Author>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Author` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Author` edge in the connection. */
export type AuthorsEdge = {
  __typename?: 'AuthorsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Author` at the end of the edge. */
  node?: Maybe<Author>;
};

/** Methods to use when ordering `Author`. */
export enum AuthorsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** All input for the create `Author` mutation. */
export type CreateAuthorInput = {
  /** The `Author` to be created by this mutation. */
  author: AuthorInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** The output of our create `Author` mutation. */
export type CreateAuthorPayload = {
  __typename?: 'CreateAuthorPayload';
  /** The `Author` that was created by this mutation. */
  author?: Maybe<Author>;
  /** An edge for our `Author`. May be used by Relay 1. */
  authorEdge?: Maybe<AuthorsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Author` mutation. */
export type CreateAuthorPayloadAuthorEdgeArgs = {
  orderBy?: InputMaybe<Array<AuthorsOrderBy>>;
};

/** All input for the create `Post` mutation. */
export type CreatePostInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Post` to be created by this mutation. */
  post: PostInput;
};

/** The output of our create `Post` mutation. */
export type CreatePostPayload = {
  __typename?: 'CreatePostPayload';
  /** Reads a single `Author` that is related to this `Post`. */
  authorByAuthorId?: Maybe<Author>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Post` that was created by this mutation. */
  post?: Maybe<Post>;
  /** An edge for our `Post`. May be used by Relay 1. */
  postEdge?: Maybe<PostsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Post` mutation. */
export type CreatePostPayloadPostEdgeArgs = {
  orderBy?: InputMaybe<Array<PostsOrderBy>>;
};

/** All input for the `deleteAuthorById` mutation. */
export type DeleteAuthorByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** All input for the `deleteAuthor` mutation. */
export type DeleteAuthorInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Author` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Author` mutation. */
export type DeleteAuthorPayload = {
  __typename?: 'DeleteAuthorPayload';
  /** The `Author` that was deleted by this mutation. */
  author?: Maybe<Author>;
  /** An edge for our `Author`. May be used by Relay 1. */
  authorEdge?: Maybe<AuthorsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedAuthorId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Author` mutation. */
export type DeleteAuthorPayloadAuthorEdgeArgs = {
  orderBy?: InputMaybe<Array<AuthorsOrderBy>>;
};

/** All input for the `deletePostById` mutation. */
export type DeletePostByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** All input for the `deletePost` mutation. */
export type DeletePostInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Post` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Post` mutation. */
export type DeletePostPayload = {
  __typename?: 'DeletePostPayload';
  /** Reads a single `Author` that is related to this `Post`. */
  authorByAuthorId?: Maybe<Author>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedPostId?: Maybe<Scalars['ID']>;
  /** The `Post` that was deleted by this mutation. */
  post?: Maybe<Post>;
  /** An edge for our `Post`. May be used by Relay 1. */
  postEdge?: Maybe<PostsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Post` mutation. */
export type DeletePostPayloadPostEdgeArgs = {
  orderBy?: InputMaybe<Array<PostsOrderBy>>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `Author`. */
  createAuthor?: Maybe<CreateAuthorPayload>;
  /** Creates a single `Post`. */
  createPost?: Maybe<CreatePostPayload>;
  /** Deletes a single `Author` using its globally unique id. */
  deleteAuthor?: Maybe<DeleteAuthorPayload>;
  /** Deletes a single `Author` using a unique key. */
  deleteAuthorById?: Maybe<DeleteAuthorPayload>;
  /** Deletes a single `Post` using its globally unique id. */
  deletePost?: Maybe<DeletePostPayload>;
  /** Deletes a single `Post` using a unique key. */
  deletePostById?: Maybe<DeletePostPayload>;
  /** Updates a single `Author` using its globally unique id and a patch. */
  updateAuthor?: Maybe<UpdateAuthorPayload>;
  /** Updates a single `Author` using a unique key and a patch. */
  updateAuthorById?: Maybe<UpdateAuthorPayload>;
  /** Updates a single `Post` using its globally unique id and a patch. */
  updatePost?: Maybe<UpdatePostPayload>;
  /** Updates a single `Post` using a unique key and a patch. */
  updatePostById?: Maybe<UpdatePostPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateAuthorArgs = {
  input: CreateAuthorInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreatePostArgs = {
  input: CreatePostInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAuthorArgs = {
  input: DeleteAuthorInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAuthorByIdArgs = {
  input: DeleteAuthorByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePostArgs = {
  input: DeletePostInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePostByIdArgs = {
  input: DeletePostByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAuthorArgs = {
  input: UpdateAuthorInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAuthorByIdArgs = {
  input: UpdateAuthorByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePostArgs = {
  input: UpdatePostInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePostByIdArgs = {
  input: UpdatePostByIdInput;
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>;
};

export type Post = Node & {
  __typename?: 'Post';
  /** Reads a single `Author` that is related to this `Post`. */
  authorByAuthorId?: Maybe<Author>;
  authorId: Scalars['Int'];
  body: Scalars['String'];
  id: Scalars['Int'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  title: Scalars['String'];
};

/** A condition to be used against `Post` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type PostCondition = {
  /** Checks for equality with the object’s `authorId` field. */
  authorId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `body` field. */
  body?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `title` field. */
  title?: InputMaybe<Scalars['String']>;
};

/** An input for mutations affecting `Post` */
export type PostInput = {
  authorId: Scalars['Int'];
  body?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

/** Represents an update to a `Post`. Fields that are set will be updated. */
export type PostPatch = {
  authorId?: InputMaybe<Scalars['Int']>;
  body?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `Post` values. */
export type PostsConnection = {
  __typename?: 'PostsConnection';
  /** A list of edges which contains the `Post` and cursor to aid in pagination. */
  edges: Array<PostsEdge>;
  /** A list of `Post` objects. */
  nodes: Array<Maybe<Post>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Post` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Post` edge in the connection. */
export type PostsEdge = {
  __typename?: 'PostsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Post` at the end of the edge. */
  node?: Maybe<Post>;
};

/** Methods to use when ordering `Post`. */
export enum PostsOrderBy {
  AuthorIdAsc = 'AUTHOR_ID_ASC',
  AuthorIdDesc = 'AUTHOR_ID_DESC',
  BodyAsc = 'BODY_ASC',
  BodyDesc = 'BODY_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query';
  /** Reads and enables pagination through a set of `Author`. */
  allAuthors?: Maybe<AuthorsConnection>;
  /** Reads and enables pagination through a set of `Post`. */
  allPosts?: Maybe<PostsConnection>;
  /** Reads a single `Author` using its globally unique `ID`. */
  author?: Maybe<Author>;
  authorById?: Maybe<Author>;
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID'];
  /** Reads a single `Post` using its globally unique `ID`. */
  post?: Maybe<Post>;
  postById?: Maybe<Post>;
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllAuthorsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<AuthorCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AuthorsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllPostsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PostCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PostsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAuthorArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAuthorByIdArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPostArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPostByIdArgs = {
  id: Scalars['Int'];
};

/** All input for the `updateAuthorById` mutation. */
export type UpdateAuthorByIdInput = {
  /** An object where the defined keys will be set on the `Author` being updated. */
  authorPatch: AuthorPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** All input for the `updateAuthor` mutation. */
export type UpdateAuthorInput = {
  /** An object where the defined keys will be set on the `Author` being updated. */
  authorPatch: AuthorPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Author` to be updated. */
  nodeId: Scalars['ID'];
};

/** The output of our update `Author` mutation. */
export type UpdateAuthorPayload = {
  __typename?: 'UpdateAuthorPayload';
  /** The `Author` that was updated by this mutation. */
  author?: Maybe<Author>;
  /** An edge for our `Author`. May be used by Relay 1. */
  authorEdge?: Maybe<AuthorsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Author` mutation. */
export type UpdateAuthorPayloadAuthorEdgeArgs = {
  orderBy?: InputMaybe<Array<AuthorsOrderBy>>;
};

/** All input for the `updatePostById` mutation. */
export type UpdatePostByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object where the defined keys will be set on the `Post` being updated. */
  postPatch: PostPatch;
};

/** All input for the `updatePost` mutation. */
export type UpdatePostInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Post` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Post` being updated. */
  postPatch: PostPatch;
};

/** The output of our update `Post` mutation. */
export type UpdatePostPayload = {
  __typename?: 'UpdatePostPayload';
  /** Reads a single `Author` that is related to this `Post`. */
  authorByAuthorId?: Maybe<Author>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Post` that was updated by this mutation. */
  post?: Maybe<Post>;
  /** An edge for our `Post`. May be used by Relay 1. */
  postEdge?: Maybe<PostsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Post` mutation. */
export type UpdatePostPayloadPostEdgeArgs = {
  orderBy?: InputMaybe<Array<PostsOrderBy>>;
};

export type GetPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPostsQuery = { __typename?: 'Query', allPosts?: { __typename?: 'PostsConnection', nodes: Array<{ __typename?: 'Post', id: number, title: string } | null> } | null };


export const GetPostsDocument = gql`
    query getPosts {
  allPosts {
    nodes {
      id
      title
    }
  }
}
    `;

/**
 * __useGetPostsQuery__
 *
 * To run a query within a React component, call `useGetPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPostsQuery(baseOptions?: Apollo.QueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options);
      }
export function useGetPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options);
        }
export type GetPostsQueryHookResult = ReturnType<typeof useGetPostsQuery>;
export type GetPostsLazyQueryHookResult = ReturnType<typeof useGetPostsLazyQuery>;
export type GetPostsQueryResult = Apollo.QueryResult<GetPostsQuery, GetPostsQueryVariables>;