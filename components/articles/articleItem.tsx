import Link from "next/link";

interface ArticleItemProps {
    title?: string;
    date?: string;
    href?: string;
 
  }
  
  export default function ArticleCard({
    title,
      date,
      href
    
  }: ArticleItemProps) {
    return (
        <div className="w-full h-full">
            {!!href && 

        <Link href={href}>
          <div className="bg-main-500/30  py-[29px] px-[16px] rounded-2xl shadow-xl">
            <div className="md:flex gap-4">
         
              <div className="">
                                <h1 className="text-xl font-bold text-main-500">{title}</h1>
              
              </div>
  
            </div>
          </div>
        </Link>
            }
        <div className="pt-4">
       
        </div>
      </div>
    );
  }
  