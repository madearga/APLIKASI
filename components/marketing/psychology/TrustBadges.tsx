"use client";

import { Shield, Lock, CheckCircle2 } from "lucide-react";

const TrustBadges = () => {
  return (
    <section className="py-12 bg-secondary border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 items-center sm:grid-cols-4">
          <div className="flex items-center justify-center space-x-2">
            <Shield className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm font-medium text-foreground">HIPAA-Compliant</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Lock className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm font-medium text-foreground">AES-256 Encrypted</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <CheckCircle2 className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm font-medium text-foreground">BAA Agreements</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <div className="text-sm font-bold text-foreground">99.9%</div>
            <span className="text-sm font-medium text-foreground">Uptime</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export { TrustBadges };