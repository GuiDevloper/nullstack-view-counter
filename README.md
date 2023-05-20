# nullstack-view-counter

Nullstack example of counting views and avoiding requests from non-user sources.

## Reasoning

Nullstack in production environment by default loads the page and activate a service-worker that loads again, making double-run at the first user visit (calling any initial [server function](https://nullstack.app/server-functions) too).

Also many bots (like VercelBot) requests the page, making more runs (and logs).

This example caches the root page `/`, and also checks the user-agent from requests, trying to count only real users visits.

- In **server.ts** all `get` requests are intercepted and cached for 3s (enough for worker) - Comment line 11 for the initial request double-run again.

## How to run this project

1. Install the dependencies: `npm install`

2. Rename the **.env.example** file to **.env**

3. Run the app in production mode:

```sh
npm run build && node .production/server.js
```

5. Open [http://localhost:3000](http://localhost:3000) in a anonymous/zero-cache tab.

6. Check the terminal and view.

## Learn more

[Read Nullstack documentation](https://nullstack.app/documentation)