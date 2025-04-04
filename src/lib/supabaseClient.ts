import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(import.meta.env.VITE_SUPAURL, import.meta.env.VITE_SUPAKEY);