import { createClient } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto";

const supabaseUrl = "https://aulzbkjkvuesgxzswnqa.supabase.co";

const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1bHpia2prdnVlc2d4enN3bnFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgwMDUwOTQsImV4cCI6MjAyMzU4MTA5NH0.l58aXVvvXq2QjAnE43pbGbVUTftA8-vsAlWlF09Rus8"


export const supabase = createClient(supabaseUrl,supabaseAnonKey)