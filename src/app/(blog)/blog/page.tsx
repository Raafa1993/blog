import Link from "next/link";

export default function Blog() {
  return (
    <div
      style={{ display: 'grid', placeItems: 'center', height: '100vh' }}
    >
      Hello HOME-BLOG
      <Link href={'/'}>
        Voltar para PORTFOLIO
      </Link>
    </div>
  )
}
