-- Create bulletins table for uploading church bulletins
CREATE TABLE public.bulletins (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  excerpt TEXT,
  file_url TEXT,
  file_name TEXT,
  published_date DATE NOT NULL DEFAULT CURRENT_DATE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.bulletins ENABLE ROW LEVEL SECURITY;

-- Allow everyone to read bulletins (public access)
CREATE POLICY "Bulletins are publicly viewable" 
ON public.bulletins 
FOR SELECT 
USING (true);

-- Create storage bucket for bulletin files
INSERT INTO storage.buckets (id, name, public) VALUES ('bulletins', 'bulletins', true);

-- Allow public access to read bulletin files
CREATE POLICY "Bulletin files are publicly accessible" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'bulletins');

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
NEW.updated_at = now();
RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_bulletins_updated_at
BEFORE UPDATE ON public.bulletins
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();