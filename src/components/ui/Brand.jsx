export default function Brand({ className = '', onClick, size = 'default' }) {
  const large = size === 'large'

  return (
    <a
      href="#anasayfa"
      onClick={onClick}
      className={`group inline-flex items-center gap-3 sm:gap-4 ${className}`}
      aria-label="Kuantum Teknoloji Akademisi ana sayfa"
    >
      <img
  src="/images/kuantum-simge.png"
  alt=""
  width="542"
  height="444"
  className={`w-auto object-contain transition-transform duration-300 group-hover:scale-[1.04] ${
    large ? 'h-16 sm:h-20' : 'h-11 sm:h-14'
  }`}
/>
<img
  src="/images/kuantum-yazi.png"
  alt="Kuantum Teknoloji Akademisi"
  width="1049"
  height="177"
  className={`w-auto object-contain ${
  large ? 'h-9 sm:h-11' : 'h-6 sm:h-[30px]'
}`}
/>
    </a>
  )
}