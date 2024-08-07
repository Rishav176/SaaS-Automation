// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
// const isPublicRoute= createRouteMatcher(['/','api/clerk-webhook','/api/drive-activity/notification','/api/payment/success','/api/auth/callback/discord','/api/auth/callback/notion','/api/auth/callback/slack','/api/flow','/api/cron/wait'])
// export default clerkMiddleware((auth,req) =>{
//     if(!isPublicRoute(req)) {
//       auth().protect();
//   }
// });

// export const config = {
//   matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)',],
// };
// '/api/auth/callback/discord','/api/auth/callback/notion','/api/auth/callback/slack','/api/flow','/api/cron/wait',
import { authMiddleware } from '@clerk/nextjs/server'

export default authMiddleware({
  publicRoutes: [
    '/',
    '/api/clerk-webhook',
    '/api/drive-activity/notification',
    '/api/payment/success',
  ],
  ignoredRoutes: [
    '/api/auth/callback/discord',
    '/api/auth/callback/notion',
    '/api/auth/callback/slack',
    '/api/flow',
    '/api/cron/wait',
  ],
})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}