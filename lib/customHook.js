import useSWR from "swr";

const fetcher = async (url) => {
  const response = await fetch(url);
  const data = await response.json(); //{user:{}}
  return { User: data?.User || null };
};

export default async function useUser() {
  const res = await fetch("./api/user");
  const data = await res.json();
  const User = data?.User || null;

  // const hasFinished = Boolean(data);
  // const hasUser = Boolean(User);
  // useEffect(() => {
  //   if (!redirectTo || !hasFinished) return;

  //   if (
  //     (redirectTo && !hasUser && !redirectIfFound) ||
  //     (redirectIfFound && hasUser)
  //   ) {
  //     Router.push(redirectTo);
  //   }
  // }, [redirectTo, hasFinished, hasUser, redirectIfFound]);

  return User;
}
