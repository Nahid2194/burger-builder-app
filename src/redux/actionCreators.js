import *as actionTypes from './actionTypes';
export const addIngredient = igtype => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        payload: igtype,

    }
}
export const removeIngredient = igtype => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        payload: igtype,

    }
}
export const updateIngredient = () => {
    return {
        type: actionTypes.UPDATE_INGREDIENT,

    }
}
export const resetIngredients = () => {
    return {
        type: actionTypes.RESET_INGREDIENTS,
    }
}