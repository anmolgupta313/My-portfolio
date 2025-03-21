import { ImageResponse } from "next/og";


export const runTime="edge";
export const size={
    width:32,
    height:32
};


export const contentType= "image/png"


export default function Icon(){
    return new ImageResponse(
        (
            <div style={{
                fontSize:"1.3rem",
                background:"black",
                width:"100",
                height:"100%",
                display:"flex",
                justifyContent:"center",
                alignItems:'center',
                color:"white",
                fontWeight:"800"
            }}>
A<mark style={{background:"transparent", color:"#3ba0a4"}}>G</mark>
            </div>
        ),{...size}
    )
}