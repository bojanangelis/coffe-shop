import { createClient, fetchExchange, SSRData, ssrExchange, TypedDocumentNode } from 'urql';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { DocumentNode } from 'graphql';
import { isAuthError } from './shared';
import { webEnv } from '../environments/environment';

type SsrResult = GetServerSidePropsResult<{ urqlState?: SSRData }>;
type SsrQuery<D, V> = DocumentNode | TypedDocumentNode<D, V> | string;
type SsrContext = GetServerSidePropsContext;

const { api } = webEnv;

export async function serverQuery<
  QueryResult = { [key: string]: unknown },
  Variables = { [key: string]: unknown }
>(
  query: SsrQuery<QueryResult, Variables>,
  variables?: Variables,
  context?: SsrContext
): Promise<SsrResult> {
  const ssrCache = ssrExchange({ isClient: false });
  const cookie = context?.req.headers.cookie;
  const serverClient = createClient({
    url: api.gqlUrl,
    fetchOptions: { headers: { cookie } as { cookie: string } },
    exchanges: [ssrCache, fetchExchange]
  });

  try {
    const { error } = await serverClient
      // eslint-disable-next-line unicorn/prefer-top-level-await
      .query<SsrQuery<QueryResult, Variables>, Variables>(query, variables)
      .toPromise();

    if (!error) return { props: { urqlState: ssrCache.extractData() } };

    if (isAuthError(error)) {
      context?.res.setHeader('set-cookie', ['token=']);
      context?.res.setHeader('set-cookie', ['token-expires=']);
      return { redirect: { permanent: false, destination: '/login' } };
    }
  } catch (error) {
    console.log('server side query unexpected error', error);
  }

  return { redirect: { permanent: false, destination: '/error' } };
}
