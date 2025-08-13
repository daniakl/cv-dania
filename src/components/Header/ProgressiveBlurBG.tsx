export const ProgressiveBlurBG = () => {
  const numberOfLayers = 8

  const generateProgression = (maxValue: number) => {
    return Array.from(
      { length: numberOfLayers },
      (_, i) => maxValue / Math.pow(2, numberOfLayers - 1 - i)
    )
  }

  const generateMask = (layerIndex: number, totalLayers: number) => {
    const step = 100 / totalLayers // 12.5% for 8 layers

    // Each layer shifts the window by one step
    const start = step * layerIndex
    const opaqueStart = start + step
    const opaqueEnd = start + step * 2
    const end = start + step * 3

    const stops = []

    // Add transparent start (if not at 0%)
    if (start > 0) {
      stops.push(`rgba(0, 0, 0, 0) ${start}%`)
    }

    // Add opaque section
    stops.push(`rgba(0, 0, 0, 1) ${opaqueStart}%`)
    stops.push(`rgba(0, 0, 0, 1) ${opaqueEnd}%`)

    // Add transparent end (if not at 100%)
    if (end < 100) {
      stops.push(`rgba(0, 0, 0, 0) ${end}%`)
    }

    return `linear-gradient(to top, ${stops.join(", ")})`
  }

  const progressiveBlurBg = generateProgression(18)

  return (
    <div className="absolute inset-0 pointer-events-none md:h-48 h-36 w-full">
      {progressiveBlurBg.map((blur, i) => {
        const mask = generateMask(i, numberOfLayers)
        return (
          <div
            key={i}
            className="absolute inset-0 pointer-events-none"
            style={{
              WebkitMaskImage: mask,
              maskImage: mask,
              zIndex: -(numberOfLayers - i), // Negative z-index to stay behind content
              backdropFilter: `blur(${blur}px)`,
            }}
          />
        )
      })}
    </div>
  )
}
