function handleIdiom(clickedIdiom){
    localStorage.setItem('idiom', clickedIdiom)
    return window.location.reload()
} 
// [title , description , button]
export default handleIdiom