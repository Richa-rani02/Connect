export const searchUser=(usersList,searchText)=>{
    let updatedList=[...usersList];
    if(searchText){
        return updatedList.filter((user)=>user.userHandler.toLowerCase().includes(searchText.toLowerCase()))
    }
    return updatedList;
 
 }