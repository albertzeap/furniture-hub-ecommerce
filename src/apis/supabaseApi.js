import { createClient } from "@supabase/supabase-js";



// export const supabase = createClient("https://tokvcdpslacxynzxammv.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRva3ZjZHBzbGFjeHluenhhbW12Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI5OTE1MDgsImV4cCI6MjAwODU2NzUwOH0.AzLyjN1JMNeGMvs2JQQzO8ZDhZiHWX953wfTQCwIeKQ");
export const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);


