## Stack
- NextJs
- Graphql
- Contentful


## Get Started
```
yarn install
yarn gql-codegen
yarn dev
```


## Pages
+ home page: http://localhost:3000/home
+ blog list: http://localhost:3000/blog/list
+ blog detail: http://localhost:3000/blog/BLOG_ID


## Things To Note
In order to make use of graphql and typescript to get the data from [Contentful](https://www.contentful.com/), pre-generation process is imported.

By executing the command of ``yarn gql-codegen``, 2 files will be generated under the directory of src:

**generated.ts** and **graphql.schema.json**


In generated.ts, queries defined in the file of src/apollo/query/query.gql will be converted to functions,

with graphql-request wrapped under the hood to send the real requests.

In graphql.schema.json, the types for the graphql schema and operations of [Contentful](https://www.contentful.com/) will be generated,

and be used when the graphql apis work.



