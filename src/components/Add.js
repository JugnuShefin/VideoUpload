import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import uniqid from 'uniqid';
import { addVideo } from '../services/allapis';
import { commonrequest } from '../services/commonrequest';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({update}) {

    //state to hold input data
    const [inputs, setInputs] = useState([{
        id: "",
        caption: "",
        cover_image: "",
        video_url: ""
    }])

    //function for onChange()
    const setValues = (e) => {
        let { value, name } = e.target
        //console.log(value,name);
        setInputs({ ...inputs, [name]: value })
    }
    console.log(inputs);

    //function to add button click
    const addHandle = async () => {
        let id = uniqid()
        //console.log(id);
        setInputs({ ...inputs, ["id"]: id })

        const { caption, cover_image, video_url } = inputs

        if (caption == "" || cover_image == "" || video_url == "") {
            toast.error("All inputs are required", {
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
            const result = await addVideo(inputs)
            console.log(result);

            if (result.status >= 200 && result.status < 300) {

                //update state of home
                update(result.data)

                toast.success("Video added", {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                setShow(false)
            }
        }
    }

    //function to extract video url
    const extractUrl = (e) => {
        let videoUrl = e.target.value
        //console.log(videoUrl);
        if (videoUrl.includes("v=")) {
            let subUrl = videoUrl.split("v=")[1]
            //console.log(subUrl);
            let finalUrl = `https://www.youtube.com/embed/${subUrl}?autoplay=1`

            setInputs({ ...inputs, ["video_url"]: finalUrl })
        }
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);  //called in the add button click function - refer line 28 to 30 so we added setShow(false) in that function
    const handleShow = () => setShow(true);

    return (
        <div>
            <i onClick={handleShow} class="fa-solid fa-upload fa-fade fa-3x text-warning"></i>

            <Modal show={show} onHide={handleClose}>
                <Modal.Body className='bg-black border mt-0'>
                    <Modal.Title><h1>Upload Video</h1></Modal.Title>

                    <FloatingLabel controlId="floatingInput" label="Video Caption" className="mb-3 mt-5 text-dark">
                        <Form.Control name='caption' onChange={(e) => setValues(e)} type="text" />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingInput1" label="Cover Image URL" className='text-dark'>
                        <Form.Control name='cover_image' onChange={(e) => setValues(e)} type="text" />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingInput2" label="YouTube Video URL" className='text-dark mt-3 mb-5'>
                        <Form.Control onChange={(e) => extractUrl(e)} type="text" />
                    </FloatingLabel>

                </Modal.Body>

                <Modal.Footer className='bg-black'>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="light" onClick={addHandle}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>

            <ToastContainer />
        </div>
    )
}

export default Add