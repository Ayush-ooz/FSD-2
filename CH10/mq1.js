const mg=require("mongoose")
mg.connect("mongodb://127.0.0.1:27017/mdb2").then(()=>{console.log("Success")}).catch((e)=>{console.log(e)})
const myschema= new mg.Schema({
    course:String,category:String,
    instructor:String,fees:Number,
    duration:Number,active:Boolean,
    mode:{type:String,enum:["online","offline"]}
})
const mymodel=new mg.model("courses",myschema)
const myfun=async()=>{
    try{
    const data=[{course:"MERN",category:"WD",instructor:"ABC",fees:25000,duration:4,active:true,mode:"offline"},{course:"Python",category:"Programming",instructor:"XYZ",fees:18000,duration:3,active:false,mode:"online"},{course:"ML",category:"AI",instructor:"MNO",fees:30000,duration:6,active:true,mode:"offline"},{course:"Data Science",category:"Data analytics",instructor:"DEF",fees:28000,duration:5,active:true,mode:"online"},{course:"UX/UI Design",category:"Design",instructor:"PQR",fees:12000,duration:2,active:false,mode:"offline"}]
    // const result=await mymodel.insertMany(data)
    // console.log(result)

   /* const res1=await mymodel.findOne({active:false})
    console.log(res1._id)
    const res2=await mymodel.findByIdAndUpdate(res1._id,{$set:{fees:37000,duration:5}},{new:true})
    console.log(res2)
    const res3=await mymodel.findByIdAndDelete(res1._id)
    if(res3){
        console.log("Deleted",res3)
    }else{
        console.log("No Document Find")
    }*/
    //1.Display course,fees,duration of the course with 2nd highest fees
    const res4=await mymodel.find({},{course:1,fees:1,duration:1,_id:0}).sort({fees:-1}).limit(1).skip(1)
    console.log(res4)
    //2.Display all online course having fees greater than 25000
    const res5=await mymodel.find({fees:{$gt:25000},mode:"online"})
    console.log(res5)
    const res6=await mymodel.updateOne({course:"Cloud Computing"},{$set:{fees:32000,duration:5,active:true}},{upsert:true})
    console.log(res6)
    //4.count the total courses which are active and offline
    const res7=await mymodel.countDocuments({active:true,mode:"offline"})
    console.log(res7)
    //5 Decrease course duration by 1 of each course
    const res8=await mymodel.updateMany({},{$inc:{duration:-1}})
    console.log(res8)
    //6 Display active courses whose duration is >=4 but exclude courses which are offline
    const res9=await mymodel.find({$and:[{active:true},{duration:{$gte:4}}],$nor:[{mode:"offline"}]})
    console.log(res9)
    //Decrease fees by 10% of all courses
    const res10=await mymodel.updateMany({},{$mul:{fees:0.9}})
    console.log(res10)
    }
    catch(e){
        console.log(e)
    }
}
myfun()