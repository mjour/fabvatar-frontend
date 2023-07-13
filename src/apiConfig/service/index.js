import axios from "axios";
import Apiconfigs from "../config";
import { toast } from "react-toastify";
const usetToken = window.localStorage.getItem("accessToken");
export const dataPostHandler = async (endPoint, dataToSend) => {
  console.log("endpoint = ", endPoint)
  try {
    const res = await axios({
      method: "POST",
      url: Apiconfigs[endPoint],
      headers: {
        token: usetToken,
      },
      data: dataToSend,
    });
    if (res) {
      return res;
    } else {
      return false;
    }
  } catch (error) {
    console.log("error ")
    console.error(error);
    toast.error(error?.response?.data?.message);
    return false;
  }
};

export const getDataHandlerAPI = async (endPoint, token) => {
  try {
    const res = await axios({
      method: "GET",
      url: Apiconfigs[endPoint],
      headers: {
        token: token,
      },
    });
    if (res.data.responseCode === 200) {
      return res.data.result;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const patchAPIHandler = async (endPoint, dataToSend) => {
  try {
    const res = await axios({
      method: "PATCH",
      url: Apiconfigs[endPoint],
      headers: {
        token: usetToken,
      },
      data: dataToSend,
    });
    if (res.data.code === 200) {
      return res.data.result;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.responseMessage);
    return false;
  }
};

export const putAPIHandler = async (endPoint, dataToSend) => {
  try {
    const res = await axios({
      method: "PUT",
      url: Apiconfigs[endPoint],
      headers: {
        token: usetToken,
      },
      data: dataToSend,
    });
    console.log("reponse-----asa", res);
    if (res) {
      return res;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.responseMessage);
    return false;
  }
};

export const getParticularObjectDataHanndler = async (endPoint, _id) => {
  try {
    const res = await axios({
      method: "GET",
      url: `${Apiconfigs[endPoint]}/${_id}`,
      headers: {
        token: usetToken,
      },
    });
    if (res.data.responseCode === 200) {
      return res.data.result;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const deleteDataAPIHandler = async (endPoint, _id) => {
  try {
    const res = await axios({
      method: "DELETE",
      url: Apiconfigs[endPoint],
      headers: {
        token: usetToken,
      },
      params: {
        _id: _id,
      },
    });
    if (res.data.code === 200) {
      return res.data;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const postAPIHandlerIdInPath = async (endPoint, _id) => {
  try {
    const res = await axios({
      method: "POST",
      url: `${Apiconfigs[endPoint]}/${_id}`,
      headers: {
        token: usetToken,
      },
    });
    if (res.data.responseCode === 200) {
      return res;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.responseMessage);
    return false;
  }
};
