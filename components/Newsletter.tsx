"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { AlertCircle, CheckCircle2 } from 'lucide-react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        const errorMessage = data.error || 'Failed to subscribe'
        setError(errorMessage)
        toast({
          variant: "destructive",
          title: "Subscription Failed",
          description: (
            <div className="flex items-center gap-2">
              <AlertCircle className="h-4 w-4" />
              <span>{errorMessage}</span>
            </div>
          ),
        })
        return
      }

      toast({
        title: "Successfully Subscribed!",
        description: (
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-secondary" />
            <span>You&apos;ve been subscribed to our newsletter.</span>
          </div>
        ),
      })
      setEmail('')
      setError(null)
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to subscribe"
      setError(message)
      toast({
        variant: "destructive",
        title: "Error",
        description: (
          <div className="flex items-center gap-2">
            <AlertCircle className="h-4 w-4" />
            <span>{message}</span>
          </div>
        ),
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="bg-primary/5 p-12 rounded-2xl space-y-8 border border-primary/10 shadow-lg">
      <h2 className="text-4xl font-bold text-center text-primary">Stay Updated</h2>
      <p className="text-xl text-center text-brand-gray max-w-2xl mx-auto">
        Get the latest news, tips, and resources for the MicroSaaS Challenge delivered straight to your inbox.
      </p>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <div className="flex gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              setError(null)
            }}
            required
            className={`flex-grow bg-white/80 backdrop-blur-sm ${error ? 'border-destructive focus-visible:ring-destructive' : 'focus-visible:ring-primary/20 border-primary/10'}`}
            disabled={isLoading}
            aria-invalid={error ? "true" : "false"}
            aria-describedby={error ? "email-error" : undefined}
          />
          <Button 
            type="submit" 
            disabled={isLoading}
            className="min-w-[120px] bg-secondary hover:bg-secondary/90 text-secondary-foreground"
          >
            {isLoading ? "Subscribing..." : "Subscribe"}
          </Button>
        </div>
        {error && (
          <div 
            className="flex items-center gap-2 text-destructive text-sm" 
            id="email-error" 
            role="alert"
          >
            <AlertCircle className="h-4 w-4" />
            <span>{error}</span>
          </div>
        )}
      </form>
    </section>
  )
}

