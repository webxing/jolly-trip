const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY

export const imageService = {
  async getDestinationImage(destinationName, seed) {
    try {
      // 使用目的地名称作为随机种子，确保同一个地点总是获取相同的图片
      const hash = await this.stringToHash(destinationName)
      // 使用 Picsum 服务，返回固定尺寸的图片
      return `https://picsum.photos/seed/${hash}/800/600`
    } catch (error) {
      console.error('Error generating image URL:', error)
      // 返回默认图片
      return `/images/destinations/default.jpg`
    }
  },

  // 将字符串转换为数字哈希值
  async stringToHash(str) {
    const encoder = new TextEncoder()
    const data = encoder.encode(str)
    const hashBuffer = await crypto.subtle.digest('SHA-256', data)
    const hashArray = Array.from(new Uint8Array(hashBuffer))
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
    return hashHex.slice(0, 8) // 只使用前8位作为种子
  }
}
