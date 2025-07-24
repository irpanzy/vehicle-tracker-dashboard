import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Props = {
  page: number;
  maxPage: number;
  setPage: (page: number) => void;
};

const VehiclePagination = ({ page, maxPage, setPage }: Props) => {
  if (maxPage <= 1) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 mt-6"
    >
      <Button
        variant="outline"
        onClick={() => setPage(Math.max(page - 1, 1))}
        disabled={page === 1}
        className="bg-[#2B3F4D] text-gray-300 hover:bg-[#1B3C53] hover:text-white disabled:opacity-50"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        <span className="hidden md:inline">Previous</span>
      </Button>

      <div className="hidden md:flex items-center gap-2">
        {Array.from({ length: Math.min(5, maxPage) }, (_, i) => {
          const pageNum = i + 1;
          const isActive = page === pageNum;
          return (
            <Button
              key={pageNum}
              size="sm"
              onClick={() => setPage(pageNum)}
              disabled={isActive}
              className={
                isActive
                  ? "bg-[#1B3C53] text-white cursor-default"
                  : "bg-[#2B3F4D] text-gray-300 hover:bg-[#1B3C53] hover:text-white border border-white/10"
              }
            >
              {pageNum}
            </Button>
          );
        })}
        {maxPage > 5 && (
          <>
            <span className="text-gray-400">...</span>
            <Button
              size="sm"
              onClick={() => setPage(maxPage)}
              disabled={page === maxPage}
              className={
                page === maxPage
                  ? "bg-[#1B3C53] text-white cursor-default"
                  : "bg-[#2B3F4D] text-gray-300 hover:bg-[#1B3C53] hover:text-white border border-white/10"
              }
            >
              {maxPage}
            </Button>
          </>
        )}
      </div>

      <Button
        variant="outline"
        onClick={() => setPage(Math.min(page + 1, maxPage))}
        disabled={page === maxPage}
        className="bg-[#2B3F4D] text-gray-300 hover:bg-[#1B3C53] hover:text-white disabled:opacity-50"
      >
        <span className="hidden md:inline">Next</span>
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </motion.div>
  );
};

export default VehiclePagination;
