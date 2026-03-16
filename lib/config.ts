/**
 * 广告开关配置
 * 接入 Google AdSense 时，在 .env.local / 生产环境变量中设置：
 *   NEXT_PUBLIC_ADS_ENABLED=true
 */
export const ADS_ENABLED =
  process.env.NEXT_PUBLIC_ADS_ENABLED === "true";
