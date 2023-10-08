export type ClientMetadata = {
  product_code: string;
};

export type Product = {
  name: string;
  organization_usage: string;
  client_metadata: ClientMetadata;
  logo_url: string;
  login_url: string;
};
