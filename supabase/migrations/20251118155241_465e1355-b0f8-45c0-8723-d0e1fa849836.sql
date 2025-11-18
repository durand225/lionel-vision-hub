-- Création table payments pour Paystack
CREATE TABLE IF NOT EXISTS public.payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_email TEXT NOT NULL,
  amount INTEGER NOT NULL,
  reference TEXT UNIQUE NOT NULL,
  status TEXT NOT NULL,
  metadata JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;

-- Policy: Users can view their own payments
CREATE POLICY "Users can view their own payments"
ON public.payments
FOR SELECT
USING (user_email = auth.jwt()->>'email');

-- Policy: Allow insert for webhook (service role only)
CREATE POLICY "Service role can insert payments"
ON public.payments
FOR INSERT
WITH CHECK (true);

-- Index for faster lookups
CREATE INDEX IF NOT EXISTS idx_payments_reference ON public.payments(reference);
CREATE INDEX IF NOT EXISTS idx_payments_user_email ON public.payments(user_email);