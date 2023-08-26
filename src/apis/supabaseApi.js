import { createClient } from "@supabase/supabase-js";
import { SUPABASE_URL } from "./supabaseConfig";
import { SUPABASE_KEY } from "./supabaseConfig";

export let supabase = 0;

if (!process.env.SUPABASE_KEY || !process.env.SUPABASE_URL) {
    supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
} else {

    supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
}


