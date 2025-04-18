import { createClient } from '@supabase/supabase-js'

export default defineNuxtPlugin(() => {
  const supabaseUrl = 'https://cascrmwlkhjgdmkjlqnh.supabase.co'
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNhc2NybXdsa2hqZ2Rta2pscW5oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwNTAwMTMsImV4cCI6MjA1OTYyNjAxM30.O_cQIPNEQFGEeHdSfoJETdJCMd9gMpBpLk8vUOKu-WU'

  const supabase = createClient(supabaseUrl, supabaseKey)

  return {
    provide: {
      supabase
    }
  }
})