import Input from "./Input";

const Searchbar=({...props})=>{
    return (
        <Input
            type='search'
            id='search'
            name='search'
            {...props}
        />
    );
}

export default Searchbar;