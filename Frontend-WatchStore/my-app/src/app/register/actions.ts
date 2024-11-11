"use server";

export async function register(formData: FormData) {
  const name = formData.get("name");
  const lastname = formData.get("lastname");
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");

  const bodyPayload = {
    first_name: name,
    last_name: lastname,
    username,
    email,
    password,
  };

  console.log("Register bodyPayload:", bodyPayload);

  try {
    const response = await fetch(`${process.env.API_HOST}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyPayload),
    });
    console.log("Register response:", response.status);
    if (response.status === 400) {
      throw new Error("Something went wrong");
    }
    return { data: response.json(), error: null };
  } catch (error) {
    return { data: null, error: (error as Error).message };
  }
}
