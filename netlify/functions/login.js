exports.handler = async (event) => {
  const password = "boxfullpiece"; // Replace with your desired password

  // Parse the request body (the password entered by the user)
  const requestBody = JSON.parse(event.body);
  const submittedPassword = requestBody.password;

  if (submittedPassword === password) {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Success" }),
    };
  } else {
    return {
      statusCode: 401, // Unauthorized
      body: JSON.stringify({ message: "Incorrect password" }),
    };
  }
};
