import { baseUrl } from "./baseurl";
import { commonRequest } from "./commonrequest";

//add video => http://localhost:5000/videos

export const addVideo=async(body)=>{
    return await commonRequest('POST',`${baseUrl}/videos`,body)
}

//get all videos
export const getAllVideos=async()=>{
    return await commonRequest('GET',`${baseUrl}/videos`,{})
}

//delete single video
export const deleteVideo=async(id)=>{
    return await commonRequest('DELETE',`${baseUrl}/videos/${id}`,{})
}

//add category
export const addCategory=async(body)=>{
    return await commonRequest('POST',`${baseUrl}/categories`,body)
}

//get all categories
export const getAllCategory=async()=>{
    return await commonRequest('GET',`${baseUrl}/categories`,{})
}

//category delete
export const deleteCategory=async(id)=>{
    return await commonRequest('DELETE',`${baseUrl}/categories/${id}`,{})
}

//add history
export const addHistory=async(body)=>{
    return await commonRequest('POST',`${baseUrl}/histories`,body)
}

//get all histories
export const getAllHistory=async()=>{
    return await commonRequest('GET',`${baseUrl}/histories`,{})
}

//category delete
export const deleteHistory=async(id)=>{
    return await commonRequest('DELETE',`${baseUrl}/categories/${id}`,{})
}

//drag and drop
export const abc=async()=>{
    return await commonRequest('GET',`${baseUrl}/histories`,{})
}


//access single video
export const getVideo=async(id)=>{
    return await commonRequest('GET',`${baseUrl}/video/${id}`)
}

//update category
export const updateCategory=async(id,body)=>{
    return await commonRequest('PUT',`${baseUrl}/categories/${id}`,body)
}