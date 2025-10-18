import {
  SimpleCarousel,
  SimpleCarouselSlide,
} from "@/components/common/carousel/simple"

const reviews = [
  {
    id: 1,
    name: "سمیه منصوری",
    date: "۲۹ آبان ۱۴۰۳",
    rating: 2,
    review:
      "تجربه خريد ٢ تا ساعت رو تا به امروز از شما داشتم و واقعا عالي بودو راضي هستم مخصولات خدماتتون و بسته بندي و ارسالتون همه عالي ان ...",
    initial: "س",
  },
  {
    id: 2,
    name: "سمیه منصوری",
    date: "۲۹ آبان ۱۴۰۳",
    rating: 2,
    review:
      "تجربه خريد ٢ تا ساعت رو تا به امروز از شما داشتم و واقعا عالي ��ودو راضي هستم مخصولات خدماتتون و بسته بندي و ارسالتون همه عالي ان ...",
    initial: "س",
  },
  {
    id: 3,
    name: "سمیه منصوری",
    date: "۲۹ آبان ۱۴۰۳",
    rating: 2,
    review:
      "تجربه خريد ٢ تا ساعت رو تا به امروز از شما داشتم و واقعا عالي بودو راضي هستم مخصولات خدماتتون و بسته بندي و ارسالتون همه عالي ان ...",
    initial: "س",
  },
  {
    id: 4,
    name: "سمیه منصوری",
    date: "۲۹ آبان ۱۴۰۳",
    rating: 2,
    review:
      "تجربه خريد ٢ تا ساعت رو تا به امروز از شما داشتم و واقعا عالي بودو راضي هستم مخصولات خدماتتون و بسته بندي و ارسالتون همه عالي ان ...",
    initial: "س",
  },
  {
    id: 5,
    name: "سمیه منصوری",
    date: "۲۹ آبان ۱۴۰۳",
    rating: 2,
    review:
      "تجربه خريد ٢ تا ساعت رو تا به امروز از شما داشتم و واقعا عالي بودو راضي هستم مخصولات خدماتتون و بسته بندي و ارسالتون همه عالي ان ...",
    initial: "س",
  },
  {
    id: 6,
    name: "سمیه منصوری",
    date: "۲۹ آبان ۱۴۰۳",
    rating: 2,
    review:
      "تجربه خريد ٢ تا ساعت رو تا به امروز از شما داشتم و واقعا عالي بودو راضي هستم مخصولات خدماتتون و بسته بندي و ارسالتون همه عالي ان ...",
    initial: "س",
  },
]

const BestCommentEditor = () => {
  return (
    <section className="reviews-section">
      <div className="reviews-desktop">
        <div className="reviews-desktop-wrapper">
          <div className="reviews-desktop-header">
            <h2 className="reviews-desktop-title">نظرات مشتریان</h2>
          </div>
          <div className="reviews-desktop-list">
            <SimpleCarousel>
              {reviews.map((review) => (
                <SimpleCarouselSlide key={review.id}>
                  <ReviewCard
                    name={review.name}
                    date={review.date}
                    rating={review.rating}
                    review={review.review}
                    initial={review.initial}
                    variant="desktop"
                  />
                </SimpleCarouselSlide>
              ))}
            </SimpleCarousel>
          </div>
        </div>
      </div>

      <div className="reviews-mobile">
        <h2 className="reviews-mobile-title">نظرات مشتریان</h2>
        <div className="reviews-mobile-list">
          <SimpleCarousel>
            {reviews.map((review) => (
              <SimpleCarouselSlide key={review.id}>
                <ReviewCard
                  name={review.name}
                  date={review.date}
                  rating={review.rating}
                  review={review.review}
                  initial={review.initial}
                  variant="mobile"
                />
              </SimpleCarouselSlide>
            ))}
          </SimpleCarousel>
        </div>
      </div>
    </section>
  )
}

interface ReviewCardProps {
  name: string
  date: string
  rating: number
  review: string
  initial: string
  variant?: "desktop" | "mobile"
}

