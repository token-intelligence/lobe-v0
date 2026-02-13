-- Profiles table (auto-created on signup via trigger)
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  created_at timestamptz default now()
);

alter table public.profiles enable row level security;

create policy "profiles_select_own" on public.profiles for select using (auth.uid() = id);
create policy "profiles_insert_own" on public.profiles for insert with check (auth.uid() = id);
create policy "profiles_update_own" on public.profiles for update using (auth.uid() = id);

-- Dreams table
create table if not exists public.dreams (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null,
  recorded_at timestamptz not null default now(),
  fragment text not null,
  completed_dream text not null,
  emotion text,
  clarity_score integer check (clarity_score >= 1 and clarity_score <= 10),
  lucidity_score integer check (lucidity_score >= 1 and lucidity_score <= 10),
  tags text[] default '{}',
  created_at timestamptz default now()
);

alter table public.dreams enable row level security;

create policy "dreams_select_own" on public.dreams for select using (auth.uid() = user_id);
create policy "dreams_insert_own" on public.dreams for insert with check (auth.uid() = user_id);
create policy "dreams_update_own" on public.dreams for update using (auth.uid() = user_id);
create policy "dreams_delete_own" on public.dreams for delete using (auth.uid() = user_id);

-- Dream interpretations table
create table if not exists public.interpretations (
  id uuid primary key default gen_random_uuid(),
  dream_id uuid not null references public.dreams(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  summary text not null,
  themes text[] default '{}',
  symbols jsonb default '[]',
  mood_analysis text,
  created_at timestamptz default now()
);

alter table public.interpretations enable row level security;

create policy "interpretations_select_own" on public.interpretations for select using (auth.uid() = user_id);
create policy "interpretations_insert_own" on public.interpretations for insert with check (auth.uid() = user_id);

-- Biometric snapshots table
create table if not exists public.biometrics (
  id uuid primary key default gen_random_uuid(),
  dream_id uuid not null references public.dreams(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  source text not null,
  heart_rate_avg integer,
  heart_rate_min integer,
  heart_rate_max integer,
  hrv_avg integer,
  spo2_avg numeric(5,2),
  rem_duration_min integer,
  deep_sleep_min integer,
  light_sleep_min integer,
  total_sleep_min integer,
  sleep_score integer,
  recorded_at timestamptz not null default now(),
  created_at timestamptz default now()
);

alter table public.biometrics enable row level security;

create policy "biometrics_select_own" on public.biometrics for select using (auth.uid() = user_id);
create policy "biometrics_insert_own" on public.biometrics for insert with check (auth.uid() = user_id);

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, display_name)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'display_name', split_part(new.email, '@', 1))
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;

create trigger on_auth_user_created
  after insert on auth.users
  for each row
  execute function public.handle_new_user();
