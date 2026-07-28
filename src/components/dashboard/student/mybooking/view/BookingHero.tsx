import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function BookingHero() {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://res.cloudinary.com/drvwvre57/image/upload/v1782165211/t3edkfjjajfxzv2atvzs.jpg"
            alt="Tutor"
            width={80}
            height={80}
            className="rounded-full object-cover"
          />

          <div>
            <h2 className="text-2xl font-bold">Bodir Jaman</h2>

            <p className="text-muted-foreground">Cyber Security</p>

            <p className="text-sm text-muted-foreground">
              ⭐ 5 Years Experience
            </p>
          </div>
        </div>

        <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">
          Pending
        </Badge>
      </div>
    </div>
  );
}
