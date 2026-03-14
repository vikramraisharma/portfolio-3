export default function Grid({ children, columns, minWidth, className = '' }) {
  const style = minWidth
    ? { gridTemplateColumns: `repeat(auto-fit, minmax(${minWidth}, 1fr))` }
    : columns
    ? { gridTemplateColumns: `repeat(auto-fit, minmax(${columns === 1 ? '100%' : '250px'}, 1fr))` }
    : undefined

  return (
    <div className={`grid ${className}`.trim()} style={style}>
      {children}
    </div>
  )
}
