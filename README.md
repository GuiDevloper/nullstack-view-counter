# nullstack-view-counter

Nullstack example of counting views and avoiding requests from non-user sources.

## Reasoning

Nullstack in production environment by default loads the page and activate a service-worker that loads again, making double-run at the first user visit (calling any initial [server function](https://nullstack.app/server-functions) too).

Also many bots (like VercelBot) requests the page, making more runs (and logs).

This example caches the root page `/`, and also checks the user-agent from requests, trying to count only real users visits.

- In **server.ts** all `get` requests are intercepted and cached for 3s (enough for worker) - Comment line 11 for the initial request double-run again.

- In **src/ViewCount.tsx** the logic happens. A server variable stores the count - Without the above caching, the initial goes wrong, pressing `Sync with server` shows how the server got hit twice.

- In **src/utils.ts** there's a method to check if the user agent isn't among known bots, blocking the server count for them.

## How to run this project

1. Install the dependencies: `npm install`

2. Rename the **.env.example** file to **.env**

3. Run the app in production mode:

```sh
npm run build && node .production/server.js
```

5. Open [http://localhost:3000](http://localhost:3000) in a anonymous/zero-cache tab.

6. Check the terminal and view.

> :bulb: Vercel Serverless instances does have a temporary state being a good environment to test this behavior in production and storing logs.

## Learn more

[Read Nullstack documentation](https://nullstack.app/documentation)