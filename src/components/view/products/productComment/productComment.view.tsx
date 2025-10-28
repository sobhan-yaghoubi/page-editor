import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/common/carousel"
import { ChevronRight } from "lucide-react"

interface CommentProps {
  author: string
  date: string
  content: string
  rating: number
  likes: number
  dislikes: number
  images: string[]
  sellerReply?: string
}

const CommentCard = ({
  author,
  date,
  content,
  rating,
  likes,
  dislikes,
  images,
  sellerReply,
}: CommentProps) => {
  const renderStars = (count: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className="comment-star"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.0376 14.1687C10.7063 14.1687 10.2813 14.0625 9.75007 13.75L7.88132 12.6437C7.68757 12.5312 7.31257 12.5312 7.12507 12.6437L5.25007 13.75C4.14382 14.4062 3.49382 14.1437 3.20007 13.9312C2.91257 13.7187 2.46257 13.175 2.75632 11.925L3.20007 10.0062C3.25007 9.8062 3.15007 9.46245 3.00007 9.31245L1.45007 7.76245C0.675074 6.98745 0.737574 6.32495 0.843824 5.99995C0.950074 5.67495 1.28757 5.09995 2.36257 4.9187L4.35632 4.58745C4.54382 4.5562 4.81257 4.3562 4.89382 4.18745L6.00007 1.9812C6.50007 0.974951 7.15632 0.824951 7.50007 0.824951C7.84382 0.824951 8.50007 0.974951 9.00007 1.9812L10.1001 4.1812C10.1876 4.34995 10.4563 4.54995 10.6438 4.5812L12.6376 4.91245C13.7188 5.0937 14.0563 5.6687 14.1563 5.9937C14.2563 6.3187 14.3188 6.9812 13.5501 7.7562L12.0001 9.31245C11.8501 9.46245 11.7563 9.79995 11.8001 10.0062L12.2438 11.925C12.5313 13.175 12.0876 13.7187 11.8001 13.9312C11.6438 14.0437 11.3938 14.1687 11.0376 14.1687ZM7.50007 11.6187C7.80632 11.6187 8.11257 11.6937 8.35632 11.8375L10.2251 12.9437C10.7688 13.2687 11.1126 13.2687 11.2438 13.175C11.3751 13.0812 11.4688 12.75 11.3313 12.1375L10.8876 10.2187C10.7688 9.69995 10.9626 9.0312 11.3376 8.64995L12.8876 7.09995C13.1938 6.7937 13.3313 6.4937 13.2688 6.28745C13.2001 6.0812 12.9126 5.91245 12.4876 5.8437L10.4938 5.51245C10.0126 5.4312 9.48757 5.0437 9.26882 4.6062L8.16882 2.4062C7.96882 2.0062 7.71882 1.7687 7.50007 1.7687C7.28132 1.7687 7.03132 2.0062 6.83757 2.4062L5.73132 4.6062C5.51257 5.0437 4.98757 5.4312 4.50632 5.51245L2.51882 5.8437C2.09382 5.91245 1.80632 6.0812 1.73757 6.28745C1.66882 6.4937 1.81257 6.79995 2.11882 7.09995L3.66882 8.64995C4.04382 9.02495 4.23757 9.69995 4.11882 10.2187L3.67507 12.1375C3.53132 12.7562 3.63132 13.0812 3.76257 13.175C3.89382 13.2687 4.23132 13.2625 4.78132 12.9437L6.65007 11.8375C6.88757 11.6937 7.19382 11.6187 7.50007 11.6187Z"
          fill={i < count ? "#E1BE11" : "none"}
          stroke={i < count ? "none" : "#E1BE11"}
        />
      </svg>
    ))
  }

  return (
    <div className="comment-card">
      <div className="comment-content">
        <div className="comment-header">
          <div className="comment-rating">{renderStars(rating)}</div>
          <div className="comment-author-section">
            <div className="comment-author-info">
              <div className="comment-author-name">{author}</div>
              <div className="comment-author-date">{date}</div>
            </div>
            <div className="comment-avatar">
              <div className="comment-avatar-bg"></div>
              <div className="comment-avatar-letter">س</div>
            </div>
          </div>
        </div>

        <div className="comment-text">{content}</div>

        <div className="comment-footer">
          <div className="comment-actions">
            <div className="comment-action-item">
              <svg
                className="comment-action-icon"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.14018 11.05H6.24018C5.96018 11.05 5.35018 10.965 5.02518 10.64L3.51018 9.47L3.97018 8.875L5.52018 10.075C5.64518 10.195 5.96018 10.295 6.24018 10.295H8.14018C8.59018 10.295 9.07518 9.93499 9.17518 9.52999L10.3852 5.855C10.4652 5.635 10.4502 5.435 10.3452 5.29C10.2352 5.135 10.0352 5.045 9.79018 5.045H7.79018C7.53018 5.045 7.29018 4.93499 7.12518 4.74499C6.95518 4.54999 6.88018 4.28999 6.92018 4.01999L7.17018 2.41499C7.23018 2.13499 7.04018 1.82 6.77018 1.73C6.52518 1.64 6.21018 1.77 6.10018 1.93L4.05018 4.98L3.43018 4.565L5.48018 1.515C5.79518 1.045 6.48518 0.819995 7.02518 1.025C7.65018 1.23 8.05018 1.91999 7.91018 2.55999L7.66518 4.135C7.66018 4.17 7.66018 4.22 7.69518 4.26C7.72018 4.285 7.75518 4.3 7.79518 4.3H9.79518C10.2852 4.3 10.7102 4.505 10.9602 4.86C11.2052 5.205 11.2552 5.66 11.0952 6.1L9.90018 9.74C9.71518 10.465 8.94518 11.05 8.14018 11.05Z"
                  fill="#808080"
                />
                <path
                  d="M2.68994 10.5H2.18994C1.26494 10.5 0.814941 10.065 0.814941 9.17495V4.27495C0.814941 3.38495 1.26494 2.94995 2.18994 2.94995H2.68994C3.61494 2.94995 4.06494 3.38495 4.06494 4.27495V9.17495C4.06494 10.065 3.61494 10.5 2.68994 10.5ZM2.18994 3.69995C1.64494 3.69995 1.56494 3.82995 1.56494 4.27495V9.17495C1.56494 9.61995 1.64494 9.74995 2.18994 9.74995H2.68994C3.23494 9.74995 3.31494 9.61995 3.31494 9.17495V4.27495C3.31494 3.82995 3.23494 3.69995 2.68994 3.69995H2.18994Z"
                  fill="#808080"
                />
              </svg>
              <span className="comment-action-count">{likes}</span>
            </div>
            <div className="comment-action-item">
              <svg
                className="comment-action-icon"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.60022 11.05C6.74522 11.05 6.89022 11.025 7.02522 10.975C7.65022 10.77 8.05022 10.08 7.91022 9.43995L7.66523 7.86495C7.66023 7.82995 7.66023 7.77995 7.69523 7.73995C7.72023 7.71495 7.75523 7.69995 7.79523 7.69995H9.79522C10.2852 7.69995 10.7102 7.49495 10.9602 7.13995C11.2052 6.79495 11.2552 6.33995 11.0952 5.89995L9.90022 2.25995C9.71522 1.53495 8.94023 0.949951 8.14023 0.949951H6.24022C5.96022 0.949951 5.35023 1.03495 5.02523 1.35995L3.51023 2.52995L3.97023 3.12495L5.52022 1.92495C5.64522 1.79995 5.96022 1.69995 6.24022 1.69995H8.14023C8.59023 1.69995 9.07522 2.05995 9.17522 2.46495L10.3852 6.13995C10.4652 6.35995 10.4502 6.55995 10.3452 6.70495C10.2352 6.85995 10.0352 6.94995 9.79022 6.94995H7.79022C7.53023 6.94995 7.29022 7.05995 7.12522 7.24995C6.95522 7.44495 6.88022 7.70495 6.92022 7.97495L7.17022 9.57995C7.23022 9.85995 7.04022 10.175 6.77022 10.265C6.53022 10.355 6.21022 10.225 6.10022 10.065L4.05023 7.01495L3.43023 7.43495L5.48022 10.485C5.71522 10.835 6.16022 11.05 6.60022 11.05Z"
                  fill="#808080"
                />
                <path
                  d="M2.18994 9.05H2.68994C3.61494 9.05 4.06494 8.615 4.06494 7.725V2.825C4.06494 1.935 3.61494 1.5 2.68994 1.5H2.18994C1.26494 1.5 0.814941 1.935 0.814941 2.825V7.725C0.814941 8.615 1.26494 9.05 2.18994 9.05ZM2.68994 2.25C3.23494 2.25 3.31494 2.38 3.31494 2.825V7.725C3.31494 8.17 3.23494 8.3 2.68994 8.3H2.18994C1.64494 8.3 1.56494 8.17 1.56494 7.725V2.825C1.56494 2.38 1.64494 2.25 2.18994 2.25H2.68994Z"
                  fill="#808080"
                />
              </svg>
              <span className="comment-action-count">{dislikes}</span>
            </div>
          </div>

          <div className="comment-images">
            {images.map((img, idx) => (
              <img key={idx} src={img} alt="" className="comment-image" />
            ))}
          </div>
        </div>

        {sellerReply && (
          <>
            <div className="comment-divider"></div>
            <div className="comment-reply">{sellerReply}</div>
          </>
        )}
      </div>
    </div>
  )
}