const ReviewCard = ({
  name,
  date,
  rating,
  review,
  initial,
  variant = "desktop",
}: ReviewCardProps) => {
  const variantClass =
    variant === "mobile" ? "review-card--mobile" : "review-card--desktop"

  return (
    <div className={`review-card ${variantClass}`}>
      <div className="review-card__content">
        {variant === "desktop" && (
          <div className="review-card__header">
            <div className="review-card__user">
              <div className="review-card__user-info">
                <div className="review-card__user-name">{name}</div>
                <div className="review-card__user-date">{date}</div>
              </div>
              <div className="review-card__avatar">
                <span className="review-card__avatar-text">{initial}</span>
              </div>
            </div>
            <div className="review-card__stars">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className={`review-card__star ${
                    index < rating ? "review-card__star--filled" : ""
                  }`}
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.0376 14.1688C10.7063 14.1688 10.2813 14.0625 9.75007 13.75L7.88132 12.6438C7.68757 12.5313 7.31257 12.5313 7.12507 12.6438L5.25007 13.75C4.14382 14.4063 3.49382 14.1438 3.20007 13.9313C2.91257 13.7188 2.46257 13.175 2.75632 11.925L3.20007 10.0063C3.25007 9.80626 3.15007 9.46251 3.00007 9.31251L1.45007 7.76251C0.675074 6.98751 0.737574 6.32501 0.843824 6.00001C0.950074 5.67501 1.28757 5.10001 2.36257 4.91876L4.35632 4.58751C4.54382 4.55626 4.81257 4.35626 4.89382 4.18751L6.00007 1.98126C6.50007 0.975012 7.15632 0.825012 7.50007 0.825012C7.84382 0.825012 8.50007 0.975012 9.00007 1.98126L10.1001 4.18126C10.1876 4.35001 10.4563 4.55001 10.6438 4.58126L12.6376 4.91251C13.7188 5.09376 14.0563 5.66876 14.1563 5.99376C14.2563 6.31876 14.3188 6.98126 13.5501 7.75626L12.0001 9.31251C11.8501 9.46251 11.7563 9.80001 11.8001 10.0063L12.2438 11.925C12.5313 13.175 12.0876 13.7188 11.8001 13.9313C11.6438 14.0438 11.3938 14.1688 11.0376 14.1688ZM7.50007 11.6188C7.80632 11.6188 8.11257 11.6938 8.35632 11.8375L10.2251 12.9438C10.7688 13.2688 11.1126 13.2688 11.2438 13.175C11.3751 13.0813 11.4688 12.75 11.3313 12.1375L10.8876 10.2188C10.7688 9.70001 10.9626 9.03126 11.3376 8.65001L12.8876 7.10001C13.1938 6.79376 13.3313 6.49376 13.2688 6.28751C13.2001 6.08126 12.9126 5.91251 12.4876 5.84376L10.4938 5.51251C10.0126 5.43126 9.48757 5.04376 9.26882 4.60626L8.16882 2.40626C7.96882 2.00626 7.71882 1.76876 7.50007 1.76876C7.28132 1.76876 7.03132 2.00626 6.83757 2.40626L5.73132 4.60626C5.51257 5.04376 4.98757 5.43126 4.50632 5.51251L2.51882 5.84376C2.09382 5.91251 1.80632 6.08126 1.73757 6.28751C1.66882 6.49376 1.81257 6.80001 2.11882 7.10001L3.66882 8.65001C4.04382 9.02501 4.73757 9.70001 4.61882 10.2188L3.67507 12.1375C3.53132 12.7563 3.63132 13.0813 3.76257 13.175C3.89382 13.2688 4.23132 13.2625 4.78132 12.9438L6.65007 11.8375C6.88757 11.6938 7.19382 11.6188 7.50007 11.6188Z"
                    fill="#E1BE11"
                  />
                </svg>
              ))}
            </div>
          </div>
        )}

        {variant === "mobile" && (
          <div className="review-card__mobile-header">
            <div className="review-card__mobile-indicator"></div>
            <div className="review-card__mobile-name">{name}</div>
          </div>
        )}

        <p className="review-card__text">{review}</p>
      </div>
    </div>
  )
}

export default BestCommentEditor
