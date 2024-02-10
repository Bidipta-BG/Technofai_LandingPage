import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      Rest of the components

      <div className="bg-green-500 text-white hover:cursor-pointer mt-7"><Link href="/pricing">Click here to go to pricing page</Link></div>
      <div className="bg-blue-500 text-white hover:cursor-pointer mt-2"><Link href="/products">Click here to go to Products page</Link></div>
      <div className="bg-yellow-500 text-white hover:cursor-pointer mt-2"><Link href="https://google.com" rel="noopener noreferrer" target="_blank">Open in New Tab</Link></div>
    </div>
  );
}
