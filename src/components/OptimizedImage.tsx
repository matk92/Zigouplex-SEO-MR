import { useState, useEffect } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ src, alt, width, height, className }) => {
  const [imageSrc, setImageSrc] = useState<string>('')

  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => setImageSrc(src)
  }, [src])

  return (
    <img
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading="lazy"
    />
  )
}

export default OptimizedImage

