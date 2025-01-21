import { getStatsAction } from "@/utils/actions";

const StatsPage = async () => {
  const stats = await getStatsAction();
  console.log(stats);
  return <h1 className="text-4xl">Stats Page</h1>;
};

export default StatsPage;

// The new version of the code calls the `getStatsAction` function to fetch the stats data from the server.
