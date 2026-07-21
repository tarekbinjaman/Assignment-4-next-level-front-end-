"use client";

import Image from "next/image";
import { Mail, User } from "lucide-react";

type Student = {
  id: string;
  name: string;
  image?: string;
  email: string;
};

type Props = {
  student: Student;
};

export default function StudentCard({ student }: Props) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-xl bg-primary/10 p-2 text-primary">
          <User size={20} />
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Student Information
          </h2>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Information about the learner.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-5">
        {student.image ? (
          <Image
            src={student.image}
            alt={student.name}
            width={72}
            height={72}
            className="h-18 w-18 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-primary text-2xl font-bold text-white">
            {student.name.charAt(0)}
          </div>
        )}

        <div>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
            {student.name}
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Student
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-slate-200 p-5 dark:border-slate-700">
        <div className="flex items-center gap-3">
          <Mail className="text-primary" size={18} />

          <div>
            <p className="text-xs uppercase tracking-wide text-slate-500">
              Email
            </p>

            <p className="font-medium text-slate-900 dark:text-white">
              {student.email}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}