import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

function Authenticated(props) {
  const currentUser = useSelector((state) => state.user.users);
  console.log(currentUser);
  const router = useRouter();

  useEffect(() => {
    if (currentUser.length === 0) {
      router.push("/SignIn");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "you have to login first to play a game",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  }, [currentUser]);

  return <>{props.children}</>;
}

export default Authenticated;
