// Handles prod/dev config
const appConfig: any = (process.env.NODE_ENV === "production" ? import("./configureStore.production") : import("./configureStore.development"));
const history = appConfig.history;
const configureStore = appConfig.history;
export {history, configureStore};