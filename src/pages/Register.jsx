import { useEffect } from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Input from "../components/shared/Input";
import { api } from "../utils/api";

export default function Register() {
  const userId = localStorage.getItem("user");

  if (!userId) return <Navigate to="/" replace />;
  
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [telephone, setTelephone] = useState(0);
  const [defaultInfo, setDefaultInfo] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get(`/user/${userId}`)
      .then((res) => setDefaultInfo(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  const submit = (event) => {
    event.preventDefault();
    api
      .put(`/user/${userId}`, {
        nom,
        prenom,
        telephone,
      })
      .then((res) => {
        if (res.data.result) {
          localStorage.setItem("confirmed", 1);
          navigate("/");
        } else alert("There was an error");
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="section-layout w-full">
      <form onSubmit={submit} className="space-y-4 w-96 mx-auto">
        <h1 className="title-sm flex justify-center">Enter your information</h1>
        <Input
          label="Family name"
          setValue={setNom}
          type="text"
          defaultValue={defaultInfo.nom}
        />
        <Input
          label="First name"
          setValue={setPrenom}
          type="text"
          defaultValue={defaultInfo.prenom}
        />
        <Input
          label="Phone number"
          setValue={setTelephone}
          type="number"
          defaultValue={defaultInfo.telephone}
        />
        <button
          className="primary-btn-sm flex justify-center mx-auto"
          type="submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
