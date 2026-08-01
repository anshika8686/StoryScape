import { useContext } from "react";
import { StoryContext } from "../context/story.context";

 
export function useStory(){
const data=useContext(StoryContext)
return data;
}
