const useLocationSort = (sort) => {


return (userA, userB) => {
    if(!sort) return 0;

const LocationA = `${userA.location.city}, ${userA.location.state}`;
const LocationB = `${userB.location.city}, ${userB.location.state}`;



if( LocationA < LocationB) {
    
    return sort === "asc" ? -1 : 1
}

if( LocationA > LocationB) {

    return sort === "desc" ? 1 : -1
}

return 0;
}

}

export default useLocationSort;
