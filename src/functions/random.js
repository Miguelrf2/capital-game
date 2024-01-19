import { paises } from "../content/portuguese";
import { countries } from "../content/country";

export function randomizeCountry(){
    const getCookie = localStorage.getItem('idiom')
    
    let choosedIdiom = () => {
        if (getCookie === 'portuguese') {
            return paises
        } else {
            return countries
        }
    } 

    const listCorrect = choosedIdiom()
    var randomNumber = Math.floor(Math.random() * listCorrect.length)
    const shuffled_array = listCorrect[randomNumber]

    return shuffled_array
}