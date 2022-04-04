// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  AWS_VIDEO_URL: 'https://newoott.s3.ap-southeast-1.amazonaws.com/video/',
  AWS_THUMB_URL: 'https://newoott.s3.ap-southeast-1.amazonaws.com/thumb/',
  AWS_POSTER_URL: 'https://newoott.s3.ap-southeast-1.amazonaws.com/poster/',
  AWS_BLOG_URL: 'https://newouploads.s3.ap-southeast-1.amazonaws.com/blog/',
  laravel_api_url: 'https://newocoin.app/newoadmin/api/',
  custom_api_url: 'https://newocoin.app/php'
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
