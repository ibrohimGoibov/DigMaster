'use client'
import { createClient } from '@supabase/supabase-js'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function Home() {
  const [jobs, setJobs] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchJobs() {
      try {
        const { data, error } = await supabase
          .from('jobs')
          .select('*')
        
        if (error) {
          console.error('Ошибка Supabase:', error.message)
        } else {
          setJobs(data || [])
        }
      } catch (err) {
        console.error('Ошибка запроса:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchJobs()
  }, [])

  if (loading) return <div className="p-10">Загрузка данных...</div>

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6 text-black dark:text-white">Available Jobs:</h1>
      
      {jobs.length === 0 ? (
        <p>Работ пока нет. Добавь их в таблицу через Insert row!</p>
      ) : (
        <div className="grid gap-4">
          {jobs.map(job => (
            <div key={job.id} className="p-4 border rounded-lg bg-yellow-50 dark:bg-gray-800">
                {job.image && (
    <Image 
      src={job.image} 
      alt={job.title} 
      className="w-full h-48 object-cover mb-4 rounded-lg" 
    />
  )}
              <h2 className="text-xl font-semibold text-black dark:text-white">{job.title}</h2>
              <p className="text-gray-600 dark:text-gray-300">{job.description}</p>
              <div className="mt-2 font-mono font-bold text-green-600">${job.price}</div>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}