import axios from 'axios';
import authAxios from './AxiosInstance';

export const getassigned = async () => {
  try {
    const res = await authAxios.get(
      "/orders/getorders/getassigned",
      {
        headers: {
          "ngrok-skip-browser-warning": "skip-browser-warning",
        },
      }
    );
    return res.data.data;
  } catch (error:any) {
    console.error("Error fetching assigned Orders:", error.message);
    throw error; 
  }
};

export const getUnassigned= async () => {
    try {
      const res = await authAxios.get(
        "/orders/getorders/getunassigned",
        {
          headers: {
            "ngrok-skip-browser-warning": "skip-browser-warning",
          },
        }
      );
      return res.data.data;
    } catch (error: any) {
      console.error("Error fetching menu list:", error.message);
      throw error
    }
  };
