import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reports — girlymediametrics",
  description: "Strategic brand analysis and research reports.",
};

export default function ReportsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
