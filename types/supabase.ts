export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      stations: {
        Row: {
          city: string | null
          common_name: string | null
          country_id: number | null
          date_opened: string | null
          dc_count: number | null
          free_parking_charge_time: string | null
          id: number
          kr_name: string | null
          latitude: number | null
          location_detail: string | null
          location_id: string | null
          longitude: number | null
          name: string | null
          parking_fee: string | null
          parking_fee_discount: string | null
          power_kilowatt: number
          region: string | null
          region_id: number | null
          short_state: string
          stall_count: number | null
          state: string | null
          status: string | null
          street_name: string
        }
        Insert: {
          city?: string | null
          common_name?: string | null
          country_id?: number | null
          date_opened?: string | null
          dc_count?: number | null
          free_parking_charge_time?: string | null
          id?: number
          kr_name?: string | null
          latitude?: number | null
          location_detail?: string | null
          location_id?: string | null
          longitude?: number | null
          name?: string | null
          parking_fee?: string | null
          parking_fee_discount?: string | null
          power_kilowatt: number
          region?: string | null
          region_id?: number | null
          short_state: string
          stall_count?: number | null
          state?: string | null
          status?: string | null
          street_name: string
        }
        Update: {
          city?: string | null
          common_name?: string | null
          country_id?: number | null
          date_opened?: string | null
          dc_count?: number | null
          free_parking_charge_time?: string | null
          id?: number
          kr_name?: string | null
          latitude?: number | null
          location_detail?: string | null
          location_id?: string | null
          longitude?: number | null
          name?: string | null
          parking_fee?: string | null
          parking_fee_discount?: string | null
          power_kilowatt?: number
          region?: string | null
          region_id?: number | null
          short_state?: string
          stall_count?: number | null
          state?: string | null
          status?: string | null
          street_name?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}