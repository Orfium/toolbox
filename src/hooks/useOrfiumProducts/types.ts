export type ClientMetadata = {
  product_code: string;
};

export type Product = {
  client_id: string;
  client_metadata: ClientMetadata;
  grant_types: string | null;
  icon_url: string;
  login_url: string;
  logo_url: string;
  name: string;
  organization_usage: string;
};
