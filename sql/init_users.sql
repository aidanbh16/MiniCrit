CREATE TABLE IF NOT EXISTS users (
    id  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username VARCHAR(32) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    pass TEXT NOT NULL,
    is_admin BOOLEAN NOT NULL DEFAULT false,
    descript TEXT DEFAULT 'Create your bio',
    pfp_key TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    is_active BOOLEAN NOT NULL DEFAULT true
)