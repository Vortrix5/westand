import img1 from "../CoursesImgs/1.png"
import img2 from "../CoursesImgs/2.png"
import img3 from "../CoursesImgs/3.png"
import img4 from "../CoursesImgs/4.png"
import img5 from "../CoursesImgs/5.png"
import img6 from "../CoursesImgs/6.png"
import img7 from "../CoursesImgs/7.png"
import img8 from "../CoursesImgs/8.png"
import img9 from "../CoursesImgs/9.png"
import img10 from "../CoursesImgs/10.png"
import img11 from "../CoursesImgs/11.png"
import img12 from "../CoursesImgs/12.png"
import img13 from "../CoursesImgs/13.png"
import img14 from "../CoursesImgs/14.png"
import img15 from "../CoursesImgs/15.png"
import img16 from "../CoursesImgs/16.png"
import img17 from "../CoursesImgs/17.png"
import chat from "../CoursesImgs/chat.png"
import camp from "../CoursesImgs/compains.png"
import kids1 from "../CoursesImgs/Kids/recycle.jpg"
import kids2 from "../CoursesImgs/Kids/no_bully.png"
import kids3 from "../CoursesImgs/Kids/no_racism.jpg"
import kids4 from "../CoursesImgs/Kids/solidarity.jpg"


const initState = {
    auth: false,
    courses:[
        {title:"1. No Poverty",desc:"End poverty in all its forms everywhere",color:"#E5233D",progress:32, img: img1},
        {title:"2. Zero Hunger",desc:"End hunger, achieve food security and improved nutrition",color:"#DDA73A",progress:14, img: img2},
        {title:"3. Good Health and Well-Being",desc:"Ensure healthy lives and ensure well being for all at all ages",color:"#4CA146",progress:34, img: img3},
        {title:"4. Quality Education",desc:"Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all",color:"#C7212F",progress:76, img: img4},
        {title:"5. Gender Equality",desc:"Achieve gender equality and enpower all women and girls",color:"#EE402D",progress:0, img: img5},
        {title:"6. Clean water and sanitation",desc:"Ensure availibity and and sustainable management of water and sanitation for all",color:"#28BFE6",progress:63, img: img6},
        {title:"7. Affordable and clean energy",desc:"Ensure access to affordable, reliable, sustainable and modern energy for all",color:"#FBC412",progress:82, img: img7},
        {title:"8. Decent work and economic growth",desc:"Promote sustained inclusive economic growth, full and productive employment and decent work for all",color:"#A31D44",progress:100, img: img8},
        {title:"9. Industry, Innovation and Infrastructure",desc:"Build resilient infrastructure, promote inclusive and sustainable and faster innovation",color:"#F26A2E",progress:23, img: img9},
        {title:"10. Reduced Inequalities",desc:"Reduce inequality within and among countries",color:"#DF1A83",progress:54, img: img10},
        {title:"11. Sustainable Cities and Communities",desc:"Make cities and human settlements inclusive, safe, resilient and sustainable",color:"#F9A030",progress:49, img: img11},
        {title:"12. Responsible consumption and production",desc:"Ensure sustainable comsumption and production patterns",color:"#BF8D2C",progress:90, img: img12},
        {title:"13. Climate action",desc:"Take urgent action to combat climate change and its impact",color:"#407F46",progress:48, img: img13},
        {title:"14. Life below water",desc:"Conserve and sustainably use of the oceans, seas, and marine resources for sustainable development",color:"#1F97D4",progress:83, img: img14},
        {title:"15. Life on land",desc:"Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and half and reverse land degradation and halt biodeversity",color:"#59BA47",progress:53, img: img15},
        {title:"16. Peace, justice and strong institutions",desc:"Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels",color:"#136A9F",progress:46, img: img16},
        {title:"17. Partnerships for the goals",desc:"Strengthen the means of implementation and revitalize the global parternships for sustainable development",color:"#14496B",progress:52, img: img17}
        
    ],
    kids: [
    {title:"1. Recycling",desc:"Start recycling from a young age to maintain a sustainable life style",color:"green",progress:32, img: kids1},
    {title:"2. Stop to bullies",desc:"Stop bullies at school in all its forms everywhere",color:"red",progress:32, img: kids2},
    {title:"3. No racism",desc:"End racism betwween kids in all its forms everywhere",color:"brown",progress:32, img: kids3},
    {title:"4. Solidarity",desc:"Rely on solidarity rather than loneliness",color:"pink",progress:32, img: kids4},

    ],
     chosenCourse:{
            
    },
    chosenKid:{
            
    },
    img: chat
    
}

export default function genReducer(state = initState, action) {
    switch (action.type) {
        case "ON_AUTH": return {...state, auth: true}
        case "ON_OPEN": return {...state, chosenCourse: action.payload}
        case "CHAT_CHANGE": return {...state, img: chat}
        case "CAMP_CHANGE": return {...state, img: camp}
        case "KIDS_OPEN": return {...state, chosenKid: action.payload}

            default: return state
    }


}
