"use client"
import { useRouter } from "next/navigation"

export default function GoBack() {
  const router = useRouter()

  return (
    <button onClick={() => router.back()} className="border px-5 w-fit text-center rounded-full hover:bg-zinc-200/20 transition before:text-black mt-5 shadow-sm">
      ←
    </button>
  )
}
