import getConfig from "next/config";

export default (path) => {
    const { publicRuntimeConfig } = getConfig();

    let host;
    if (process.browser) {
        host = publicRuntimeConfig.APP_HOST;
    } else {
        host = publicRuntimeConfig.SERVER_HOST;
    }

    return `${host}${path}`;
};