CREATE TABLE IF NOT EXISTS users (
    id  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username VARCHAR(32) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    pass_hash TEXT NOT NULL,
    is_admin BOOLEAN NOT NULL DEFAULT false,
    bio TEXT DEFAULT 'Create your bio',
    tags TEXT[] DEFAULT '{}',
    pfp_key TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    is_active BOOLEAN NOT NULL DEFAULT true
)