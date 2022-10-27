import * as Sentry from '@sentry/browser';
import { BrowserTracing } from '@sentry/tracing';

import { default as useOrganizationModule, Organization } from './store/useOrganization';

Sentry.init({
  dsn: 'https://0b4fc3c60dde4486a5a41c6c40450dce@o470508.ingest.sentry.io/4504055714807808',
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

/*
 * Eliminate any other information from the useOrganization zustand state coming out
 * The only information needed to export is `read` data
 */
// eslint-disable-next-line react-hooks/rules-of-hooks
const useOrganization = () =>
  useOrganizationModule(({ organizations, selectedOrganization }) => ({
    organizations,
    selectedOrganization,
  }));

export * from './request';
export * from './routing';
export * from './authentication';
export type { Organization };
export { useOrganization };
