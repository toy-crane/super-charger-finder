import { createClient } from "@supabase/supabase-js"
import { Database } from "../types/supabase"

export const supabase = createClient<Database>(
  "https://ujjphnkcfpoobxxlrnfg.supabase.co",
  process.env.SUPABASE_SECRET_KEY as string
)
