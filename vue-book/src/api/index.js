let axios=require("axios");
axios.defaults.baseURL="http://localhost:3000";
axios.interceptors.response.use((res)=>{
  return res.data;
});
export let getSliders=()=>{
  return axios.get("/sliders");
};
export let getHotBooks=()=>{
  return axios.get("/hot");
};
export let getBooks=()=>{
  return axios.get("/book");
};
export let removeBook=(id)=>{
  return axios.delete(`/book?id=${id}`);
};
export let getOneBook=(id)=>{
  return axios.get(`/book?id=${id}`);
};
export let updateBook=(id,data)=>{
  return axios.put(`/book?id=${id}`,data);
};
export let addbook=(book)=>{
  return axios.put("/add",book);
};
export let getAll=()=>{
  return axios.all([getSliders(),getHotBooks()]);
};
export let pagination=(offset)=>{
  return axios.get(`/page?offset=${offset}`);
}
