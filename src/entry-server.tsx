import {
  createHandler,
  renderAsync,
  StartServer,
} from "solid-start/entry-server";

export default createHandler(
  ({ forward }) => {
    return async event => {
      /*
      * This is middleware for the server-side rendering.
      */
      const request = event.request;
      console.log(`\x1b[36m%s\x1b[0m`, `REQ:`, `${request.url}`)
      return forward(event); // next
    };
  },
  renderAsync((event) => <StartServer event={event} />)
);
