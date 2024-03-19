import { createClient } from "@supabase/supabase-js"
const supabaseUrl = 'https://zxrionrborstfdjdkghl.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4cmlvbnJib3JzdGZkamRrZ2hsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA4MTA1NDIsImV4cCI6MjAyNjM4NjU0Mn0.Qt94dxXBqErh_fuh9UxykqBTfD6JPmzJ15TTS9-_0Mc'
const supabase = createClient(supabaseUrl, supabaseKey)

async function favbooks(){

    let { data: books, error } = await supabase
        .from('books')
        .select('*')
                
    for(let book of books){
        let LI = document.getElementById("list");
        LI.innerHTML += `<li>${book.title}</li>`;
    }
}

favbooks();