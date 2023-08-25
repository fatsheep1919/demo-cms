import { GraphQLClient } from 'graphql-request';
import { getSdk } from '../generated';

const endpoint = process.env.CMS_GRAPHQL_ENDPOINT

const cmsClient = () =>
  getSdk(
    new GraphQLClient(endpoint as string, {
      headers: {
        Authorization: `Bearer ${process.env.CMS_ACCESS_TOKEN}`
      }
    })
  )

export default cmsClient