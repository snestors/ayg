import { Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { supabase } from "../../lib/supabase";
import { Toast } from "flowbite-react";
import { HiFire } from "react-icons/hi";

function Login() {
  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmitMagicLink = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await supabase.auth
        .signInWithOtp({
          email,
          options: {
            emailRedirectTo: window.location.origin,
          },
        })
        .then((e) => {
          setLoading(false);
          setEmail("");
          setMessage("Link para iniciar session se ha enviado a su correo, por favor ve a tu correo")
          setShowToast(true)
          if (e.error) {
            setMessage(e.error.message);
            setShowToast(true);
          }

          console.log(e);
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await supabase.auth.signInWithPassword({ email, password }).then((e) => {
        if (e.error) {
            setMessage(e.error.message);
          setShowToast(true);
        }

        console.log(e);
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen ">
          {showToast && (
            <div className="p-5 ">
              <Toast>
                <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200">
                  <HiFire className="h-5 w-5" />
                </div>
                <div className="ml-3 text-sm font-normal">{message}</div>
                <Toast.Toggle onDismiss={() => setShowToast(false)} />
              </Toast>
            </div>
          )}
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Iniciar sesión en su cuenta
              </h1>
              <form
                onSubmit={handleSubmit}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <Label
                    name="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Tu correo electrónico
                  </Label>
                  <TextInput
                    value={email}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="name@company.com"
                    required=""
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <Label
                    name="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                   
                  >
                    Contraseña
                  </Label>
                  <TextInput
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    required=""
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                {password === "" ? (
                  <Button
                    onClick={handleSubmitMagicLink}
                    disabled={loading}
                    type="submit"
                    className="w-full "
                  >
                    {loading ? (
                      <Spinner></Spinner>
                    ) : (
                      " Iniciar sesión MagicLink"
                    )}
                  </Button>
                ) : (
                  <Button disabled={loading} type="submit" className="w-full ">
                    {loading ? <Spinner></Spinner> : " Iniciar sesión"}
                  </Button>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
