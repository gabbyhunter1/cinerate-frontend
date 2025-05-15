import { Skeleton, SVGSkeleton } from './skeleton';

const LoadingSkeleton = () => (
  <>
    <section className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 mt-13 flex flex-col lg:flex-row gap-9 relative">
      <div className="max-w-[1041px] w-full">
        <div className="relative">
          <SVGSkeleton className="object-cover w-full max-h-[545px] h-[545px] " />
          <div className="absolute flex items-center gap-6 bottom-4 right-4">
            <div className="flex gap-2">
              <span className="w-3 h-3"></span>
              <span className="w-3 h-3"></span>
              <span className="w-3 h-3"></span>
            </div>
            <div className="flex gap-1">
              <div className="p-2">
                <SVGSkeleton className="lucide-chevron-left w-[24px] h-[24px]" />
              </div>
              <div className="p-2">
                <SVGSkeleton className="lucide-chevron-right w-[24px] h-[24px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="relative grid w-full grid-cols-[140px_1fr] md:grid-cols-[200px_1fr] place-items-start gap-8">
          <picture>
            <SVGSkeleton className="absolute bottom-0 left-4 lg:h-[300px] lg:w-[200px] rounded-md object-cover md:h-[300px] md:w-[200px] w-[140px] h-[210px]" />
          </picture>
          <div className="flex items-center gap-6 pt-2">
            <div>
              <SVGSkeleton className="group-hover:[&amp;&gt;circle]:fill-primary w-[143px] h-[143px]" />
            </div>
            <div className="flex flex-col gap-3">
              <h2>
                <Skeleton className="w-[88px] max-w-full" />
              </h2>
              <Skeleton className="w-[96px] max-w-[420px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-7">
        <div className="flex justify-between">
          <div className="flex items-center">
            <SVGSkeleton className="w-[24px] h-[24px]" />
            <h3>
              <Skeleton className="w-[40px] max-w-full" />
            </h3>
          </div>
          <div className="px-5 py-2 shadow-[inset_0px_1px_2px_0px_rgba(255,255,255,0.08)]">
            <div className="flex items-center">
              <Skeleton className="w-[64px] max-w-full" />
              <SVGSkeleton className="lucide-chevron-right w-[24px] h-[24px]" />
            </div>
          </div>
        </div>
        <ul className="flex flex-col gap-6">
          <li>
            <div className="relative h-[250px] lg:h-[180px]">
              <SVGSkeleton className="object-cover overflow-hidden rounded-2xl w-full h-full" />
              <div className="absolute"></div>
              <div className="absolute top-5 left-3 right-3 grid grid-cols-[100px_1fr] lg:grid-cols-[80px_1fr] gap-5 lg:gap-3">
                <SVGSkeleton className="w-full h-4" />
                <div className="relative flex flex-col">
                  <h3>
                    <Skeleton className="w-[88px] max-w-full" />
                  </h3>
                  <Skeleton className="lg:hidden max-h-[180px] line-clamp-4 max-w-full" />
                </div>
              </div>
              <div className="absolute flex items-center gap-3 bottom-2 right-4">
                <span>
                  <Skeleton className="w-[32px] max-w-full" />
                </span>
                <div>
                  <div>
                    <SVGSkeleton className="group-hover:[&amp;&gt;circle]:fill-primary w-[50px] h-[50px]" />
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="relative h-[250px] lg:h-[180px]">
              <SVGSkeleton className="object-cover overflow-hidden rounded-2xl w-full h-full" />
              <div className="absolute"></div>
              <div className="absolute top-5 left-3 right-3 grid grid-cols-[100px_1fr] lg:grid-cols-[80px_1fr] gap-5 lg:gap-3">
                <SVGSkeleton className="w-full h-4" />
                <div className="relative flex flex-col">
                  <h3>
                    <Skeleton className="w-[48px] max-w-full" />
                  </h3>
                  <Skeleton className="lg:hidden max-h-[180px] line-clamp-4 max-w-full" />
                </div>
              </div>
              <div className="absolute flex items-center gap-3 bottom-2 right-4">
                <span>
                  <Skeleton className="w-[32px] max-w-full" />
                </span>
                <div>
                  <div>
                    <SVGSkeleton className="group-hover:[&amp;&gt;circle]:fill-primary w-[50px] h-[50px]" />
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="relative h-[250px] lg:h-[180px]">
              <SVGSkeleton className="object-cover overflow-hidden rounded-2xl w-full h-full" />
              <div className="absolute"></div>
              <div className="absolute top-5 left-3 right-3 grid grid-cols-[100px_1fr] lg:grid-cols-[80px_1fr] gap-5 lg:gap-3">
                <SVGSkeleton className="w-full h-4" />
                <div className="relative flex flex-col">
                  <h3>
                    <Skeleton className="w-[128px] max-w-full" />
                  </h3>
                  <Skeleton className="lg:hidden max-h-[180px] line-clamp-4 max-w-full" />
                </div>
              </div>
              <div className="absolute flex items-center gap-3 bottom-2 right-4">
                <span>
                  <Skeleton className="w-[32px] max-w-full" />
                </span>
                <div>
                  <div>
                    <SVGSkeleton className="group-hover:[&amp;&gt;circle]:fill-primary w-[50px] h-[50px]" />
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </>
);

export default LoadingSkeleton;
