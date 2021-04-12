import Z3DAPI from "../../Z3DAPI/Z3DAPI";

jointModel();

function jointModel() {
    console.log('1');
  let containerDIV = document.createElement("div");
  containerDIV.setAttribute("id", "threeD");
  containerDIV.style["position"] = "absolute";
  containerDIV.style["width"] = "100%";
  containerDIV.style["height"] = "100%";
  containerDIV.style["overflow"] = "hidden";
  containerDIV.style["top"] = "0px";
  containerDIV.style["left"] = "0px";
  document.body.appendChild(containerDIV);
  let api = new Z3DAPI(containerDIV);
}
