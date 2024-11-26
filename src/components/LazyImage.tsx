import { useState, useEffect } from 'react'

interface LazyImageProps {
  src: string
  alt: string
  className?: string
}

export default function LazyImage({ src, alt, className = '' }: LazyImageProps) {
  const [imageSrc, setImageSrc] = useState('/placeholder.jpg')

  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => {
      setImageSrc(src)
    }
  }, [src])

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={`transition-opacity duration-300 ${
        imageSrc === '/placeholder.jpg' ? 'opacity-50' : 'opacity-100'
      } ${className}`}
    />
  )
}

