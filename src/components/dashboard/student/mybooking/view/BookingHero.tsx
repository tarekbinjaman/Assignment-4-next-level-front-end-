import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function BookingHero({ data }) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={data?.tutor?.user?.image}
            alt={data?.tutor?.user?.name}
            width={72}
            height={72}
            className="h-20 w-20 rounded-full object-cover"
          />

          <div>
            <h2 className="text-2xl font-bold">
              {data?.tutor?.user?.name}
            </h2>

            <p className="text-muted-foreground">
              {data?.tutor?.categories?.[0]?.name}
            </p>

            <p className="text-sm text-muted-foreground">
              ⭐ {data?.tutor?.experience} Years Experience
            </p>
          </div>
        </div>

        <Badge
          className={
            data?.status === "PENDING"
              ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-100"
              : data?.status === "COMPLETED"
              ? "bg-green-100 text-green-700 hover:bg-green-100"
              : data?.status === "CONFIRMED"
              ? "bg-blue-100 text-blue-700 hover:bg-blue-100"
              : "bg-red-100 text-red-700 hover:bg-red-100"
          }
        >
          {data?.status}
        </Badge>
      </div>
    </div>
  );
}