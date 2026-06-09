import { useQuery } from "@tanstack/react-query";
import { getMe } from "../../services/authService";

export const useMe = () => {
  return useQuery({
    queryKey: ["me"],
    queryFn: getMe,
    retry: false, // If request fails, stop immediately
    refetchOnWindowFocus: false, // When user leaves tab and comes back, TanStack Query refetches data. Sometimes annoying. so "false"
  });
};
