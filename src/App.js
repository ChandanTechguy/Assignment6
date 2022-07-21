// import React, { useEffect, useState } from 'react'
// import './App.css';



// function App() {
//   const initialvalues = { title: "", imageUrl: "", description: "" }
//   const [formValues, setFormValues] = useState(initialvalues)
//   const [formErrors, setFormErrors] = useState({})
//   const [isSubmit, setIsSubmit] = useState(false)


//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormValues({ ...formValues, [name]: value })
//     console.log(formValues)
//   }
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormErrors(validate(formValues))
//     setIsSubmit(true)
//   };
//   const handleCancel = (e) => {
//     e.preventDefault();
//     setFormErrors(validate(formValues))
//     setIsSubmit(false)
// };
//   useEffect(() => {
//     console.log(formErrors)
//     if (Object.keys(formErrors).length === 0 && isSubmit) {
//       console.log(formValues)
//     }
//   })

//   const validate = (values) => {
//     const errors = {}
//     if (!values.title) {
//       errors.title = "title is required !"
//     }
//     if (!values.imageUrl) {
//       errors.imageUrl = "imageUrl is required !"
//     }
//     if (!values.description) {
//       errors.description = "description is required !"
    
//     }
//     return errors;
//   }
//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//         <h1>Blog Information</h1>

//         <div ClassName="ui divider"></div>
//         <div ClassName="ui form"></div>
//         <div ClassName="field"></div>
//         <lable><strong>Title : </strong></lable>
//         <input required minLength={3} maxLength={10} type="text" name="title" placeholder="enter title" value={formValues.title} onChange={handleChange} />
//         <p>{formErrors.title}</p>

//         < div ClassName="field">
//           <lable><strong>imageUrl : </strong></lable>
//           <input  type="text" name="imageUrl" placeholder="enter imageUrl" value={formValues.imageUrl} onChange={handleChange} />
//         </div>
//         <p>{formErrors.imageUrl}</p>

//         < div ClassName="field">
//           <lable><strong>Description : </strong></lable>
//           <textarea type="text" name="description" placeholder="enter description" value={formValues.description} onChange={handleChange} />
//         </div>
//         <p>{formErrors.description}</p>

//         <button className="fluid ui button blue" >Create</button>
//       </form >
//     </div >
//   );
// }

// export default App;
import './App.css';
import Homepage from './Components/HomePage'
import Blog from './Components/Blog'
import BlogDetails from './Components/BlogDetails'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path='/blogDetails' element={<BlogDetails/>} />
        <Route path='/createBlog' element={<Blog/>} />
        
      </Routes>
      </Router>
    </div>
  );
}

export default App;