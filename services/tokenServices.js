import jwt from "jsonwebtoken";

const { JWT_ACCESS_SECRET, JWT_REFRESH_SECRET } = process.env;

export const generateTokens = (payload) => {
  const accessToken = jwt.sign(payload, JWT_ACCESS_SECRET, {
    expiresIn: "1d",
  });

  const refreshToken = jwt.sign(payload, JWT_REFRESH_SECRET, {
    expiresIn: "30d",
  });

  return { accessToken, refreshToken };
};

export const validateAccessToken = (token) => {
  try {
    const userData = jwt.verify(token, JWT_ACCESS_SECRET);
    return userData;
  } catch (error) {
    return null;
  }
};

export const validateRefreshToken = (token) => {
  try {
    const userData = jwt.verify(token, JWT_REFRESH_SECRET);
    return userData;
  } catch (error) {
    return null;
  }
};