export default function ProductCommentView() {
  const comments: CommentProps[] = [
    {
      author: "سمیه منصوری",
      date: "۲۹ آبان ۱۴۰۳",
      content:
        "تجربه خريد ٢ تا ساعت رو تا به امروز از شما داشتم و واقعا عالي بودو راضي هستم مخصولات خدماتتون و بسته بندي و ارسالتون همه عالي ان ...",
      rating: 0,
      likes: 2,
      dislikes: 0,
      images: [
        "https://api.builder.io/api/v1/image/assets/TEMP/25805b85ee9b7ab1a9bb9121e0ef8891b372b99b?width=72",
        "https://api.builder.io/api/v1/image/assets/TEMP/25805b85ee9b7ab1a9bb9121e0ef8891b372b99b?width=72",
        "https://api.builder.io/api/v1/image/assets/TEMP/25805b85ee9b7ab1a9bb9121e0ef8891b372b99b?width=72",
      ],
      sellerReply:
        "پاسخ (فروشنده):\nبا سلام٬ ممنون بابت نظرتون. خوشحالیم که سایت ما رو برای خرید انتخاب کردید.",
    },
    {
      author: "سمیه منصوری",
      date: "۲۹ آبان ۱۴۰۳",
      content:
        "تجربه خريد ٢ تا ساعت رو تا به امروز از شما داشتم و واقعا عالي بودو راضي هستم مخصولات خدماتتون و بسته بندي و ارسالتون همه عالي ان ...",
      rating: 2,
      likes: 2,
      dislikes: 0,
      images: [
        "https://api.builder.io/api/v1/image/assets/TEMP/bb55edf27c7cd3040fa1665390fb9290a776342f?width=72",
        "https://api.builder.io/api/v1/image/assets/TEMP/38c4d5b49158d3f21460da8c319b6b16e58180be?width=72",
        "https://api.builder.io/api/v1/image/assets/TEMP/388bcffce1c233932a2f7fc96acb1f6eebd783ae?width=72",
      ],
    },
    {
      author: "سمیه منصوری",
      date: "۲۹ آبان ۱۴۰۳",
      content:
        "تجربه خريد ٢ تا ساعت رو تا به امروز از شما داشتم و واقعا عالي بودو راضي هستم مخصولات خدماتتون و بسته بندي و ارسالتون همه عالي ان ...",
      rating: 2,
      likes: 2,
      dislikes: 0,
      images: [
        "https://api.builder.io/api/v1/image/assets/TEMP/bb55edf27c7cd3040fa1665390fb9290a776342f?width=72",
        "https://api.builder.io/api/v1/image/assets/TEMP/38c4d5b49158d3f21460da8c319b6b16e58180be?width=72",
        "https://api.builder.io/api/v1/image/assets/TEMP/388bcffce1c233932a2f7fc96acb1f6eebd783ae?width=72",
      ],
    },
  ]

  return (
    <div className="comments-container">
      <div className="comments-header">
        <button className="comments-button">+ ثبت دیدگاه</button>

        <button className="comments-view-more">
          <div className="comments-chevron-icon">
            <ChevronRight
              className="w-5 h-5"
              style={{ transform: "scaleX(-1)" }}
            />
          </div>
        </button>
      </div>

      <Carousel>
        <CarouselContent>
          {comments.map((comment, idx) => (
            <CarouselItem key={`product-comment-${idx}`}>
              <CommentCard {...comment} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
