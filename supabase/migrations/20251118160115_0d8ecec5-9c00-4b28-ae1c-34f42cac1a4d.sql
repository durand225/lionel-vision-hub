-- Create enum for user roles
create type public.app_role as enum ('admin', 'moderator', 'user');

-- Create user_roles table
create table public.user_roles (
    id uuid primary key default gen_random_uuid(),
    user_id uuid references auth.users(id) on delete cascade not null,
    role app_role not null,
    unique (user_id, role)
);

-- Enable RLS on user_roles
alter table public.user_roles enable row level security;

-- Create security definer function to check roles
create or replace function public.has_role(_user_id uuid, _role app_role)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.user_roles
    where user_id = _user_id
      and role = _role
  )
$$;

-- RLS policy: users can view their own roles
create policy "Users can view their own roles"
on public.user_roles
for select
to authenticated
using (auth.uid() = user_id);

-- RLS policy: admins can view all roles
create policy "Admins can view all roles"
on public.user_roles
for select
to authenticated
using (public.has_role(auth.uid(), 'admin'));

-- RLS policy: admins can insert roles
create policy "Admins can insert roles"
on public.user_roles
for insert
to authenticated
with check (public.has_role(auth.uid(), 'admin'));

-- RLS policy: admins can delete roles
create policy "Admins can delete roles"
on public.user_roles
for delete
to authenticated
using (public.has_role(auth.uid(), 'admin'));

-- Update payments table RLS: admins can view all payments
create policy "Admins can view all payments"
on public.payments
for select
to authenticated
using (public.has_role(auth.uid(), 'admin'));