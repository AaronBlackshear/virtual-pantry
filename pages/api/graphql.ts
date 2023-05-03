import { createContext } from '@/graphql/context';
import { schema } from '@/graphql/schema';
import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { createYoga } from 'graphql-yoga';
import type { NextApiRequest, NextApiResponse } from 'next';


export default withApiAuthRequired(createYoga<{
  req: NextApiRequest
  res: NextApiResponse
}>({
  schema: schema,
  context: createContext,
  graphqlEndpoint: '/api/graphql'
}));

export const config = {
  api: {
    bodyParser: false
  }
}
