# _The New Yorker_ Technical Test

## INSTALLING

- Install the dependencies by running `npm i` inside the root folder and also inside server
- Alternatively you can run the `install.sh` or `install.bat` depending on your operating system

- The server requires an `API_KEY` and a `PORT` to be passed to it. You can create a `.env` file inside `server` folder.

```
API_KEY="9c7c499aba094ce0a16cf2349de9d26c"
PORT=8888
```

- The client requires a `BASE_URL` to be passed to it. You can create a `.env` file in the root folder. The port here much match the server's.

```
BASE_URL="http://localhost:8888/"
```

### Availble commands

```

  npm run test - Runs test for the frontend
  npm run test-server - Runs test for the server
  npm run test-all - Runs test for the server and frontend
  npm start - Starts the frontend app
  npm run start-server - Starts the server
  npm run start-all - Starts the frontend app and the server
  npm run build-server - Builds the server app - built files in "server/dist/"
  npm run build - Builds the frontend app - built files in "public"
  npm run build-all - Builds the frontend app and the server

```
Alternatively you can run `npm run` on the root directory to see all the available commands

Feel free to reach out incase of any problems at `zeeshan.ali33096@gmail.com`