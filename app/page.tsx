'use client';
import { useEffect, useState } from 'react'; 
import Header from '@/components/Header'
import Explore from '@/components/Explore'
import Experiences from '@/components/Experiences'
import Footer from '@/components/Footer'
import CategoryBar from '@/components/CategoryBar'
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Info } from "lucide-react"

export default function Home() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserName(parsedUser.name);
    }
  }, []);

  return (
    <main className="min-h-screen flex flex-col">
      
      <Header>
        <div className="ml-auto">
          {userName ? (
            <span className="text-gray-600">Welcome, {userName}!</span>
          ) : (
            <a href="/login" className="text-blue-500">Login</a>
          )}
        </div>
      </Header>
      <CategoryBar />
      <div className="container mx-auto px-4 py-8">
        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle>Welcome to Airbnb Clone!</AlertTitle>
        </Alert>
      </div>
      <Explore />
      <Experiences />
      <Footer />
    </main>
  )
}