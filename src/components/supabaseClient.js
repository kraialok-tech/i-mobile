import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ctvovuywcnybwfqlceaq.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0dm92dXl3Y255YndmcWxjZWFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY1NDMzOTcsImV4cCI6MjA3MjExOTM5N30.bTOXieX631odLG1NCFn-2xZpQNIo2WM1x344z9lT7BI'


export const supabase = createClient(supabaseUrl, supabaseAnonKey);
