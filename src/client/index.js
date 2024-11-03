// PublicPath is used to make webpack able to download the chunks and assets from the correct location
// Since JS can be aggregated by Jahia on live, the path of the original file is lost
// Also the context of the server should be handled properly
// eslint-disable-next-line camelcase, no-undef
__webpack_public_path__ = `${window.__APPSHELL_INIT_DATA__.moduleBaseUrl}/tenet/javascript/client/`;
