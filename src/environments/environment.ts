// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  appUrl: 'https://newoapp.app/',
  
  AWS_VIDEO_URL: 'https://newoott.s3.ap-southeast-1.amazonaws.com/video/',
  AWS_OTT_VIDEO_URL: 'https://d3364iafsj330v.cloudfront.net/newoott/video/',

  AWS_THUMB_URL: 'https://newoott.s3.ap-southeast-1.amazonaws.com/thumb/',
  AWS_OTT_THUMB_URL: 'https://d3364iafsj330v.cloudfront.net/newoott/thumb/',

  AWS_POSTER_URL: 'https://newoott.s3.ap-southeast-1.amazonaws.com/poster/',
  AWS_OTT_POSTER_URL: 'https://d3364iafsj330v.cloudfront.net/newoott/poster/',

  AWS_BLOG_URL: 'https://newouploads.s3.ap-southeast-1.amazonaws.com/blog/',
  AWS_BLOG_AUTHOR_URL: 'https://newouploads.s3.ap-southeast-1.amazonaws.com/blog_author/',
  AWS_GAME_URL:'https://newouploads.s3.ap-southeast-1.amazonaws.com/game/',

  laravel_api_url: 'https://newoapp.app/newoadmin/api/',
  baseUrl: 'https://newoapp.app/php',
  gameUrl: 'https://newoapp.app/Game/game/',
  spinUrl: 'https://newoapp.app/SPIN/?',

  multiplex_poster_url:'https://creator-multiplex.s3.ap-southeast-1.amazonaws.com/media_image/',
  multiplex_video_url:'https://creator-multiplex.s3.ap-southeast-1.amazonaws.com/media_file/',
  hashtag_campaign:'https://newouploads.s3.ap-southeast-1.amazonaws.com/hashtag_campaign/',
  hashtag_campaign_social:'https://www.newoapp.app/assets/images/hashtag_social/',
  hashtag_category:'https://newouploads.s3.ap-southeast-1.amazonaws.com/hashtag_category/',


  dev_video_url: 'https://d3364iafsj330v.cloudfront.net/newouploads/uploads/dev.mp4',
  johnty_video_url: 'https://d3364iafsj330v.cloudfront.net/newouploads/uploads/johnty-rodes.mp4',
  lara_video_url: 'https://d3364iafsj330v.cloudfront.net/newouploads/uploads/lara-dutta.mp4',
  sunil_video_url: 'https://d3364iafsj330v.cloudfront.net/newouploads/uploads/sunil-grover.mp4',


};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
