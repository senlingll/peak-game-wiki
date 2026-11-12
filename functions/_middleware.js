import { isGonePath } from '../scripts/route-policy.mjs';

export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (isGonePath(url.pathname)) {
    return new Response('Gone', {
      status: 410,
      headers: {
        'cache-control': 'public, max-age=3600',
        'content-type': 'text/plain; charset=utf-8',
      },
    });
  }
  return context.next();
}
