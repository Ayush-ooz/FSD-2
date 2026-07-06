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
const myfun = async()=>{
    try{
        const data=new mymodel(
            {
                username:'abc',
                age:27,
                active:true,
                city:"Ahmedabad"
            }
        )
        const result=await data.save()
        console.log(result)
    }
    catch(e){
        console.log(e)
    }
}
myfun()