import Link from "next/link";

/* This example requires Tailwind CSS v2.0+ */
const posts = [
  {
    title: "الأسرى الفلسطينيون والأمراض الناتجة عن التعذيب ونقص الرعاية الطبية",
    href: "#",
    description:
      "يعيش الأسرى الفلسطينيون في السجون الصهيونية، أوضاعاً استثنائية من الناحية الصحية، قل ما يعيشها أسرى أو معتقلون في مناطق أخرى، فهم يتعرضون إلى أساليب منهجية تؤدي حتماً لإضعاف أجساد الكثيرين منهم.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/be72/f7f2/0de681555546af7631cc931217016176?Expires=1663545600&Signature=XJmsshNJ4J1RhajtyIGCYyoQKb46JSDzC8P5fOlghq8uv4XvSflQn3lYCyx0I0QYMvvSRjRXcX5QKjDLIpIC1ziDV~HNDp85VjRc7McZJXBaDa7moW47dPFN8Nz98lJ3v8ci6Z0Vwams4TCPrSSyHq1uBVQrkoecPMt9vm5ZbUifXd~IHk1JuuRUuTjTEyMX0E7uI1kTO8oMhgwv-fafeYC2EW4lhE4qu15PgbBAk5HR2-KuBejxUU5lB71tO0NPyWNylyrHvDrKcpEprKmBbC5apAuieFpEYWZ-5jatbXWTIVjnA4ziAmF1jjxk-gN6DJoDR78OKlsie100ZLA65Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  {
    title: "الأسرى الفلسطينيون والأمراض الناتجة عن التعذيب ونقص الرعاية الطبية",
    href: "#",
    description:
      "يعيش الأسرى الفلسطينيون في السجون الصهيونية، أوضاعاً استثنائية من الناحية الصحية، قل ما يعيشها أسرى أو معتقلون في مناطق أخرى، فهم يتعرضون إلى أساليب منهجية تؤدي حتماً لإضعاف أجساد الكثيرين منهم.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/be72/f7f2/0de681555546af7631cc931217016176?Expires=1663545600&Signature=XJmsshNJ4J1RhajtyIGCYyoQKb46JSDzC8P5fOlghq8uv4XvSflQn3lYCyx0I0QYMvvSRjRXcX5QKjDLIpIC1ziDV~HNDp85VjRc7McZJXBaDa7moW47dPFN8Nz98lJ3v8ci6Z0Vwams4TCPrSSyHq1uBVQrkoecPMt9vm5ZbUifXd~IHk1JuuRUuTjTEyMX0E7uI1kTO8oMhgwv-fafeYC2EW4lhE4qu15PgbBAk5HR2-KuBejxUU5lB71tO0NPyWNylyrHvDrKcpEprKmBbC5apAuieFpEYWZ-5jatbXWTIVjnA4ziAmF1jjxk-gN6DJoDR78OKlsie100ZLA65Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  {
    title: "الأسرى الفلسطينيون والأمراض الناتجة عن التعذيب ونقص الرعاية الطبية",
    href: "#",
    description:
      "يعيش الأسرى الفلسطينيون في السجون الصهيونية، أوضاعاً استثنائية من الناحية الصحية، قل ما يعيشها أسرى أو معتقلون في مناطق أخرى، فهم يتعرضون إلى أساليب منهجية تؤدي حتماً لإضعاف أجساد الكثيرين منهم.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/be72/f7f2/0de681555546af7631cc931217016176?Expires=1663545600&Signature=XJmsshNJ4J1RhajtyIGCYyoQKb46JSDzC8P5fOlghq8uv4XvSflQn3lYCyx0I0QYMvvSRjRXcX5QKjDLIpIC1ziDV~HNDp85VjRc7McZJXBaDa7moW47dPFN8Nz98lJ3v8ci6Z0Vwams4TCPrSSyHq1uBVQrkoecPMt9vm5ZbUifXd~IHk1JuuRUuTjTEyMX0E7uI1kTO8oMhgwv-fafeYC2EW4lhE4qu15PgbBAk5HR2-KuBejxUU5lB71tO0NPyWNylyrHvDrKcpEprKmBbC5apAuieFpEYWZ-5jatbXWTIVjnA4ziAmF1jjxk-gN6DJoDR78OKlsie100ZLA65Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  {
    title: "الأسرى الفلسطينيون والأمراض الناتجة عن التعذيب ونقص الرعاية الطبية",
    href: "#",
    description:
      "يعيش الأسرى الفلسطينيون في السجون الصهيونية، أوضاعاً استثنائية من الناحية الصحية، قل ما يعيشها أسرى أو معتقلون في مناطق أخرى، فهم يتعرضون إلى أساليب منهجية تؤدي حتماً لإضعاف أجساد الكثيرين منهم.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/be72/f7f2/0de681555546af7631cc931217016176?Expires=1663545600&Signature=XJmsshNJ4J1RhajtyIGCYyoQKb46JSDzC8P5fOlghq8uv4XvSflQn3lYCyx0I0QYMvvSRjRXcX5QKjDLIpIC1ziDV~HNDp85VjRc7McZJXBaDa7moW47dPFN8Nz98lJ3v8ci6Z0Vwams4TCPrSSyHq1uBVQrkoecPMt9vm5ZbUifXd~IHk1JuuRUuTjTEyMX0E7uI1kTO8oMhgwv-fafeYC2EW4lhE4qu15PgbBAk5HR2-KuBejxUU5lB71tO0NPyWNylyrHvDrKcpEprKmBbC5apAuieFpEYWZ-5jatbXWTIVjnA4ziAmF1jjxk-gN6DJoDR78OKlsie100ZLA65Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  {
    title: "الأسرى الفلسطينيون والأمراض الناتجة عن التعذيب ونقص الرعاية الطبية",
    href: "#",
    description:
      "يعيش الأسرى الفلسطينيون في السجون الصهيونية، أوضاعاً استثنائية من الناحية الصحية، قل ما يعيشها أسرى أو معتقلون في مناطق أخرى، فهم يتعرضون إلى أساليب منهجية تؤدي حتماً لإضعاف أجساد الكثيرين منهم.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/be72/f7f2/0de681555546af7631cc931217016176?Expires=1663545600&Signature=XJmsshNJ4J1RhajtyIGCYyoQKb46JSDzC8P5fOlghq8uv4XvSflQn3lYCyx0I0QYMvvSRjRXcX5QKjDLIpIC1ziDV~HNDp85VjRc7McZJXBaDa7moW47dPFN8Nz98lJ3v8ci6Z0Vwams4TCPrSSyHq1uBVQrkoecPMt9vm5ZbUifXd~IHk1JuuRUuTjTEyMX0E7uI1kTO8oMhgwv-fafeYC2EW4lhE4qu15PgbBAk5HR2-KuBejxUU5lB71tO0NPyWNylyrHvDrKcpEprKmBbC5apAuieFpEYWZ-5jatbXWTIVjnA4ziAmF1jjxk-gN6DJoDR78OKlsie100ZLA65Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  {
    title: "الأسرى الفلسطينيون والأمراض الناتجة عن التعذيب ونقص الرعاية الطبية",
    href: "#",
    description:
      "يعيش الأسرى الفلسطينيون في السجون الصهيونية، أوضاعاً استثنائية من الناحية الصحية، قل ما يعيشها أسرى أو معتقلون في مناطق أخرى، فهم يتعرضون إلى أساليب منهجية تؤدي حتماً لإضعاف أجساد الكثيرين منهم.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/be72/f7f2/0de681555546af7631cc931217016176?Expires=1663545600&Signature=XJmsshNJ4J1RhajtyIGCYyoQKb46JSDzC8P5fOlghq8uv4XvSflQn3lYCyx0I0QYMvvSRjRXcX5QKjDLIpIC1ziDV~HNDp85VjRc7McZJXBaDa7moW47dPFN8Nz98lJ3v8ci6Z0Vwams4TCPrSSyHq1uBVQrkoecPMt9vm5ZbUifXd~IHk1JuuRUuTjTEyMX0E7uI1kTO8oMhgwv-fafeYC2EW4lhE4qu15PgbBAk5HR2-KuBejxUU5lB71tO0NPyWNylyrHvDrKcpEprKmBbC5apAuieFpEYWZ-5jatbXWTIVjnA4ziAmF1jjxk-gN6DJoDR78OKlsie100ZLA65Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
];

export default function News() {
  return (
    <div className="relative" dir="rtl">
      <div className="relative">
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {posts.map((post, index) => (
            <div
              key={post.title + index}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-56 w-full object-cover"
                  src={post.imageUrl}
                  alt=""
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <Link href={post.href} className="mt-2 block">
                    <a>
                      <p className="text-xl font-semibold text-gray-900">
                        {post.title}
                      </p>
                      <p className="mt-3 pr-2 text-base text-gray-500  border-t border-main-500/50 ">
                        {post.description}
                      </p>
                    </a>
                  </Link>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="ml-3">
                    <div className="flex space-x-1 text-sm text-main-500">
                      <time lang="ar" dateTime={post.date}>
                        {post.date}
                      </time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
