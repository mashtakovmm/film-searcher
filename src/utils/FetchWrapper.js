const TOKEN = window.localStorage.getItem("token")
const url = `http://www.omdbapi.com/?apikey=${TOKEN}&`

async function fetchWithTitle(title, year=null) {
    let response
    if(year==null) {
        response = await fetch(`${url}t=${title}`)
    } else {
        response = await fetch(`${url}t=${title}&y=${year}`)
    }
    return response
}

export default fetchWithTitle