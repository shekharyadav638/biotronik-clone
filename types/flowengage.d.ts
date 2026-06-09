declare module "@flowengage/react-chatbot" {
  import type { ReactNode } from "react";

  interface FlowEngageProviderProps {
    siteId: string;
    apiBaseUrl?: string;
    children?: ReactNode;
  }

  export function FlowEngageProvider(props: FlowEngageProviderProps): JSX.Element;
  export function FlowEngageWidget(): JSX.Element;
  export function useFlowEngage(): Record<string, unknown>;
}

declare module "@flowengage/react-chatbot/styles.css" {}
