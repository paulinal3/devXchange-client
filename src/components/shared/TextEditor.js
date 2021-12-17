// import Quill from "quill"
// import "quill/dist/quill.snow.css"
// import { useCallback, useState, useEffect } from "react"


// function TextEditor(props) {

//     const [quill, setQuill] = useState()

//     let toolbarOptions = [
//         ['bold', 'italic', 'underline', 'strike'],
//         ['blockquote', 'code-block'],

//         [{ 'list': 'ordered' }, { 'list': 'bullet' }],
//     ]

//     useEffect(() => {
//         if (quill == null) return

//         const handler = (delta, oldDelta, source) => {
//             if (source !== 'user') return
//         }
//         quill.on('text-change', handler)

//         return () => {
//             quill.off('text-change', handler)
//         }
//     }, [quill])


//     const wrapperRef = useCallback((wrapper) => {
//         if (wrapper === null) return

//         wrapper.innerHTML = ""
//         const editor = document.createElement('div')
//         wrapper.append(editor)

//         const q = new Quill(editor, {
//             modules: {
//                 toolbar: toolbarOptions
//             },
//             theme: 'snow',

//         })
//         setQuill(q)
//     }, [])

//     return (
//         <div id="container" ref={wrapperRef}></div>
//     )
// }

// export default TextEditor