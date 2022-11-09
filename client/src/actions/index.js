import axios from 'axios';
import {
    GET_COUNTRIES,
    GET_DETAIL,
    GET_COUNTRIES_NAME,
    ORD_ALPHA,
    ORD_ALPHA_REV,
    ORD_POP,
    ORD_POP_REV,
    ORD_CONTINENT,
    SHOW_ACTIV,
    FILTER_BY_DB
} from "./const";


export function getCountries() {
    return async (dispatch) => {
        try{
        const res = await axios.get("/countries");
        dispatch({ type: GET_COUNTRIES, payload: res.data });
        } catch (error) {
        console.log(error);
        }
    };
}
export function getCountriesName(name) {
    return async (dispatch) => {
        try {
        const res = await axios.get(
            `/countries?name=${name}`
        );
        dispatch({ type: GET_COUNTRIES_NAME, payload: res.data });
        } catch (error) {
        console.log(error);
        }
    };
    }

export function getDetail(id) {
    return async (dispatch) => {
    const res = await axios.get(`/countries/${id}`);
    dispatch({ type: GET_DETAIL, payload: res.data });
    };
};

export function orderAlpha() {
    return {
    type: ORD_ALPHA,
    };
}

export function orderAlphaRev() {
    return {
    type: ORD_ALPHA_REV,
    };
}

export function orderPop() {
    return {
    type: ORD_POP,
    };
}

export function orderPopRev() {
    return {
    type: ORD_POP_REV,
    };
}

export const orderCont = (payload) => {
    return {
    type: ORD_CONTINENT,
    payload,
    };
};

export const showActiv = (payload) => {
    return {
    type: SHOW_ACTIV,
    payload,
    };
};

export function createCountry(activity) {
    return async function () {
    try {
        const newAct = await axios.post(
        "/activities",
        activity
        );
    } catch (error) {
        return(error);
    }
    };
}
export function filterByDB(payload){
    return {
        type: "FILTER_BY_DB",
        payload
    }
}


// export function deleteActivity(id) {
//   return async function (dispatch) {
//       var json = await axios.delete("http://localhost:3001/activity/" + id);

//       dispatch({
//         type: "DELETE_ACTIVITY",
//         payload: json.data
//       });
//   }
// }

// export function postActivity(payload) {
//   return async (dispatch) => {
//       var json = await axios.post("http://localhost:3001/activity", payload);
//       console.log(json)

//       return json
//       // dispatch({
//       //   type: "POST_ACTIVITY",
//       //   payload: json.data
//       // });
//   };
// }