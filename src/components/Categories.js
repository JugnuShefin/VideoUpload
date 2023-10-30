import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import uniqid from 'uniqid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, deleteCategory, getAllCategory, getVideo, updateCategory } from '../services/allapis';
import { useEffect } from 'react';
import { Trash } from 'react-feather';

function Categories() {
  //state to hold input, id and video array
  const [catInputs, setCatInputs] = useState({
    id: "",
    name: "",
    videos: []
  })

  const [categories, setCategories] = useState({
    id: "",
    name: "",
    videos: []
  })

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const setInputs = (e) => {
    const { value, name } = e.target
    setCatInputs({ ...catInputs, [name]: value })
  }

  // console.log(catInputs);

  const addData = async() => {
    let id = uniqid()
    setCatInputs({ ...catInputs, ["id"]:id })

    const { name } = catInputs
    if (name == "") {
      toast.error("Please provide caption", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    else {
      // api call
      const result = await addCategory(catInputs)
      if (result.status >= 200 && result.status < 300) {
        setShow(false);
        //console.log(result.data.name);
        getAllCategories()
        toast.success(`${result.data.name} added`, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
  }
  // console.log(catInputs);

  const getAllCategories = async () => {
    const result = await getAllCategory()
    // console.log(result);
    if (result.status >= 200 && result.status < 300) {
      setCategories(result.data);
    }
  }

  // console.log(categories);

  const removeCategory = async (id) => {
    const result = await deleteCategory(id)

    if (result.status >= 200 && result.status < 300) {
      //refresh category list
      getAllCategories()
    }
  }


  useEffect(() => {
    getAllCategories()
  }, [])

  const dragOver=(e)=>{
    e.preventDefault()
    console.log("dragged over the category");
  }

  const dropped=async(e,id)=>{
    console.log("dropped...cat Id -"+id);

    //video id access
    const videoId=e.dataTransfer.getData("cardId")
    console.log(videoId);

    //access video data from backend
    const {data}=await getVideo(videoId)
    console.log(data);

    //select dropped category from all categories
    const selectedCategory=categories.find(i=>i.id==id)
    console.log(selectedCategory);

    //update category object with video data
    selectedCategory.videos.push(data)
    console.log(selectedCategory);

    //api call to update the changed category in backend
    await updateCategory(id,selectedCategory)
    getAllCategories()
  }

  return (
    <div>
      <Button className='w-100' variant="light" onClick={handleShow}>Add Category</Button>

      {
        categories.length > 0 ? (
          categories.map(i => (
            <div droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>dropped(e,i.id)} className='border mt-3 p-3'>
              <p className='fs-3'>{i.name}</p>
              <div className='text-end'>
                <Trash onClick={()=>removeCategory(i.id)} size={55} className='text-danger btn'></Trash>
              </div>
              {
                i.videos.map(j=>(
                  <div>
                    <img style={{height:'70px',width:'70px',padding:'5px'}} src={j.cover_image} alt=""></img>
                  </div>
                ))
              }
            </div>
          ))
        ) : <h6>No Categories added yet</h6>
      }

      <Modal show={show} onHide={handleClose}>
        <Modal.Body className='bg-black border mt-2'>
          <Modal.Title><h3>Add New Category</h3></Modal.Title>

          <FloatingLabel controlId='floatingInput' label="Category Name" className="mb-3 mt-5 text-dark">
            <Form.Control onChange={(e) => setInputs(e)} name="name" type="text" />
          </FloatingLabel>

        </Modal.Body>
        <Modal.Footer className='bg-black border' k>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="light" onClick={addData}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </div>
  )
}

export default Categories