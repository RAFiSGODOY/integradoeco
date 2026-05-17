import { useEffect } from 'react'

/**
 * @param {object} props
 * @param {string} props.src — URL do import (vite-imagetools / assets)
 * @param {string} [props.alt]
 * @param {string} [props.className]
 * @param {boolean} [props.priority] — LCP / acima da dobra: eager + fetchpriority high
 * @param {string} [props.sizes] — hint para o navegador
 * @param {number} [props.width]
 * @param {number} [props.height]
 */
export default function OptimizedImage({
  src,
  alt = '',
  className,
  priority = false,
  sizes,
  width,
  height,
}) {
  useEffect(() => {
    if (!priority || !src) return

    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = src
    document.head.appendChild(link)

    return () => {
      link.remove()
    }
  }, [priority, src])

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      sizes={sizes}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
    />
  )
}
