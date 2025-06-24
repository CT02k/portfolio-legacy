import Link from "next/link"

export default function GoBack() {
  return (
    <Link href="/" className="border px-5 w-fit text-center rounded-full hover:bg-zinc-200/20 transition before:text-black mb-5 shadow-sm">
      ←
    </Link>
  )
}
