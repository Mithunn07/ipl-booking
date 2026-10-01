import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zyqjfdyyfujtwamqlavp.supabase.co";
const supabaseKey = "sb_publishable_nlldYEoqw92976a-Sk2z4g_gMPFwP3T";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);
