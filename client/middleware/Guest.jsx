import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function Guest(props) {
  const currentUser = useSelector((state) => state.user.users);
  const router = useRouter();

  useEffect(() => {
    if (currentUser) router.push("/");
  }, [currentUser]);

  return <>{props.children}</>;
}

export default Guest;
