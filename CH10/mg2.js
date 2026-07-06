const mg=require("mongoose")
mg.connect("mongodb://127.0.0.1:27017/mdb2").then(()=>{console.log("Success")}).catch((e)=>{console.log(e)})
const myschema=new mg.Schema(
    {
        username:String,
        age:Number,
        active:Boolean,
        doj:{
            type:Date,
            default:new Date().toLocaleDateString()
        }
    },{strict:false,versionKey:false}
)
const mymodel=new mg.model("person",myschema)
const newfun= async()=>{
    try{
        const data=[{
            username:"ABC",age:28,active:false},
            {username:"PQR",age:29,active:true},
            {username:'XYZ',age:30,active:false}
        ]
        const result=await mymodel.insertMany(data)
        console.log(result)
    }
    catch(e){
        console.log(e)
    }
}
newfun()