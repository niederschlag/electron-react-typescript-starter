// Handles prod/dev config
const appConfig: any = (process.env.NODE_ENV === "production" ? require("./configureStore.production") : require("./configureStore.development"));
const history = appConfig.history;
const configureStore = appConfig.configureStore;
export {history, configureStore};