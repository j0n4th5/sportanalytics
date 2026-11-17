import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/+esm";

const SUPABASE_URL = "https://ykettwxsdnhlgvhqxrta.supabase.co";
const SUPABASE_KEY = "sb_publishable_yyiWhjJ-5hVQr4RLLE9HTw_WcK3OoIn";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// CREATE
export async function crearAnalisis(datos) {
  const { data, error } = await supabase.from("analisis").insert(datos).select();
  if (error) throw error;
  return data;
}

// READ
export async function leerAnalisis() {
  const { data, error } = await supabase
    .from("analisis")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return data;
}

// UPDATE
export async function actualizarAnalisis(id, cambios) {
  const { data, error } = await supabase.from("analisis").update(cambios).eq("id", id).select();
  if (error) throw error;
  return data;
}

// DELETE
export async function borrarAnalisis(id) {
  const { error } = await supabase.from("analisis").delete().eq("id", id);
  if (error) throw error;
}