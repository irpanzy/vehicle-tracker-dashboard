import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react";

type Props = {
  query: string;
  setQuery: (query: string) => void;
  statusFilter: "ALL" | "ACTIVE" | "INACTIVE";
  setStatusFilter: (filter: "ALL" | "ACTIVE" | "INACTIVE") => void;
  setPage: (page: number) => void;
};

const VehicleFilters = ({
  query,
  setQuery,
  statusFilter,
  setStatusFilter,
  setPage,
}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between"
    >
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search vehicles..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            className="pl-10 w-64 bg-white border-gray-200 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-gray-500" />
          <div className="flex gap-2">
            {["ALL", "ACTIVE", "INACTIVE"].map((status) => (
              <Badge
                key={status}
                variant={statusFilter === status ? "default" : "outline"}
                className={`cursor-pointer transition-all ${
                  statusFilter === status
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => {
                  setStatusFilter(status as typeof statusFilter);
                  setPage(1);
                }}
              >
                {status}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VehicleFilters;
