"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export function SignUpForm() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast({
          variant: "destructive",
          title: "Subscription Failed",
          description: (
            <div className="flex items-center gap-2">
              <AlertCircle className="h-4 w-4" />
              <span>{data.error || "Failed to subscribe"}</span>
            </div>
          ),
        });
        return;
      }

      toast({
        title: "You're In!",
        description: (
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-green-500" />
            <span>Welcome to the AI Agent Challenge. Check your inbox.</span>
          </div>
        ),
      });
      setEmail("");
    } catch {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white p-8 rounded-xl shadow-lg"
    >
      <div className="space-y-2">
        <Label htmlFor="hero-email" className="text-neutral-700">Email</Label>
        <Input
          id="hero-email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isLoading}
          className="w-full border-neutral-300 focus-visible:ring-brand-blue"
        />
      </div>
      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold"
      >
        {isLoading ? "Joining..." : "Join the AI Agent Challenge"}
      </Button>
    </form>
  );
}
