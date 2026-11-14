export default function SectionHeading({ eyebrow, title, description, align = 'left', className = '' }) {
  const centered = align === 'center'

  return (
    <div className={`${centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${className}`}>
      <span className="eyebrow">
        <span className="eyebrow-dot" />
        {eyebrow}
      </span>
      <h2 className="section-title mt-4 text-balance">{title}</h2>
      {description ? (
        <p className={`section-lead mt-4 text-pretty ${centered ? 'mx-auto' : ''}`}>{description}</p>
      ) : null}
    </div>
  )
}
