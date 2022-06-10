import Axios from "axios";
import {useRouter} from "next/router";

export default function Login() {
  const router = useRouter();
  function login() {
    Axios.post("/api/login").then((res) => {
      if (res.status === 200) {
        //로그인 성공
        router.push("/admin");
      }
    });
  }

  return (
    <div>
      <div>
        <div>
          id <input type="text" className="border"/>
          pw <input type="text" className="border"/>
          <button onClick={login}>login</button>
        </div>
      </div>
    </div>
  )
}