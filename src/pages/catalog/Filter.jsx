import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFilter } from "../../store/asyncActions/asyncFilter";


const Filter = (props) => {


   const filterItems = props.filterItems;

//    useEffect(() => {
//     console.log(filterItems)
//    },[])
    
    const [checked, setChecked] = useState(
        new Array(createNewArray().length).fill(false)
    );

    function getNewArrayFromFilterData(){
        const itemsData =  filterItems.map(el=>{
            return el.items;
        })
        return itemsData;
    }

    function createNewArray(){
        const newArr = [];
        getNewArrayFromFilterData().map(el=>{
            return el.map(el=>{
                newArr.push(el.title)
            })
        })
        return newArr;
    }

    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    
    const handleCheck = (e, position) => {   
        const updateCheck = checked.map((el, index)=>{
           return index === position ? !el : el;
        })
        setChecked(updateCheck);
        const checkboxValue = e.target.value;
        const data = {season: checkboxValue, minPrice: minPrice, maxPrice: maxPrice, checked: !checked[position]}
        if(!checked[position]){
            console.log(data);
        }
        
        // console.log(!checked[position])
        // console.log(e.target.value);
       
    }

    const [filterData, setFilterData] = useState([]);
    
    // useEffect(() => {
    //     console.log(typeof Number(minPrice), minPrice);
    //     console.log(typeof Number(maxPrice), maxPrice);
    // },[minPrice, maxPrice]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(filterData);
    }

    

    

    return (
        <form onSubmit={handleSubmit} method="post" data-block='1' className="catalog-page__filter catalog__filter form">
            <fieldset className="form__fieldset">
                <legend className="form__title form__title_align_center">Фильтр</legend>
                {filterItems.map(el => {
                    return <div key={el.id} className="form__row form__row_direction_column">
                        <label className="form__label">{el.title}</label>
                        {el.type === "color" ?
                            <div  className="form__content-group">
                                {el.items.map((item) => {
                                    return (
                                        <div key={item.id} className="checkbox-tile checkbox-tile_size_big">
                                            <input onChange={(e)=>handleCheck(e, item.id-1)} checked={checked[item.id-1]} id={`filter-color-${item.id}`} name="Filter[color]" type="checkbox" value={item.title} className="checkbox-tile__elem" />
                                            <label htmlFor={`filter-color-${item.id}`} className={`checkbox-tile__label checkbox-tile__label_color_${item.name} checkbox-tile__label_type_color`}>{item.name}</label>
                                        </div>
                                    )
                                })}
                            </div> : 
                        el.type === "size" ?
                            <div className="form__content-group">
                                {el.items.map((item) => {
                                    return (
                                        <div key={item.id} className="checkbox-tile checkbox-tile_size_big">
                                            <input onChange={(e)=>handleCheck(e, item.id-1)} checked={checked[item.id-1]} id={`filter-size-${item.id}`} name="Filter[size]" type="checkbox" value={item.title} className="checkbox-tile__elem" />
                                            <label htmlFor={`filter-size-${item.id}`} className={`checkbox-tile__label`}>{item.title}</label>
                                        </div>
                                    )
                                })}
                            </div> :
                            el.items.map((item) => {
                                return (
                                    <div key={item.id} className="checkbox">
                                        <input onChange={(e)=>handleCheck(e, item.id-1)} checked={checked[item.id-1]} disabled={!item.available} id={`filter-${el.type}-${item.id}`} name={`Filter[${el.type}]`} type="checkbox" value={item.title} className="checkbox__elem" />
                                        <label htmlFor={`filter-${el.type}-${item.id}`} className="checkbox__label form__label">{item.title}</label>
                                    </div>
                                )
                            })
                        }  
                    </div>
                })}
                
                <div className="form__row form__row_direction_column">
                    <label className="form__label">Цена, руб.</label>
                    <div className="range-slider">
                        <input className="range-slider__elem" type="text" />
                        <div className="range-slider__output-row">
                            от<input onChange={(e)=>setMinPrice(e.target.value)} value={minPrice} name="Filter[price-min]" data-type="min"  className="input range-slider__output" type="number" />
                            до<input onChange={(e)=>setMaxPrice(e.target.value)} value={maxPrice} name="Filter[price-max]" data-type="max" className="input range-slider__output" type="number" />
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn">Показать товары</button>
            </fieldset>
        </form>
    )
}


export default Filter;
