export default function Grid({ children, columns, className = '' }) {
  const style = columns
    ? { gridTemplateColumns: `repeat(auto-fit, minmax(${columns === 1 ? '100%' : '250px'}, 1fr))` }
    : undefined

  return (
    <div className={`grid ${className}`.trim()} style={style}>
      {children}
    </div>
  )
}
