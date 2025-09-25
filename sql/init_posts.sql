CREATE TABLE IF NOT EXISTS posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  username VARCHAR(32) NOT NULL,
  title_text TEXT NOT NULL,
  post_text TEXT NOT NULL,
  media_key TEXT,
  tags TEXT[] DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CHECK (coalesce(array_length(tags, 1), 0) <= 5)
);