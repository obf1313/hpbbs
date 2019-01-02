import myFetch from '../../../utils/myFetch'
export const GET_PLATE = 'GET_PLATE';

const URL = 'http://localhost:8085/plate.php';

export const getPlate = params => {
    return dispatch => {
        return myFetch(URL,params)
            .then(response => response.json())
            .then(data =>{
                if(data.flag === 0) {
                    const plateData = data.plateData;
                    dispatch({ type: 'GET_PLATE', plateData});
                }
            })
    }
}