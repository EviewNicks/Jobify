import { StatsLoadingCard } from "@/components/StatsCard";
function loading() {
  return (
    <div className="grid md:gap-2 lg:gap-4 lg:grid-cols-3">
      <StatsLoadingCard />
      <StatsLoadingCard />
      <StatsLoadingCard />
    </div>
  );
}
export default loading;
