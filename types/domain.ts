import { Database } from "./supabase"

export type station = Database["public"]["Tables"]["stations"]["Row"]
