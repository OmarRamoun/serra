import axios, { LOGIN_URL, LOGOUT_URL, READ_URL, REGISTER_URL } from "./axios";
import { v4 as uuidv4 } from "uuid";

export default class Account {

  static #post = async (URL, data) => {
    const response = await axios.post(URL, JSON.stringify(data));
    return response;
  };
  static #saveToLocalStorage = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  };

  static getData = async (email) => {
    const response = await Account.#post(READ_URL, { email });
    return response.data;
  };
  static login = async (email, password) => {
    const response = await Account.#post(LOGIN_URL, { email, password });
    const sessionId = response.data.session.id;
    const readData = await Account.getData(email);
    const { username, profile } = readData.account;
    const currentUser = {
      email,
      username,
      sessionId,
      newsletter: Boolean(profile.newsletter),
    };
    Account.#saveToLocalStorage({ ...currentUser, isLoggedIn: true });
    return currentUser;
  };
  static signup = async (username, email, password, newsletter) => {
    const id = uuidv4();
    const userData = {
      id,
      username,
      email,
      password,
      profile: { newsletter: newsletter.toString() },
    };
    const response = await Account.#post(REGISTER_URL, userData);
    return response.data;
  };
  static logout = async (data) => {
    const response = await Account.#post(LOGOUT_URL, data);
    localStorage.removeItem("user");
    return response.data;
  };
}
