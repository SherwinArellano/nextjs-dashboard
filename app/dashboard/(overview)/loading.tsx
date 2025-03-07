// Since page.tsx of this route is already handling Suspense type of data loading
// there's really no need for this I think since loading a page is quick anyways
// and the page.tsx doesn't handle any asynchronous stuff anymore
import DashboardSkeleton from "@/app/ui/skeletons";

export default function Loading() {
  return <DashboardSkeleton />;
}
