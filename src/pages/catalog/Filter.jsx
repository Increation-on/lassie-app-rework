import axios from "axios";
import { useEffect, useState } from "react";


const Filter = () => {

    const [filterData, setFilterData] = useState([]);

    useEffect(() => {
        axios.get('/mocks/filter.json').then(response => {
            const data = response.data;
            setFilterData(data);
        }).catch((e) => alert(e + 'something went wrong'));
    }, []);




    return (
        <form method="post" action="" data-block='1' className="catalog-page__filter catalog__filter form">
            <fieldset className="form__fieldset">
                <legend className="form__title form__title_align_center">Фильтр</legend>
                {filterData.map(el => {
                    return <div className="form__row form__row_direction_column">
                        <label className="form__label">{el.title}</label>
                        {el.type === "color" ?
                            <div className="form__content-group">
                                {el.items.map(item => {
                                    return (
                                        <div className="checkbox-tile checkbox-tile_size_big">
                                            <input id={`filter-color-${item.id}`} name="Filter[color]" type="checkbox" value={item.title} className="checkbox-tile__elem" />
                                            <label htmlFor={`filter-color-${item.id}`} className={`checkbox-tile__label checkbox-tile__label_color_${item.name} checkbox-tile__label_type_color`}>Зеленый</label>
                                        </div>
                                    )
                                })}
                            </div> : 
                        el.type === "size" ?
                            <div className="form__content-group">
                                {el.items.map(item => {
                                    return (
                                        <div className="checkbox-tile checkbox-tile_size_big">
                                            <input id={`filter-size-${item.id}`} name="Filter[size]" type="checkbox" value={item.title} className="checkbox-tile__elem" />
                                            <label htmlFor={`filter-size-${item.id}`} className={`checkbox-tile__label`}>{item.title}</label>
                                        </div>
                                    )
                                })}
                            </div> :
                            el.items.map(item => {
                                return (
                                    <div className="checkbox">
                                        <input disabled={!item.available} id={`filter-${el.type}-${item.id}`} name={`Filter[${el.type}]`} type="checkbox" value={item.title} className="checkbox__elem" />
                                        <label htmlFor={`filter-${el.type}-${item.id}`} className="checkbox__label form__label">{item.title}</label>
                                    </div>
                                )
                            })
                        }  
                    </div>
                })}


                {/* <div className="form__row form__row_direction_column">
                    <label className="form__label">Сезон</label>
                    <div className="checkbox">
                        <input id="filter-season-1" name="Filter[season]" type="checkbox" value="winter" className="checkbox__elem" />
                        <label htmlFor="filter-season-1" className="checkbox__label form__label">Зима</label>
                    </div>
                    <div className="checkbox">
                        <input id="filter-season-2" name="Filter[season]" type="checkbox" value="off-season" className="checkbox__elem" />
                        <label htmlFor="filter-season-2" className="checkbox__label form__label">Межсезонье</label>
                    </div>
                </div> */}
                {/* <div className="form__row form__row_direction_column">
                    <label className="form__label">Коллекция</label>
                    <div className="checkbox">
                        <input id="filter-collection-1" name="Filter[collection]" type="checkbox" value="newborn" disabled className="checkbox__elem" />
                        <label htmlFor="filter-collection-1" className="checkbox__label form__label">Newborn</label>
                    </div>
                    <div className="checkbox">
                        <input id="filter-collection-2" name="Filter[collection]" type="checkbox" value="active" className="checkbox__elem" />
                        <label htmlFor="filter-collection-2" className="checkbox__label form__label">Active</label>
                    </div>
                    <div className="checkbox">
                        <input id="filter-collection-3" name="Filter[collection]" type="checkbox" value="urban" disabled className="checkbox__elem" />
                        <label htmlFor="filter-collection-3" className="checkbox__label form__label">Urban</label>
                    </div>
                    <div className="checkbox">
                        <input id="filter-collection-4" name="Filter[collection]" type="checkbox" value="lassie by reima" disabled className="checkbox__elem" />
                        <label htmlFor="filter-collection-4" className="checkbox__label form__label">Lassie by Reima</label>
                    </div>
                </div> */}
                {/* <div className="form__row form__row_direction_column">
                    <label className="form__label">Цвет</label>
                    <div className="form__content-group">
                        <div className="checkbox-tile checkbox-tile_size_big">
                            <input id="filter-color-1" name="Filter[color]" type="checkbox" value="green" className="checkbox-tile__elem" />
                            <label htmlFor="filter-color-1" className="checkbox-tile__label checkbox-tile__label_color_green checkbox-tile__label_type_color">Зеленый</label>
                        </div>
                        <div className="checkbox-tile checkbox-tile_size_big">
                            <input id="filter-color-2" name="Filter[color]" type="checkbox" value="pink" className="checkbox-tile__elem" />
                            <label htmlFor="filter-color-2" className="checkbox-tile__label checkbox-tile__label_color_pink checkbox-tile__label_type_color">Розовый</label>
                        </div>
                        <div className="checkbox-tile checkbox-tile_size_big">
                            <input id="filter-color-3" name="Filter[color]" type="checkbox" value="orange" className="checkbox-tile__elem" />
                            <label htmlFor="filter-color-3" className="checkbox-tile__label checkbox-tile__label_color_orange checkbox-tile__label_type_color">Оранжевый</label>
                        </div>
                        <div className="checkbox-tile checkbox-tile_size_big">
                            <input id="filter-color-4" name="Filter[color]" type="checkbox" value="dark blue" className="checkbox-tile__elem" />
                            <label htmlFor="filter-color-4" className="checkbox-tile__label checkbox-tile__label_color_dark-blue checkbox-tile__label_type_color">Темно-синий</label>
                        </div>
                        <div className="checkbox-tile checkbox-tile_size_big">
                            <input id="filter-color-5" name="Filter[color]" type="checkbox" value="light green" className="checkbox-tile__elem" />
                            <label htmlFor="filter-color-5" className="checkbox-tile__label checkbox-tile__label_color_light-green checkbox-tile__label_type_color">Салатовый</label>
                        </div>
                        <div className="checkbox-tile checkbox-tile_size_big">
                            <input id="filter-color-6" name="Filter[color]" type="checkbox" value="sand" className="checkbox-tile__elem" />
                            <label htmlFor="filter-color-6" className="checkbox-tile__label checkbox-tile__label_color_sand checkbox-tile__label_type_color">Песочный</label>
                        </div>
                        <div className="checkbox-tile checkbox-tile_size_big">
                            <input id="filter-color-7" name="Filter[color]" type="checkbox" value="red" className="checkbox-tile__elem" />
                            <label htmlFor="filter-color-7" className="checkbox-tile__label checkbox-tile__label_color_red checkbox-tile__label_type_color">Тёмно-красный</label>
                        </div>
                        <div className="checkbox-tile checkbox-tile_size_big">
                            <input id="filter-color-8" name="Filter[color]" type="checkbox" value="lilac" className="checkbox-tile__elem" />
                            <label htmlFor="filter-color-8" className="checkbox-tile__label checkbox-tile__label_color_lilac checkbox-tile__label_type_color">Сиреневый</label>
                        </div>
                        <div className="checkbox-tile checkbox-tile_size_big">
                            <input id="filter-color-9" name="Filter[color]" type="checkbox" value="blue" className="checkbox-tile__elem" />
                            <label htmlFor="filter-color-9" className="checkbox-tile__label checkbox-tile__label_color_blue checkbox-tile__label_type_color">Голубой</label>
                        </div>
                    </div>
                </div> */}
                {/* <div className="form__row form__row_direction_column">
                    <label className="form__label">Пол</label>
                    <div className="checkbox">
                        <input id="filter-gender-1" name="Filter[gender]" type="checkbox" value="male" className="checkbox__elem" />
                        <label htmlFor="filter-gender-1" className="checkbox__label form__label">Мальчик</label>
                    </div>
                    <div className="checkbox">
                        <input id="filter-gender-2" name="Filter[gender]" type="checkbox" value="female" className="checkbox__elem" />
                        <label htmlFor="filter-gender-2" className="checkbox__label form__label">Девочка</label>
                    </div>
                    <div className="checkbox">
                        <input id="filter-gender-3" name="Filter[gender]" type="checkbox" value="unisex" className="checkbox__elem" />
                        <label htmlFor="filter-gender-3" className="checkbox__label form__label">Унисекс</label>
                    </div>
                </div> */}
                {/* <div className="form__row form__row_direction_column">
                    <label className="form__label">Размер</label>
                    <div className="form__content-group">
                        <div className="checkbox-tile checkbox-tile_size_big">
                            <input id="filter-size-1" name="Filter[size]" type="checkbox" value="50" className="checkbox-tile__elem" />
                            <label htmlFor="filter-size-1" className="checkbox-tile__label">50</label>
                        </div>
                        <div className="checkbox-tile checkbox-tile_size_big">
                            <input id="filter-size-2" name="Filter[size]" type="checkbox" value="56" className="checkbox-tile__elem" />
                            <label htmlFor="filter-size-2" className="checkbox-tile__label">56</label>
                        </div>
                        <div className="checkbox-tile checkbox-tile_size_big">
                            <input id="filter-size-3" name="Filter[size]" type="checkbox" value="62" className="checkbox-tile__elem" />
                            <label htmlFor="filter-size-3" className="checkbox-tile__label">62</label>
                        </div>
                        <div className="checkbox-tile checkbox-tile_size_big">
                            <input id="filter-size-4" name="Filter[size]" type="checkbox" value="68" className="checkbox-tile__elem" />
                            <label htmlFor="filter-size-4" className="checkbox-tile__label">68</label>
                        </div>
                        <div className="checkbox-tile checkbox-tile_size_big">
                            <input id="filter-size-5" name="Filter[size]" type="checkbox" value="74" className="checkbox-tile__elem" />
                            <label htmlFor="filter-size-5" className="checkbox-tile__label">74</label>
                        </div>
                        <div className="checkbox-tile checkbox-tile_size_big">
                            <input id="filter-size-6" name="Filter[size]" type="checkbox" value="80" className="checkbox-tile__elem" />
                            <label htmlFor="filter-size-6" className="checkbox-tile__label">80</label>
                        </div>
                        <div className="checkbox-tile checkbox-tile_size_big">
                            <input id="filter-size-7" name="Filter[size]" type="checkbox" value="86" className="checkbox-tile__elem" />
                            <label htmlFor="filter-size-7" className="checkbox-tile__label">86</label>
                        </div>
                        <div className="checkbox-tile checkbox-tile_size_big">
                            <input id="filter-size-8" name="Filter[size]" type="checkbox" value="92" className="checkbox-tile__elem" />
                            <label htmlFor="filter-size-8" className="checkbox-tile__label">92</label>
                        </div>
                        <div className="checkbox-tile checkbox-tile_size_big">
                            <input id="filter-size-9" name="Filter[size]" type="checkbox" value="98" className="checkbox-tile__elem" />
                            <label htmlFor="filter-size-9" className="checkbox-tile__label">98</label>
                        </div>
                    </div>
                </div> */}
                {/* <div className="form__row form__row_direction_column">
                    <label className="form__label">Наличие</label>
                    <div className="checkbox">
                        <input id="filter-availability-1" name="Filter[availability]" type="checkbox" value="available" className="checkbox__elem" />
                        <label htmlFor="filter-availability-1" className="checkbox__label form__label">В наличии</label>
                    </div>
                    <div className="checkbox">
                        <input id="filter-availability-2" name="Filter[availability]" type="checkbox" value="order" className="checkbox__elem" />
                        <label htmlFor="filter-availability-2" className="checkbox__label form__label">Под заказ</label>
                    </div>
                </div> */}

                
                <div className="form__row form__row_direction_column">
                    <label className="form__label">Цена, руб.</label>
                    <div className="range-slider">
                        <input className="range-slider__elem" type="text" />
                        <div className="range-slider__output-row">
                            <input name="Filter[price-min]" data-type="min" readOnly className="input range-slider__output" type="text" />
                            <input name="Filter[price-max]" data-type="max" readOnly className="input range-slider__output" type="text" />
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn">Показать товары</button>
            </fieldset>
        </form>
    )
}


export default Filter;
