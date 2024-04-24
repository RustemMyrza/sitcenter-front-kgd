import axios from "axios";
import { BOARD_API_URL } from "@/utils/api";

export const getBoardList = async () => {
  const url = BOARD_API_URL;
  try {
    const result = await axios.get(url, {
      headers: {
        bearer: localStorage.getItem("authToken"),
      },
    });
    return result.data.data;
    // console.log(result.data.data)
  } catch (err) {
    console.log(err);
  }
};

export const deleteBoard = async (id) => {
  const url = `${BOARD_API_URL}/${id}`;
  try {
    await axios.delete(url, {
      headers: {
        bearer: localStorage.getItem("authToken"),
      },
    }); 
    return true;

    // console.log(result.data.data)
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const createBoard =async(object) =>{
    try{
        const result = await axios.post(BOARD_API_URL, object, {
            headers: {
                bearer: localStorage.getItem("authToken"),
            },
        });
        return result;
    }catch(err){
        console.log(err);
    }
}
