import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/common/carousel"

const desktopArticles = [
  {
    id: 1,
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/183a5c7aeec9a32b85b08339b02e3203f2ffb51d?width=460",
    title: "ایده‌های جذاب برای خرید کادو برای دختر ۲۵ ساله",
    date: "23 آذر ۱۴۰۳",
  },
  {
    id: 2,
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/5029bb131337425ef61cdcf6ad133f7d89114ca0?width=460",
    title: "آموزش جلوگیری از تمام شدن باتری ساعت مچی",
    date: "23 آذر ۱۴۰۳",
  },
  {
    id: 3,
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/2b6a31312c821fa11c0052a0da56b0a2539efd59?width=460",
    title: "چطور تفاوت ساعت جی شاک اصل و فیک تشخیص دهیم؟",
    date: "23 آذر ۱۴۰۳",
  },
  {
    id: 4,
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/3a10b36132b84bdebc86fbf34f02d9add84227ad?width=460",
    title: "سریع‌ترین راه برای تنظیم ساعت کاسیو – تنها در ۲ دقیقه",
    date: "23 آذر ۱۴۰۳",
  },
  {
    id: 5,
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/3e722ca981d53c501a5ce33be7f093008280847b?width=460",
    title: "راهنما تشخیص ساعت پتک فیلیپ اصل از فیک",
    date: "23 آذر ۱۴۰۳",
  },
]

const BlogFeatureEditor = () => {
  return (
    <section className="articles-section">
      <div className="articles-desktop">
        <div className="articles-desktop-header">
          <h2 className="articles-title">مــقالات جنســت جــوره</h2>
          <a href="#" className="articles-link articles-link--desktop">
            <span className="articles-link__icon articles-link__icon--desktop">
              <svg
                className="articles-link__icon-layer articles-link__icon-layer--offset"
                width="36"
                height="28"
                viewBox="0 0 36 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.115 19.2902L16.245 14.1377L23.115 8.97395L21 7.3877L12 14.1377L21 20.8877L23.115 19.2902Z"
                  fill="#6787E7"
                />
              </svg>
              <svg
                className="articles-link__icon-layer"
                width="36"
                height="28"
                viewBox="0 0 36 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.115 19.2902L16.245 14.1377L23.115 8.97395L21 7.3877L12 14.1377L21 20.8877L23.115 19.2902Z"
                  fill="#A8BAF1"
                />
              </svg>
            </span>
            <span className="articles-link__text">مشاهده همه</span>
          </a>
        </div>
        <Carousel
          gap="1.5rem"
          options={{
            align: "center",
            loop: false,
          }}
        >
          <CarouselContent>
            {desktopArticles.map((article) => (
              <CarouselItem key={article.id}>
                <ArticleCard
                  image={article.image}
                  title={article.title}
                  date={article.date}
                  size="desktop"
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="carousel-previous-button" />
          <CarouselNext className="carousel-next-button" />
        </Carousel>
      </div>

      <div className="articles-mobile">
        <div className="articles-mobile-header">
          <h2 className="articles-mobile-title">مقالات</h2>
          <a href="#" className="articles-link articles-link--mobile">
            <span className="articles-link__icon articles-link__icon--mobile">
              <svg
                className="articles-link__icon-layer articles-link__icon-layer--offset"
                width="24"
                height="19"
                viewBox="0 0 24 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.4099 12.935L10.8299 9.5L15.4099 6.0575L13.9999 5L7.99991 9.5L13.9999 14L15.4099 12.935Z"
                  fill="#6787E7"
                />
              </svg>
              <svg
                className="articles-link__icon-layer"
                width="24"
                height="19"
                viewBox="0 0 24 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.4099 12.935L10.8299 9.5L15.4099 6.0575L13.9999 5L7.99991 9.5L13.9999 14L15.4099 12.935Z"
                  fill="#A8BAF1"
                />
              </svg>
            </span>
            <span className="articles-link__text">همه</span>
          </a>
        </div>
        <Carousel
          gap="1.5rem"
          options={{
            align: "center",
            loop: false,
          }}
        >
          <CarouselContent>
            {desktopArticles.map((article) => (
              <CarouselItem key={article.id}>
                <ArticleCard
                  image={article.image}
                  title={article.title}
                  date={article.date}
                  size="mobile"
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="carousel-previous-button" />
          <CarouselNext className="carousel-next-button" />
        </Carousel>
      </div>
    </section>
  )
}

interface ArticleCardProps {
  image: string
  title: string
  date: string
  size?: "desktop" | "mobile"
}

export function ArticleCard({
  image,
  title,
  date,
  size = "desktop",
}: ArticleCardProps) {
  const sizeModifier =
    size === "mobile" ? "article-card--mobile" : "article-card--desktop"

  return (
    <div className={`article-card ${sizeModifier}`}>
      <div className="article-card__image-wrapper">
        <img src={image} alt={title} className="article-card__image" />
        <div className="article-card__date">
          <span>{date}</span>
        </div>
      </div>
      <p className="article-card__title">{title}</p>
    </div>
  )
}

export default BlogFeatureEditor
