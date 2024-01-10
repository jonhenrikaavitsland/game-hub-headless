export const host = "https://game-hub.aavitsland.no";

export const endpointProducts = "/wp-json/wc/store/products/";
export const endpointMedia = "/wp-json/wp/v2/media";
export const endpointReviews = "/wp-json/wc/v3/products/reviews";

export const pagination = "?page=1&per_page=100";

export const urlProducts = host + endpointProducts + pagination;
export const urlMedia = host + endpointMedia + pagination;
export const urlReviews = host + endpointReviews + pagination;

// Read only permission:
export const consumerKeyReviews = "ck_22255877ae3ef6c8218bf9f28064478ffa494112";
export const consumerSecretReviews =
  "cs_169ba22876acabcda14a0509c2592d98a514a0b6";
