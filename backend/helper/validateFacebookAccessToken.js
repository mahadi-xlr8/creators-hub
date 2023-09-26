const axios=require("axios")

module.exports=async function (accessToken) {
  try {
    const response = await axios.get(
      `https://graph.facebook.com/v12.0/me?fields=id&access_token=${accessToken}`
    );

    if (response.data.id) {
      // The access token is valid, and you can trust it.
      return true;
    } else {
      // The access token is not valid.
      return false;
    }
  } catch (error) {
    // An error occurred while validating the access token.
    console.error('Error validating access token:', error);
    return false;
  }
}

