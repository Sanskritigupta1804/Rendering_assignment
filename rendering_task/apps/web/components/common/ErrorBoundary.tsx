"use client";

import React from "react";
import { Card } from "@workspace/ui/components/card";
import { Button } from "@workspace/ui/components/button";

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  retryKey: number;
  error?: Error;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, retryKey: 0 };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error };
  }

  private handleRetry = () => {
    this.setState((s) => ({ hasError: false, error: undefined, retryKey: s.retryKey + 1 }));
  };

  render() {
    if (this.state.hasError) {
      return (
        <Card className="p-4 space-y-2">
          <div className="text-sm font-medium">Unable to load data.</div>
          <div className="text-xs text-muted-foreground">
            {this.state.error?.message ?? "Please try again."}
          </div>
          <Button size="sm" onClick={this.handleRetry}>Retry</Button>
        </Card>
      );
    }

    return <div key={this.state.retryKey}>{this.props.children}</div>;
  }
} 