import {Todos} from "./reducer";

let typePolicies = {
    Query:{
        fields:{
            Todos:{
                read(){
                    return Todos(); 
                }
            }
        }
    }
}

export default typePolicies