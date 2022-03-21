import React from 'react';



const Filter = ({ onChange }) => {
    // const [searchProducts, setSearchProducts] = useState("")
    return (
        <div>
            <label ><input className="yes" type="text" name="Search" placeholder="Search Products" onChange={(ev) => { onChange(ev.target.value) }} /></label>
            </div>
    );
}
export default Filter;