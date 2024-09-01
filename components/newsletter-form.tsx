'use client'
import { date, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { NewsletterFormSchema } from "@/lib/schemas";
import { subscribe } from "@/lib/actions";
import { toast } from "sonner";

import Link from "next/link";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

type Inputs = z.infer<typeof NewsletterFormSchema>

import React from 'react'

export default function NewsletterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<Inputs>({
    resolver: zodResolver(NewsletterFormSchema),
    defaultValues: {
      email: ''
    }
  })
  const processForm: SubmitHandler<Inputs> = async data => {
    const result = await subscribe(data);

    if (result?.error) {
      toast.error('An error occurred! Please try again')
      return;
    }
    toast.success('Subscribed successfully')
    reset();

  }
  return (
    <section>
      <Card className="rounded-lg border-0 dark:border">
        <CardContent className="flex flex-col md:flex-row md:justify-between gap-8 pt-6 md:pt-8">
          <div>
            <h2 className="text-2xl font-bold">Subscribe to my newsletter</h2>
            <p className="text-muted-foreground">Get updates on my work and projects</p>
          </div>
          <form className="flex flex-col items-start gap-3" onSubmit={handleSubmit(processForm)}>
            <div className="w-full">
              <Input id="email" className="w-full" type="email" autoComplete="email" placeholder="Email" {...register('email')} />
              {errors.email?.message && (
                <p className="ml-1 mt-2 text-sm text-rose-400">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="w-full">
              <Button className="w-full disabled:opacity-50" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Subscribe'}
              </Button>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">
                We care about your data. Read our{' '}
                <Link href='/privacy' className="font-bold">
                  privacy&nbsp;policy.
                </Link>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}
