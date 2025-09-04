CREATE TABLE IF NOT EXISTS posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  username VARCHAR(32) NOT NULL,
  tags TEXT[] DEFAULT '{}',
  descript TEXT DEFAULT NOT NULL,
  postpic_key TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CHECK (coalesce(array_length(tags, 1), 0) <= 5)
);