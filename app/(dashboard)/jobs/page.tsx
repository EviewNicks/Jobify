import { getAllJobsAction } from "@/utils/actions";
import JobsList from "@/components/JobList";
import SearchForm from "@/components/SearchForm";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

async function AllJobsPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["jobs", "", "all", 1],
    queryFn: () => getAllJobsAction({}),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SearchForm />
      <JobsList />
    </HydrationBoundary>
  );
}

export default AllJobsPage;
