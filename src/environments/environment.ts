// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
    // API_ENDPOINT : 'http://www.eanet-latam.com:8087/api/v1',
    API_ENDPOINT : 'http://localhost:8082/api/v1',
    API_ROOT_URL_ADMIN : 'g-data.motriz/users-admin/',
     API_ROOT_URL_ADMIN2 : 'g-data.motriz/users-admin/'
};
