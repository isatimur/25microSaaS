"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { AlertCircle, CheckCircle2 } from 'lucide-react'
import { cn } from "@/lib/utils"

export function SignUpForm() {
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
          title: "Sign Up Failed",
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
        title: "Welcome Aboard! 🚀",
        description: (
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-brand-yellow" />
            <span>You&apos;ve successfully joined the challenge!</span>
          </div>
        ),
      })
      setEmail('')
      setError(null)
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to sign up"
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
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            setError(null)
          }}
          required
          className={cn(
            "rounded-lg border focus:ring-2 w-full backdrop-blur-sm",
            error 
              ? "border-red-500/50 focus:ring-red-500/30 bg-red-500/10" 
              : "border-white/20 focus:ring-brand-yellow/20 bg-white/10 placeholder:text-white/50 text-white"
          )}
          disabled={isLoading}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? "email-error" : undefined}
        />
        {error && (
          <div 
            className="flex items-center gap-2 text-red-400 text-sm pl-1" 
            id="email-error" 
            role="alert"
          >
            <AlertCircle className="h-4 w-4" />
            <span>{error}</span>
          </div>
        )}
      </div>
      <Button 
        type="submit"
        disabled={isLoading}
        className={cn(
          "w-full font-semibold transition-all duration-300",
          isLoading
            ? "bg-brand-yellow/80 text-brand-blue/80"
            : "bg-brand-yellow hover:bg-brand-yellow/90 text-brand-blue"
        )}
      >
        {isLoading ? "Joining..." : "Join the Challenge"}
      </Button>
    </form>
  )
}

