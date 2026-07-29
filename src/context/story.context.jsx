import { createContext, useState } from "react";
import { generatestory } from "../services/story.api";

export const StoryContext=createContext()
export const StoryProvider=({children})=>{
    const [loading, setloading] = useState(false)

    const handlegenerateStory=async(story)=>{
        try{
        setloading(true)
        const data=await generatestory(story)
        console.log("response from handlegenerate story")
        console.log(data)
        return data;
       
    }
    catch(err){
        console.log(err.message)
        throw err
    }
    finally{
         setloading(false)

    }
}
return (<StoryContext.Provider value={{loading, handlegenerateStory}} >
    {children}
</StoryContext.Provider>)
}