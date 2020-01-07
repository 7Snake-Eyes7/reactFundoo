import axios from "axios";

let headers = {
    'Content-Type': 'application/json',
      'token': localStorage.getItem('token')
}


var controller={
    getAllLabel(){
        return axios.get("http://localhost:9020/labels/getAllLabel",  {
            headers: headers
        });
    },
    createLabel(labelInformation){
        return axios.post("http://localhost:9020/label/create",labelInformation,{
            headers: headers
        });
    },
    createLabelAndMap(labelInformation,noteId){
        console.log(labelInformation)
        console.log(noteId)
        return axios.post("http://localhost:9020/label/createandmap?noteId="+noteId,labelInformation,{
            headers: headers
        });
    },
    updateLabel(labelInformation){
        console.log(labelInformation)
        return axios.put("http://localhost:9020/label/update",labelInformation,{
            headers: headers
        });
    },
    deletLabel(labelDetails){
        console.log('11111111---',labelDetails)
         return axios.post("http://localhost:9020/label/delete",labelDetails,{
            headers: headers
        })
    },
    addLabel(labelDetail,noteid) {

        return axios.post("http://localhost:9020/label/addlabel?labelId="+labelDetail+"&noteId="+noteid,null,{
            headers: headers
        })
    },
    removeLabel(labelDetail,noteid) {

        return axios.post("http://localhost:9020/label/removelabel?labelId="+labelDetail+"&noteId="+noteid,null,{
            headers: headers
        })
    }
}
export default controller;